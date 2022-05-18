import { UIPanel } from '../libs/ui.js';

function Footer () {

    const container = new UIPanel();
    container.setId( 'footer' );
    container.setTextContent( 'footer' );

    return container;
}

export { Footer }