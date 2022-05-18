import { UIPanel, UIRow, UIHorizontalRule } from '../libs/ui.js';

function MenubarFile( editor ) {

    const container = new UIPanel();
    container.setClass( 'menu' );

    const title = new UIPanel();
    title.setClass( 'title' );
    title.setTextContent( 'File' );

    const options = new UIPanel();
    options.setClass( 'options' );

    container.add( title );    
    container.add( options );

//New
    let option = new UIRow();
    option.setClass( 'option' );
    option.setTextContent( 'New' );
    option.onClick( function() {

        if( confirm( '현재 파일을 삭제하고, 새 파일을 여시겠습니까?') ) {
            editor.clear();
        }

    });

    options.add( option );
    options.add( new UIHorizontalRule() );

//Import

    option = new UIRow();
    option.setClass( 'option' );
    option.setTextContent( 'import' );
    option.onClick( () => {

        alert(' import 클릭');

    });

    options.add( option );

    return container;

}

export { MenubarFile }
