import { UIPanel, UIRow } from '../libs/ui.js';

function MenubarEdit( editor ) {

    const container = new UIPanel();
    container.setClass( 'menu' );

    const title = new UIPanel();
    title.setClass( 'title' );
    title.setTextContent( 'Edit' );
    container.add( title );

    const options = new UIPanel();
    options.setClass( 'options' );
    container.add( options );

//Undo
    let option = new UIRow();
    option.setClass( 'option' );
    option.setTextContent( 'Undo' );
    option.onClick( function() {

        if( confirm( '되돌리기를 하시겠습니까?') ) {
            editor.undo();
        }

    });

    options.add( option );

//History

    option = new UIRow();
    option.setClass( 'option' );
    option.setTextContent( 'history' );
    option.onClick( () => {
        alert(' history 클릭');
    });

    options.add( option );

    return container;

}

export { MenubarEdit }
