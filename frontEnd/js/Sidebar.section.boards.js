import { UIP, UIDiv, UIButton } from '../libs/ui.js';
import data from '../../backend/models/boardData.json' assert { type: "json" };
import { SidebarBoard } from './Sidebar.section.board.js';
import { SendInfoCommand } from './commands/SendInfoCommand.js';

function SidebarBoards ( editor ) {

    const container = new UIDiv();
    const boardWrap = new UIDiv();

    let nav = new UIDiv();
    let prevBtn = new UIButton();
    let nextBtn = new UIButton();
    let currentPage = new UIP();
    let btnGroup = new UIDiv();
    let iconPrev = document.createElement( 'img' );
    let iconNext = document.createElement( 'img' );

    let currentActiveBoard = 0;
    let q_type = [
        [ 'usr-name', '이름' ],
        [ 'board-select-job', '직업' ],
        [ 'board-select-age', '연령' ],
        [ 'board-select-relation', '관계' ],
        [ 'board-select-body', '체형']
    ];
      
    const boardData = getBoard();

    container.setId( 'sidebar-boards' );
    container.setClass( 'boards');
    boardWrap.setClass( 'boardWrap' );
    
    nav.setClass( 'navi' );
    btnGroup.setClass( 'nav-btn-group' );

    createBtn( prevBtn, 'prev', 'nav-button', iconPrev, '../../Sian/leftArrow.svg' );
    createBtn( nextBtn, 'next', 'nav-button', iconNext, '../../Sian/rightArrow.svg' );

    currentPage.setId( 'current-active' );

    const board = new SidebarBoard( boardData );

    board.forEach( item => {

        boardWrap.add( item );
        updateCurrentNum();

    });



//Event

    nextBtn.onClick( () => {

        editor.signals.slidePass.dispatch( currentActiveBoard );
        let pass = editor.scene.pass.get( q_type[currentActiveBoard][0] );

        if( pass ) {

            board[ currentActiveBoard ].setClass( 'board left' );
            currentActiveBoard = currentActiveBoard + 1;

            if( currentActiveBoard > board.length - 2 ) {

                currentActiveBoard = board.length - 2;
                let pepeIndex = board.length - 1;
                btnGroup.setClass( 'nav-btn-group inactive' );

                //페페사진 추가
                board[ pepeIndex ].setClass( 'board active' );
                let applyDivs = applyBtn();
                nav.add( applyDivs );

            } else {

                board[ currentActiveBoard ].setClass( 'board active' );
                updateCurrentNum();

            } 

        } else {

            ( currentActiveBoard === 0 ) 
            ? alert( `${ q_type[ currentActiveBoard][1] }을 입력하세요` ) 
            : alert( `${ q_type[ currentActiveBoard][1] }을(를) 선택하세요` )
            
        }
        
    });

    prevBtn.onClick( () => {
        
        board[ currentActiveBoard ].setClass( 'board right' );
        currentActiveBoard = currentActiveBoard - 1;

        if( currentActiveBoard < 0 ) {

            currentActiveBoard = 0;
        
        }else {

            currentPage.setClass( 'current active' );

        }

        board[ currentActiveBoard ].setClass( 'board active' );

        updateCurrentNum();
        
    });


//Func

    

    function createBtn( el, id, cls, icon, imgUrl ) {

        el.setId( id );
        icon.setAttribute( 'src', imgUrl );
        el.dom.appendChild( icon );
        el.setClass( cls );

        return el;
    }


    function getBoard() {

        let boardImgSrc = new Map();

        boardImgSrc
            .set( 'name', data.name )
            .set( 'job', data.job )
            .set( 'age', data.age )
            .set( 'relation', data.relation )
            .set( 'body', data.body )
            .set( 'pepe', data.pepe );
            
        return boardImgSrc;

    }

    function updateCurrentNum() {

        currentPage.dom.innerText = ` ${ currentActiveBoard + 1 } / ${ board.length - 1 } `;

    }

    function applyBtn() {

        let applyDiv = new UIDiv();
        let applyBtn = new UIButton();
        let cancelBtn = new UIButton();
        
        applyDiv.setClass( 'applyDiv active' );
        applyBtn.setClass( 'applyBtn' );
        cancelBtn.setClass( 'cancelBtn' );

        applyBtn.setTextContent( '확정' );
        cancelBtn.setTextContent( '취소' );

        applyDiv.add( applyBtn );
        applyDiv.add( cancelBtn );

        cancelBtn.dom.addEventListener( 'click', (e) => {

            nav.remove( applyDiv );
            btnGroup.setClass( 'nav-btn-group' );
            applyDiv.setClass( 'applyDiv' );

            board[ board.length - 1 ].setClass( 'board' );
            board[ currentActiveBoard ].setClass( 'board active' );
            updateCurrentNum();
            
        });

        applyBtn.dom.addEventListener( 'click', (e) => {
            //유저입력값 받기
            let usrName = document.querySelector( '.usr-name' );
            let usrJob = document.querySelector( '.board-select-job' );
            let usrAge = document.querySelector( '.board-select-age' );
            let usrRelation = document.querySelector( '.board-select-relation' );
            let usrBody = document.querySelector( '.board-select-body' );

            let usrFormValue = {
    
                name: usrName.value,
                job: usrJob.options[ usrJob.selectedIndex ].value,
                age: usrAge.options[ usrAge.selectedIndex ].value,
                relation: usrRelation.options[ usrRelation.selectedIndex ].value,
                body: usrBody.options[ usrBody.selectedIndex ].value
    
            };

            editor.signals.panelColorChanged.dispatch();
            editor.signals.pepeRemoved.dispatch();
            editor.signals.chartBtnOn.dispatch();
            editor.execute( new SendInfoCommand( editor, usrFormValue ) )
        })

        return applyDiv;

    }

    btnGroup.add( prevBtn );
    btnGroup.add( currentPage );
    btnGroup.add( nextBtn );
    nav.add( btnGroup );
    
    container.add( boardWrap );
    container.add( nav );


    //signals

    editor.signals.slidePass.add( function ( currentPage ) {

        if( currentPage === 0 ) {
        
            let usrName = document.querySelector( `.${ q_type[ currentPage ][ 0 ] }` ).value;

            ( usrName ) 
            ? editor.scenePass( q_type[currentPage][0], true ) 
            : editor.scenePass( q_type[currentPage][0], false ) ;
            
        } else {
        
            let elName = document.querySelector( `.${ q_type[ currentPage ][ 0 ] }` ).value;

            ( elName === 'default' ) 
            ? editor.scenePass( q_type[currentPage][0], false ) 
            : editor.scenePass( q_type[currentPage][0], true ) ;
        
        }
    
    });

    editor.signals.sidebarVanish.add( function() {

        let boardEl = document.querySelectorAll( '.board' );
        boardEl.forEach( item => {

            item.style.visibility = 'hidden'
        })

    })


    return container;
}

export { SidebarBoards };