import { calcRes as calculateData } from '../../../backend/models/Options.js';

const accelLev = (chkArr, usrInfoArr, type, cb) => {
    let reschk = {
        value: false
    };

    for(let i=0; i<chkArr.length; i++){
        if(usrInfoArr.includes(chkArr[i])){
            
            reschk.value = true;
            console.log( type + ': reschk : ' + reschk.value );

            cb( reschk );
            break;
        
        }
    }

    return cb( reschk );

}

export const calculatorQuestion = ( usrInfo, dataEle ) => {

    console.log( 'calculatorQuestion 시작' );
    let calcRes = calculateData;
    let usrInfos = usrInfo;
    
    dataEle.forEach( item => {

        console.log( '유저가 선택한 항목 레벨: ' + item.id );

        if( item.id.split(':')[1] === 'financial_risk' ){
            switch( item.id.split(':')[0] ){

                case 'lev_s':
                    accelLev(['teen','family','jobless'], usrInfos, 'financial_risk', ( cvres )=>{
                        ( cvres.value ) ? calcRes['financial_risk'] -= 0.82 : calcRes['financial_risk'] -= 4.22;
                    })
                    break;

                case 'lev_c':
                    calcRes['financial_risk'] -= 1.45;
                    break;

                case 'lev_n':
                    calcRes['financial_risk'] += 1.45;
                    break;

                case 'lev_g':
                    console.log( 'financial의 lev_g 실행' );
                    accelLev( ['teen','family','jobless'], usrInfos, 'financial_risk', ( cvres ) => {

                        console.log( 'financial accelLev 결과값: ' + cvres.value );
                        ( cvres.value ) ? calcRes['financial_risk'] += 0.82 : calcRes['financial_risk'] += 4.22;
                        console.log( 'calcRes[financial_risk] value: ' + calcRes['financial_risk'] );
                    
                    });
                    break;

            }

        }else if(item.id.split(':')[1] === 'unfortune_risk'){
            switch(item.id.split(':')[0]){
                case 'lev_s':
                    accelLev(['fat','family','jobless'], usrInfos, 'unfortune_risk', ( cvres )=>{
                        ( cvres.value ) ? calcRes['unfortune_risk'] -= 2.82 : calcRes['unfortune_risk'] -= 4.22;
                    })
                    break;
                case 'lev_c':
                    calcRes['unfortune_risk'] -= 1.45;
                    break;
                case 'lev_n':
                    calcRes['unfortune_risk'] += 1.45;
                    break;
                case 'lev_g':
                    accelLev(['teen', 'twenty', 'logistics','public-official','outdoor-worker', 'family','friend'], usrInfos, 'unfortune_risk', ( cvres )=>{
                        ( cvres.value ) ? calcRes['unfortune_risk'] += 4.22 : calcRes['unfortune_risk'] += 2.82;
                    })
                    break;
            }
        }else if(item.id.split(':')[1] === 'fame_risk'){
            switch(item.id.split(':')[0]){
                case 'lev_s':
                    calcRes['fame_risk'] -= 4.22;
                    break;
                case 'lev_c':
                    calcRes['fame_risk'] -= 2.45;
                    break;
                case 'lev_n':
                    calcRes['fame_risk'] += 2.45;
                    break;
                case 'lev_g':
                    calcRes['fame_risk'] += 4.22;
                    break;
            }
        }else if(item.id.split(':')[1] === 'cheating_risk'){
            switch(item.id.split(':')[0]){
                case 'lev_s':
                    calcRes['cheating_risk'] -= 4.22;
                    break;
                case 'lev_c':
                    calcRes['cheating_risk'] -= 2.45;
                    break;
                case 'lev_n':
                    calcRes['cheating_risk'] += 2.45;
                    break;
                case 'lev_g':
                    calcRes['cheating_risk'] += 4.22;
                    break;
            }
        }else if(item.id.split(':')[1] === 'relationship_risk'){
            switch(item.id.split(':')[0]){
                case 'lev_s':
                    calcRes['relationship_risk'] -= 4.22;
                    break;
                case 'lev_c':
                    calcRes['relationship_risk'] -= 2.45;
                    break;
                case 'lev_n':
                    calcRes['relationship_risk'] += 2.45;
                    break;
                case 'lev_g':
                    calcRes['relationship_risk'] += 4.22;
                    break;
            }
        }
    });

    return calcRes;
}