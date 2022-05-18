import { Command } from '../Command.js';

class SetLineChartCommand extends Command {

    constructor( editor, canvasEl ) {

        super( editor )

        this.type = 'SetLineChartCommand';
        this.name = 'SetLineChart';

        this.canvas = canvasEl;
        this.updatable = true;
        // this.oldUsrInfo = ( usrForm !== undefined ) ? usrForm[ 'usrInfo' ] : undefined;

    }

    execute() {

        console.log( 'SetLineChartCommand execute!' );
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

                label: '인간력 테스트',
                data: [
                    this.editor.scene.calculator.financial_risk, 
                    this.editor.scene.calculator.unfortune_risk, 
                    this.editor.scene.calculator.fame_risk, 
                    this.editor.scene.calculator.cheating_risk, 
                    this.editor.scene.calculator.relationship_risk
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1

            }]
        };

        const config = {
        
            type: 'line',
            data: data,
        
        };
        
        this.editor.scene.newChart.destroy();
        this.editor.signals.allChartRes.dispatch( config, this.canvas );
        
    }

    undo() {

        // this.editor.scene.chartType = this.oldvalue;
        // editor에서 차트 destroy()실행
        // editor에서 차트타입에 맞게끔 데이터 받아서 실행
        //Command를 changeChartCommand로 통합하고, 값을 바꾸는 방식으로 변경해야 함

    }

    redo() {

    }

    update() {

    }

    fromJSON( json ) {

        this.editor.json = json;

    }

    toJSON() {

    }

}


export { SetLineChartCommand }