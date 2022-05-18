import { Command } from '../Command.js';

class SendInfoCommand extends Command {

    constructor( editor, usrInfo ) {

        super( editor )

        this.type = 'SendInfoCommand';
        this.name = 'SendInfo';
        this.updatable = true;

        this.usrInfo = usrInfo;

    }

    execute() {
        
        //user info 임시저장
        //signals에서 user info 업데이트하기 
        this.editor.addUsrInfo( this.usrInfo );
        this.editor.signals.sceneChanged.dispatch();
        this.editor.signals.sidebarVanish.dispatch();
        this.editor.signals.viewportCloseup.dispatch();

    }

    undo() {

        this.form[ usrInfo ] = this.newUsrInfo;
        // this.editor.signals.usrChanged.dispatch( this.form );

    }

    redo() {

    }

    update() {

    }

    fromJSON( json ) {

    }

    toJSON() {

    }

}


export { SendInfoCommand }