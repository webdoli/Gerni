import { UIPanel } from '../libs/ui.js';
import { ViewportSection } from './Viewport.section.js';
import { ViewportChart } from './Viewport.render.chart.js';

function Viewport ( editor ) {

    const signals = editor.signals;
    const container = new UIPanel();

    let viewportSection = new ViewportSection( editor );
    let viewportChart = new ViewportChart( editor );
 
    container.setId( 'viewport' );
    container.add( viewportSection );

//Signals

    signals.createRenderer.add( function( ) {

        //renderer설정 
        console.log('viewport createRenderer 후반 셋팅');
        let viewportRender = document.querySelector( '.viewport-render' );

        viewportRender.addEventListener( 'click', (e) => {

            if( e.target.classList.contains( 'usr-input-chk') || e.target.classList.contains( 'slcLabel') ) {

                if( e.target.classList.contains( 'slcLabel') ) {

                    e.target.parentNode.firstChild.classList.toggle( 'selected' );

                } else {

                    e.target.classList.toggle( 'selected' );

                }
            }

        }); //CheckBox click End
    
    });

    signals.viewportCloseup.add( function() {

        container.dom.style.width = '100%';

    });

    signals.viewportChartRenderer.add( function() {

        //viewport.section아래 모두 제거
        // viewport.section 아래 viewportChart 넣기
        viewportSection.dom.style.display = 'none';
        container.add( viewportChart );

    });

    signals.allChartRes.add( function( config, canvasEl ) {

        console.log( 'signals.allChartRes.canvasEl: ' + canvasEl.dom );

        canvasEl.dom.parentNode.style.height = '300px';
        canvasEl.dom.parentNode.style.width = '300px';
        editor.scene.newChart = new Chart( canvasEl.dom , config );

    });

    return container;
    
}

export { Viewport }