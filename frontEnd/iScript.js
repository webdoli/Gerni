import { Editor } from './js/Editor.js';
import { Footer } from './js/Footer.js';

class IScript {

    constructor() {

        this.column_menu = document.getElementById( 'column-menu' );
        this.column_center = document.getElementById( 'column-center' );
        this.column_footer = document.getElementById( 'column-footer' );

        this.editor = new Editor();
        this.signals = this.editor.signals;

        console.log( 'iScript 부모 실행' );

    }

    getDOM() {

        console.log( 'iScript getDOM()실행' );

    }

    execute() {

        console.log( 'iScript execute 실행' );

        let tempThis = this;
        var footer = new Footer();
        this.column_footer.appendChild( footer.dom );

        this.editor.storage.init( function() {

                tempThis.editor.storage.get( function( state ) {

                    if( state !== undefined ) {

                        tempThis.editor.fromJSON( state ); 
                    
                    }

                }); //storage 정보 받기 End

                var timeout;

                let saveState = () => {

                    clearTimeout( timeout );

                    timeout = setTimeout( function() {

                        // editor.signals.savingStarted.dispatch();

                        timeout = setTimeout( function() {

                            tempThis.editor.storage.set( tempThis.editor.toJSON() );
                            // editor.signals.savingFinished.dispatch();

                        }, 100 );

                    }, 1000 );

                }

                tempThis.signals.sceneChanged.add( saveState );
                tempThis.signals.historyChanged.add( saveState );

            });

            this.onWindowResize();

    }

    onWindowResize() {

        this.editor.signals.windowResize.dispatch();

    }

}

export { IScript }