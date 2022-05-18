import { Command } from '../Command.js';
import { ChartDB } from '../../libs/ChartDB.js';

class SetChartCommand extends Command {

    constructor( editor, canvasUI, chartName, usrName ) {

        super( editor );

        this.type = 'SetChangeChartCommand';
        this.name = 'SetChangeChart';
        this.updatable = false;
        this.usrName = usrName;

        this.canvas = canvasUI;
        // this.chartDB = ChartDB;
        this.chartName = chartName;
        this.oldChartName = ( editor.scene !== undefined ) ? editor.scene.chartName : undefined ;
    
    }


    execute() {

        const config = ChartDB( this.chartName, this.editor.scene.calculator, this.usrName );
        
        if( this.editor.scene.newChart ) {

            this.editor.scene.newChart.destroy();
        
        }

        this.editor.render(config, this.canvas )

        // this.editor.signals.allChartRes.dispatch( config, this.canvas );

    }

    undo() {

        this.chartName = this.oldChartName;
        const config = ChartDB( this.chartName, this.editor.scene.calculator, this.usrName );
        this.editor.scene.newChart.destroy();
        this.editor.render( config, this.canvas )

    }


    redo() {

    }


    fromJSON() {


    }

    toJSON() {


    }


}

export { SetChartCommand };