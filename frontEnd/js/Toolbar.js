import { UIPanel } from '../libs/ui.js';

function Toolbar ( editor ) {
    
    const container = new UIPanel();
    container.setId( 'toolbar' );
    container.setTextContent( 'toolbar' );

    editor.signals.createRenderer.dispatch();
    
    return container;
}


export { Toolbar }