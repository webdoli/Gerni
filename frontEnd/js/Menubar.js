import { UIPanel } from '../libs/ui.js';
import { MenubarFile } from './Menubar.File.js';
import { MenubarEdit } from './Menubar.Edit.js';

function Menubar ( editor ) {

    const container = new UIPanel();

    container.setId( 'menubar' );
    container.add( new MenubarFile( editor ) );
    container.add( new MenubarEdit( editor) );

    return container;
    
}

export { Menubar }