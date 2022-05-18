
const invertMap = function( myMap ) {

    return new Map( [...myMap.entries()].map(
        ([key, value]) => ([value, key])
    ))
}


const minVal = (arr) => {

    let min = { 
        title: arr[0][0],
        score: arr[0][1]
    };

    let minout = minCalculator( arr, min );
    return minout;

}


const maxVal = (arr) => {

    let max = {
        title: arr[0][0],
        score: arr[0][1]
    };
    
    let maxout = maxCalculator( arr, max );
    return maxout;

}



function minCalculator( arrs, min ) {

    let tempVal = {
        score: min.score,
        title: min.title
    };

    // console.log('minCalculator 함수 최초 score: ' + tempVal.score )

    for( let i = 1; i < arrs.length; i ++ ) {

        if( parseFloat( tempVal.score ) > parseFloat( arrs[ i ][ 1 ]) ) {
              
            tempVal.title = arrs[ i ][ 0 ];
            tempVal.score = arrs[ i ][ 1 ];
           
        }

    }

    // console.log('minCalculator 함수 최후 score: ' + tempVal.score )
    return tempVal;

}


function maxCalculator( arrs, max ) {

    let tempVal = {
        score: max.score,
        title: max.title
    };
    // console.log('maxCalculator 함수 최초 score: ' + tempVal.score )

    for( let i = 1; i < arrs.length; i ++ ) {

        if( parseFloat( tempVal.score ) < parseFloat( arrs[ i ][ 1 ]) ) {
              
            tempVal.title = arrs[ i ][ 0 ];
            tempVal.score = arrs[ i ][ 1 ];
           
        } 

    }

    // console.log('maxCalculator 함수 최후 score: ' + tempVal.score )
    return tempVal;

}


export { invertMap, minVal, maxVal };