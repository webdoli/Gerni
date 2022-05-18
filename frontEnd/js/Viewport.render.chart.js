import { UIDiv, UICanvas, UIButton, UISpan, UIElement } from '../libs/ui.js';
import { calculatorQuestion } from './utils/CalculatorQuestion.js';
import { judge } from './utils/judge.js';
import { SetChartCommand } from './commands/SetChartCommand.js';
import commentImgs from '../../backend/models/commentData.json' assert { type: "json" };

function ViewportChart( editor ) {

    const container = new UIDiv();
    const mycanvasWrapper = new UIDiv();  //new
    const canvasEl = new UICanvas();
    const anylisis = new UIDiv();
    const convertBtnWrap = new UIDiv();
    const commentWrap = new UIDiv();
    const commentImg = new UIElement( document.createElement('img') );
    const commentSpan = new UISpan();
    const barChartBtn = new UIButton( '막대형' );
    const radarChartBtn = new UIButton( '방사형' );
    const lineChartBtn = new UIButton( '꺾은선' );

    container.setClass( 'canvasWrapper' );
    mycanvasWrapper.setClass( 'mycanvasWrapper' );  //new
    canvasEl.setId( 'myChart' );

    console.log( 'canvasWrapper.width: ' + container.dom.width );

    anylisis.setClass( 'anylisis' );
    commentWrap.setClass( 'commentWrap' );

    //button creating
    barChartBtn.setClass('chart-btn');
    barChartBtn.setId('bar');
    radarChartBtn.setClass('chart-btn');
    radarChartBtn.setId('radar');
    lineChartBtn.setClass('chart-btn');
    lineChartBtn.setId('line');

    let chartChangeBtn = [

        barChartBtn,
        radarChartBtn,
        lineChartBtn
    
    ];

    chartChangeBtn.forEach( item => {

        item.onClick( function( e ) {

            let id = e.target.id;
            console.log('id: ' + id );

            editor.scene.chartName = id;
            editor.execute( new SetChartCommand( editor, canvasEl, id, editor.scene.usrInfo.name ) );

        });

    });

    mycanvasWrapper.add( canvasEl );  //new
    commentWrap.add( commentImg );
    commentWrap.add( commentSpan );
    convertBtnWrap.setClass( 'chart-convert-wrap');
    convertBtnWrap.add( barChartBtn, radarChartBtn, lineChartBtn );
    container.add( commentWrap, convertBtnWrap, mycanvasWrapper, anylisis ); //change



    editor.signals.chartRender.add( function() {

        let usrInfoData = [ 
            editor.scene.usrInfo.name, 
            editor.scene.usrInfo.job, 
            editor.scene.usrInfo.age, 
            editor.scene.usrInfo.relation, 
            editor.scene.usrInfo.body 
        ]

        let calculator = calculatorQuestion( usrInfoData, editor.scene.slcData );
        let comment = judge( calculator, usrInfoData[0] );
        let commentImgs = imgMatch( comment.sumscr );
        commentImg.dom.src = commentImgs;
        
        console.log( 'comment pepe이미지: ' + commentImgs );

        commentSpan.setTextContent( comment.comment );

        // console.log( 'comment: ' + comment.comment );
        // console.log( '총점: ' + comment.sumscr );

        editor.scene.calculator = calculator;
        editor.execute( new SetChartCommand( editor, canvasEl, 'radar', usrInfoData[0] ) )

    });


    function imgMatch( sum ) {

        if ( sum > 40) {

            return commentImgs.level_A[0]

        } else if ( sum >= 15 && sum < 40 ) {

            return commentImgs.level_B[0]

        } else if ( sum > -15 && sum < 15 ) {

            return commentImgs.level_C[0]

        } else {

            return commentImgs.level_D[0]

        }

    }


    // function render( config, canvasEl ) {
        
    //     editor.signals.allChartRes.dispatch( config, canvasEl );

    // }

    return container;

}

export { ViewportChart }