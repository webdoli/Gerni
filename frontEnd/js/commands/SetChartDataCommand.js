import { Command } from '../Command.js';

class SetChartDataCommand extends Command {

    constructor( editor, usrSlc ) {

        super( editor )

        this.type = 'SetChartDataCommand';
        this.name = 'SetChartData';
        this.updatable = true;
        this.usrSlc = usrSlc;
        // this.oldUsrInfo = ( usrForm !== undefined ) ? usrForm[ 'usrInfo' ] : undefined;

    }

    execute() {

        // Editor에서 viewport쪽으로 chartRender실행 명령
        // Editor에 필요한 데이터 전송하기 
        console.log( 'SetChartDataCommand execute!' );
        this.editor.compChartData( this.usrSlc );
        
    }

    undo() {


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


export { SetChartDataCommand }