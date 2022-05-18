import { Command } from '../Command.js';

class SetRadarChartCommand extends Command {

    constructor( editor, canvasEl ) {

        super( editor )

        this.type = 'SetRadarChartCommand';
        this.name = 'SetRadarChart';

        this.canvas = canvasEl;
        this.updatable = true;
        // this.oldUsrInfo = ( usrForm !== undefined ) ? usrForm[ 'usrInfo' ] : undefined;

    }

    execute() {

        console.log( 'SetRadarChartCommand execute!' );

        const data = {
            
            labels: [

                '재정 건정성',
                '행운력',
                '이타심',
                '정직함',
                '사회성'
            
            ],
            datasets: [ {

                label: '인간력 테스트',
                data: [
                    this.editor.scene.calculator.financial_risk, 
                    this.editor.scene.calculator.unfortune_risk, 
                    this.editor.scene.calculator.fame_risk, 
                    this.editor.scene.calculator.cheating_risk, 
                    this.editor.scene.calculator.relationship_risk
                ],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'

            }]
        };


        const config = {

            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            }
        }


        this.editor.scene.newChart.destroy();
        this.editor.signals.allChartRes.dispatch( config, this.canvas );
        
        
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


export { SetRadarChartCommand }