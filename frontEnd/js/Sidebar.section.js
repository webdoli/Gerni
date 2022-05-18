import { UISection, UIElement, UIDiv } from '../libs/ui.js';
import { SidebarBoards } from './Sidebar.section.boards.js';

function SidebarSection ( editor ) {

    const container = new UISection();
    const sidebarBoards = new SidebarBoards( editor );
    
    container.setClass( 'sidebar-container' );
    
    let title = new UIDiv();
    let info = new UIDiv();
    let titleContainer = new UIElement( document.createElement('h1') );

    title.setClass( 'title' );
    title.setTextContent( 'Sidebar' );
    info.setClass( 'info' );
    info.setTextContent( 'x' );

    titleContainer.add( title );
    titleContainer.add( info );

    container.add( titleContainer );
    container.add( sidebarBoards );

    return container;
    
}

export { SidebarSection }