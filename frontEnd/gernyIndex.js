import { Viewport } from './js/Viewport.js';
import { Toolbar } from './js/Toolbar.js';
import { Sidebar } from './js/Sidebar.js';
import { Menubar } from './js/Menubar.js';
import { IScript } from './iScript.js';

class GernyIndex extends IScript{

    constructor( wrap ) {

        wrap.classList.add( 'hidden' );
        super();
        
        this.getDOM();
        this.execute();
    }

    getDOM() {

        var sidebar = new Sidebar( this.editor );
        this.column_center.appendChild( sidebar.dom );

        var viewport = new Viewport( this.editor );
        this.column_center.appendChild( viewport.dom );

        var toolbar = new Toolbar( this.editor );
        this.column_center.appendChild( toolbar.dom );

        var menubar = new Menubar( this.editor );
        this.column_menu.appendChild( menubar.dom );

    }

}

export { GernyIndex };
