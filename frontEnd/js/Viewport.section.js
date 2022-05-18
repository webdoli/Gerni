import { UISection, UIElement, UIDiv, UISpan } from '../libs/ui.js';
import { ViewportRender } from './Viewport.render.js';

function ViewportSection ( editor ) {

    const container = new UISection();
    container.setClass( 'viewportSection' );
    const closeWrap = new UIDiv();
    const pepeImg = new UIElement( document.createElement('img') );
    const pepeSpan01 = new UISpan().setClass( 'pepeSpan01' );
    const pepeSpan02 = new UISpan().setClass( 'pepeSpan02' );
    const pepeSpan03 = new UISpan().setClass( 'pepeSpan03' );

    this.titleWrap = new UIElement( document.createElement('h1') );
    this.title = new UIDiv();
    this.info = new UIDiv();

    this.title.setClass( 'title' );
    this.info.setClass( 'info' );

    this.title.setTextContent( 'Viewport' );

    this.titleWrap.add( this.title );
    this.titleWrap.add( this.info );

    closeWrap.setClass( 'closeWrap' );
    
    pepeImg.dom.src = '../frontend/img/pepe03.jpg';
    
    closeWrap.add( pepeImg );
    closeWrap.add( pepeSpan01, pepeSpan02, pepeSpan03 );
    
    container.add( this.titleWrap );
    container.add( closeWrap );
    container.add( new ViewportRender( editor ) );


    editor.signals.panelColorChanged.add( function() {

        console.log( 'viewport panel색상변경' );
        container.setClass( 'colorChange' );
    });

    editor.signals.pepeRemoved.add( function() {

        closeWrap.dom.style.display = 'none';

    })
    
    return container;

}

export { ViewportSection }