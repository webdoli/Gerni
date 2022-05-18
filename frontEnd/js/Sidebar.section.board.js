
import { UIDiv } from '../libs/ui.js';
import { jobOptions, ageOptions, relationOptions, bodyOptions } from '../../backend/models/Options.js';
// import { invertMap } from  './utils/Utils.js';

function SidebarBoard( boardData ) {

    let boardEL = [];
    let board = createBoards( boardData );  

    function createBoards( boardDB ) {

        let idx = 0;
        for( let [ key, value ] of boardDB.entries() ) {

            createBoard( value, key, idx );
            idx ++;
        }

    }

    function createBoard( value, key, index ) {

        const board = new UIDiv();
        board.addClass( 'board' );

        if( index === 0 ) {
            board.addClass( 'active' );
        }

        if( key === 'name'){

            inputHTML( board, value, key );

        } else if( key === 'pepe' ) { 

            makeImg( board, value, key );

        }else {

            selectHTML( board, value, key );

        }

        boardEL.push( board );

    }

    function makeImg( el, value, key ) {

        return el.setInnerHTML( `
            <img src=${ value } class="board-img" id="img_${ key }"></img>
        `)
        
    }

    function inputHTML( el, value, key) {

        return el.setInnerHTML(`

            <img src=${ value } class="board-img"></img>
            <input type="text" class='usr-${ key }' value='' placeholder='검사 대상의 이름을 넣으시오!'>

        `)
    }

    function selectHTML( el, value, key) {

        let options = makeSelectOption( key );
     
        return el.setInnerHTML(`

            <img src=${ value } class="board-img"></img>
            <select class="board-select-${key}">
                ${ options }
            </select>

        `)
    }

    function makeSelectOption( key ) {

        switch( key ) {

            case 'job' :
                let jobOpt = new Map( jobOptions );
                return makeOptions( jobOpt );
            
            case 'age' :
                let ageOpt = new Map( ageOptions );
                return makeOptions( ageOpt );

            case 'relation' :
                let relationOpt = new Map( relationOptions );
                return makeOptions( relationOpt );

            case 'body' :
                let bodyOpt = new Map( bodyOptions );
                return makeOptions( bodyOpt );

        }

    }

    function makeOptions( opts ) {

        let temp = ``;

        for( let item of opts) {
            temp += `<option value=${ item[0] }> ${ item[1] } </option>`
        }

        return temp;
    }


    return boardEL;

}

export { SidebarBoard }