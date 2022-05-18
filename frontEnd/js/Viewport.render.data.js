import data from '../../backend/models/humanTest.json' assert { type: "json" };

function ViewportRenderData( resArr ) { 

    let randNumArr = [];
    let currentType;
   

//랜덤함수 제작부분
    function chkArr( arr, num ) {

        let res = arr.includes( num );
        return res;
    
    }

    function ranMaker( len, reqNum ) {
        
        let randVal = Math.floor( Math.random() * len );
        chkArr( randNumArr, randVal ) ? randNumArr : randNumArr.push( randVal );

        if( randNumArr.length < reqNum ) ranMaker( len, reqNum );

    }

    async function reqRan( req ) {

        randNumArr = [];
        await ranMaker( req, 3 );

    };

    async function randItem( key, type, dbVal, idxArr, resArr ) {

        idxArr.map( randIdx => {

            resArr.push( [ key, type, dbVal[randIdx] ] );

        });

    }


//json파일에서 data 추출

    data.map( q => {

        for( let key in q ) {

            if( key === 'type' ) currentType = q[key];

            if( key !== 'type' ) {

                reqRan( q[key].length );
                randItem( key, currentType, q[key], randNumArr, resArr );

            }

        }

        

    }); //dataEdit End


    return resArr;

}  //ViewportRenderData End


export { ViewportRenderData }