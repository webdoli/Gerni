import { UIDiv, UIButton, UIElement } from '../libs/ui.js';
import { ViewportSwiper } from './Viewport.section.swiper.js';
import { SetChartDataCommand } from './commands/SetChartDataCommand.js';

function ViewportRender( editor ) {
    const container = new UIDiv();
    const chartBtn = new UIButton();

    let swiper = new ViewportSwiper( editor );
    
    chartBtn.setClass( 'chartBtn' );
    chartBtn.setTextContent( '제출하기' );

    container.setClass( 'viewport-render' );
    
    container.add( swiper );
    container.add( chartBtn );

    chartBtn.dom.addEventListener( 'click', (e) => {
        
        let usrSlc = document.querySelectorAll('.usr-input-chk.selected');
        editor.execute( new SetChartDataCommand( editor, usrSlc ) );

    })


    //signal

    editor.signals.viewportCloseup.add( function() {

        container.dom.style.filter = 'blur(0)'
        container.dom.style.background = 'none';
    });

    editor.signals.chartBtnOn.add( function() {

        chartBtn.addClass( 'active' );

    })

   
    editor.signals.sceneChanged.add( function() {

    });


    return container;
}


export { ViewportRender };
