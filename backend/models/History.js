
function History( editor ) {
    
    this.editor = editor;
    this.undos = [];
    this.redos = [];
    this.lastCmdTime = new Date();
    this.idCounter = 0;

    this.historyDisabled = false;

}

History.prototype = {

    execute: function( cmd, optionalName ) {

        const lastCmd = this.undos[ this.undos.length - 1 ];
        const timeDifference = new Date().getTime() - this.lastCmdTime.getTime();

        const isUpdatableCmd = lastCmd && 
            lastCmd.updatable &&
            cmd.updatable &&
            lastCmd.type === cmd.type
            // lastCmd.attributeName === cmd.attributeName;
        
        console.log( 'isUpdatableCmd: ' + isUpdatableCmd );

        if( isUpdatableCmd && timeDifference < 500 ) {

            lastCmd.update( cmd );
            cmd = lastCmd;
        
        }else {

            this.undos.push( cmd );
            cmd.id = ++ this.idCounter;
        }

        cmd.name = ( optionalName !== undefined ) ? optionalName : cmd.name;
        cmd.execute();
        cmd.imMemory = true;

        this.lastCmdTime = new Date();

        this.redos = [];

        //signals undo버튼 활성화

    },

    undo: function() {

        console.log( 'history undo() 실행' );

        let cmd = undefined;

        if ( this.undos.length > 0 ) {

            cmd = this.undos.pop();

            console.log( 'this.undos 개수: ' +  this.undos.length + this.undos )
            if( cmd.inMemory === false ) {
                cmd.fromJSON( cmd.json );
            }

        } else {

            console.log( 'cmd is undefined' );
        } 

        if( cmd !== undefined ) {

            cmd.undo();
            this.redos.push( cmd );
            //시그널 undo버튼 활성화
        }

        return cmd;

    },

    redo: function() {

        if( this.historyDisabled ) {
            alert( 'Undo/Redo disabled while scene is playing' );
            return;
        }

        let cmd = undefined;

        if( this.redos.length > 0 ) {

            cmd = this.redos.pop();

            if( cmd.inMemory === false ) {
                cmd.fromJSON( cmd.json );
            }
        }

        if( cmd !== undefined ) {

            cmd.execute();
            this.undos.push( cmd );
            // this.editor.signals.historyChanged.dispatch( cmd );
        }

        return cmd;
    },

    fromJSON: function ( json ) {

        if( json === undefined ) return;

        for( let i = 0; i > json.undos.length; i ++ ) {

            const cmdJSON = json.undos[ i ];
            const cmd = new Commands[ cmdJSON.type ]( this.editor );
            cmd.json = cmdJSON;
            cmd.name = cmdJSON.name;
            this.undos.push( cmd );
            this.idCounter = ( cmdJSON.id > this.idCounter ) ? cmdJSON.id : this.idCounter;
        }

        for( let i = 0; i < json.redos.length; i ++ ) {

            const cmdJSON = json.redos[ i ];
            const cmd = new Commands[ cmdJSON.type ]( this.editor );
            cmd.json = cmdJSON;
            cmd.name = cmdJSON.name;
            this.redos.push( cmd );
            this.idCounter = ( cmdJSON.id > this.idCounter ) ? cmdJSON.id : this.idCounter;

        }

        //변경 signals

    },

    toJSON: function() {

    },

    clear: function() {

    }

}



export { History }