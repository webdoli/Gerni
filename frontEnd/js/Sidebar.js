import { UIPanel } from '../libs/ui.js';
import { SidebarSection } from './Sidebar.section.js';

function Sidebar ( editor ) {
    
    const container = new UIPanel();
    let sidebarSection = new SidebarSection( editor );

    container.setId( 'sidebar ');
    container.add( sidebarSection );


    //signal
    editor.signals.sidebarVanish.add( function() {

        container.dom.style.width = '0%';

    })
   
    return container;

}

export { Sidebar }