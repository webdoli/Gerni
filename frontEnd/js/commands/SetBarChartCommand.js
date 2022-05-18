import { Command } from '../Command.js';

class SetBarChartCommand extends Command {

    constructor( editor, canvasEl, type, usrName ) {

        super( editor )

        this.type = 'SetBarChartCommand';
        this.name = 'SetBarChart';
        this.usrName = usrName;

        this.canvas = canvasEl;
        this.updatable = true;
        // this.oldUsrInfo = ( usrForm !== undefined ) ? usrForm[ 'usrInfo' ] : undefined;

    }

    execute() {

        console.log( 'setBarChartCommand execute!' );

        const labels = [

            '재정 건정성',
            '행운력',
            '이타심',
            '정직함',
            '사회성'
        
        ];

        const data = {
            labels: labels,
            datasets: [{
              label: `${usrName}의 인성 결과`,
              data: [ 

                    this.editor.scene.calculator.financial_risk, 
                    this.editor.scene.calculator.unfortune_risk, 
                    this.editor.scene.calculator.fame_risk, 
                    this.editor.scene.calculator.cheating_risk, 
                    this.editor.scene.calculator.relationship_risk

                ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
              ],
              borderWidth: 1
            }]
          };

        const config = {
            type: 'bar',
            data: data,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };
        
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


export { SetBarChartCommand }