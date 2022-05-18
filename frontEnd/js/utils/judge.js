import { minVal, maxVal } from './Utils.js';


// const valPromise = (val1, val2) => {
//     return new Promise(resolve => {

//         let res = {
//             title: val1,
//             score: val2
//         }
//         resolve(res);
//     })
// }

// const minVal = async(arr) => {
//     let min = { 
//         title: arr[0][0],
//         score: arr[0][1]
//     };
//     console.log('min score 최초: '+min.score);

//     for (let i = 1; i<arr.length; i++){
//         if(parseFloat(min.score) > parseFloat(arr[i][1])){
//             await valPromise(arr[i][0], arr[i][1]).then((data) =>{
//                 min = data;
//             });
//             // min.title = arr[i][0];
//             // min.score = arr[i][1];
//         }
//     }
//     console.log('min score 최종: '+min.score);
//     return min;
// }

// const maxVal = async(arr) => {
//     let max = {
//         title: arr[0][0],
//         score: arr[0][1]
//     };
//     console.log('max score 최초: '+max.score);

//     for(let i = 1; i<arr.length; i++){
//         if(parseFloat(max.score) < parseFloat(arr[i][1])){
//             await valPromise(arr[i][0], arr[i][1]).then((data) =>{
//                 max = data;
//             });
//             // max.title = arr[i][0];
//             // max.score = arr[i][1];
//         }
//     }
//     console.log('max score 최종: '+max.score);
//     return max;
// }

export const judge = ( detailScore, usrName ) => {

    //가장 낮은 분야, 높은 분야, 중간 분야 정하기
    let fiscr = detailScore.financial_risk.toFixed(2);
    let forscr = detailScore.unfortune_risk.toFixed(2);
    let famescr = detailScore.fame_risk.toFixed(2);
    let chescr = detailScore.cheating_risk.toFixed(2);
    let rescr = detailScore.relationship_risk.toFixed(2);

    let sumscr = (

          detailScore.financial_risk
        + detailScore.unfortune_risk
        + detailScore.fame_risk
        + detailScore.cheating_risk
        + detailScore.relationship_risk

    ).toFixed(2);

    let detailScoreArr = [

        [ 'financial_risk', fiscr ],
        [ 'unfortune_risk', forscr ],
        [ 'fame_risk', famescr ],
        [ 'cheating_risk', chescr ],
        [ 'relationship_risk', rescr ]

    ];

    //test
    // for(let i=0; i<detailScoreArr.length; i++){

    //     console.log(`type : ${detailScoreArr[i][0]}, score : ${detailScoreArr[i][1]}`);

    // }
    
    let comment = `${usrName}님은 `;
    let min = minVal( detailScoreArr );
    let max = maxVal( detailScoreArr );

    let minType = min.title;
    let minScr = min.score;
    let maxType = max.title;
    let maxScr = max.score;

    // console.log('총점: '+sumscr);
    // console.log('최저점수: '+minScr);
    // console.log('최고점수: '+maxScr);
    // console.log('최고타입: '+maxType);
    // console.log('최저타입: '+minType);
    

    if(sumscr >= 40){
        comment += `스승으로 모셔야 할 정도로 뛰어난 분입니다. 자신의 철학이 분명하고 이타심이 강하고 지식과 지혜를 두루 갖추고 있는 사람입니다.`
        if(minScr>4){
            switch(maxType){
                case 'financial_risk':
                comment += `재정운영 능력이 엄청난 사람입니다. 돈과 관련된 상대방의 말은 무조건 귀담아 들어야합니다. 훗날 투자에 상당한 도움이 될 것이므로 귀를 열고 상대방과 대화하는 편이 좋습니다. 상대방과 경제적 활동을 한다면 무조건 함께 가야하며, 적극적으로 가는 편이 좋습니다. `
                break;

                case 'unfortune_risk':
                comment += `상대방은 운이 너무나 좋은 스타일이며, 세상을 긍정적으로 보며 주변에 활기찬 에너지를 뿌려주는 스타일입니다. 이와 같은 사람과 함께 있으면 저절로 기분이 좋아지며 하는 일도 잘 풀립니다. 상대방과 같이 할 수 있는 일이 있다면 무조건 달려들어 함께 하기를 추천합니다.`;
                break;

                case 'fame_risk':
                comment += `상대방은 평판이 상당히 좋으며, 좋은 성격과 생각이 주변에 전파되므로 사람들이 모두 좋아합니다. 상당히 인기있는 스타일로 같이 있으면 행복감을 느낄 수 있습니다. 전략적 관계 혹은 사적인 관계 모두 좋습니다. 적극적으로 인간관계를 유지하시는 편을 추천합니다.`;
                break;

                case 'cheating_risk':
                comment += `상대는 거짓말을 하는 경우 이마저도 솔직하게 밝힐 정도로 신뢰지수가 높습니다. 언변, 행동 모두 신뢰있는 모습을 보여주며, 실제 의리가 있고 사람을 우선하는 태도를 갖고 있으므로 어떠한 경우에도 친해질 필요가 있습니다. 이러한 유형의 사람은 놓쳐서는 안 됩니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 인맥이 넓고 그 깊이또한 얕지 않습니다. 거의 연예인급 인맥을 자랑하며, 주변에 도움을 받을 일이 있다면 중개역할을 100%합니다. 사업을 하는 사람이라면 반드시 친밀한 인간관계를 형성해야 좋습니다.`
                break;
            }
        }else if(minScr>= -4 && minScr<=4){
            switch(minType){
                case 'financial_risk':
                comment += `상대방은 유독 돈에 관해 손해를 보는 스타일입니다. 아주 좋은 인성과 신뢰감이 있지만 정작 본인은 재정관리에 우수한 편이 아니므로 돈 문제에 관한 한 스스로 꺼려하는 편입니다. 하지만 태도가 우수하고 늘 노력하기 때문에 돈 거래를 하더라도 무방합니다.`;
                break;

                case 'unfortune_risk':
                comment += `상대는 최근 안 좋은 일 때문에 다소 부정적으로 생각하는 면이 있지만 전반적으로 태도가 좋습니다. 비판적인 능력이 상당히 좋으므로 냉정한 평가가 필요할 때 조언을 받기에 좋습니다. 고민이 있을 때 의논하기 좋은 사람입니다.`;
                break;

                case 'fame_risk':
                comment += `상대방은 오해를 사서 평판에 조금 금이 가있는 경우가 많습니다. 착하고 능력이 좋지만 눈치가 조금 떨어지는 편이므로 이 점에 주의하면 되겠습니다. 단, 좋은 사람인만큼 상대의 솔직한 말에 오히려 귀를 기울이는 편이 좋습니다.`;
                break;

                case 'cheating_risk':
                comment += `상대는 거짓을 말할 때 티가 나지만 정작 본인은 모릅니다. 이는 속이려는 의도가 있어서 거짓말을 하는 게 아니므로 너그럽게 이해하고, 상대방의 좋은 점만 보며 인간관계를 유지하는 편이 좋습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 너무 좋은 성격탓에 주변 사람들에게 피해를 당할 우려가 있습니다. 친밀한 인간관계를 유지하려는 목적이 있다면 상대를 이용하려는 생각보다는 인간적으로 접근하기를 추천합니다.`;
                break;
            }
        }else if(minScr<-4){
            switch(minType){
                case 'financial_risk':
                comment += `너무 좋은 사람이지만 유일하게 돈이 문제되는 경우입니다. 상대가 어려움에 처했다면 도움을 줘서 위기를 극복하게 하는 편이 좋습니다. 인간적인 면이 우수하고, 신뢰가 높기 때문에 훗날 당신에게 반드시 도움이 되는 사람입니다.`;
                break;

                case 'unfortune_risk':
                comment += `상대는 다소 틱틱대는 말투탓에 혹은 부정적인 시각으로 손해를 보는 편입니다. 연령대가 어리다면 조언을 해주되, 스스로 알 수 있도록 도움을 준다면 상대는 아주 좋은 운을 갖게 될 것입니다. 말에 복이 있다는 편을 상기시켜 좋은 인간관계를 유지하길 추천합니다.`;
                break;

                case 'fame_risk':
                comment += `상대는 유독 오해를 사는 일에 휘말려 최근 분위기가 좋지 않을 수 있습니다. 진흙 속에 진주가 있는 격인만큼 이러한 사람은 반드시 끌어안아 나의 사람으로 만들 필요가 있습니다. 적극적으로 도움을 줘서 당신의 편으로 만들어야 하는 유형입니다.`;
                break;

                case 'cheating_risk':
                comment += `상대는 잠깐 위기를 모면하려 거짓말을 하는 실수를 저질렀을 경우가 많습니다. 모두 상황이 좋지 않은 관계로 발생한 일이며, 인간성은 아주 좋으므로 상대의 거짓도 눈감아주고 보듬어줘야 합니다. 그래서 반드시 나의 사람으로 만들 필요가 있습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 소심한 성격탓에 인맥의 폭이 좁은 유형입니다. 이런 사람과 친해진다면 의리가 깊고 자신이 할 수 있는 모든 도움을 줄 수 있는 유형으로써 반드시 당신의 사람으로 만들어야 합니다. 넓고 얕은 인간관계를 맺는 사람보다 오히려 당신에게 도움이 되며, 위기에 큰 도움을 줄 수 있는 사람입니다.`;
                break;
            }
        }
    }else if(sumscr >= 15 && sumscr < 40){
        comment += `가까이 지낼 수 있는 분으로써 친구라면 더할나위없이 좋은 사람입니다.`
        if(minScr>4){
            switch(minType){
                case 'financial_risk':
                comment += `투자에 관심은 많지만 재정감각이 뛰어난 편이 아닙니다. 그러나 열정이 높고 노력을 많이 하기 때문에 언젠가 투자에 성공할 가능성이 높습니다. 재정적인 부분에 있어 운만 따라주면 좋은 상황을 맞이할 수 있습니다. 다만 재정운영 능력이 다른 부분에 비해 조금 떨어지기 때문에 긴밀한 관계를 갖되 함께 투자하거나 동업하는 것은 주의를 해야 하겠습니다.(안 되는 것은 아님)`;
                break;
                
                case 'unfortune_risk':
                comment += `전반적으로 밝고 유쾌한 면이 있지만 가끔씩 실망하는 태도를 보이기도 합니다. 그러나 상대에게 피해를 줄 정도는 아니며, 본인에게 실망해서 그렇게 말하는 것입니다. 기본적으로 인간적인 면이 좋으므로 상대가 다소 다운되었을 때 긍정적으로 대한다면 친밀한 인간관계를 유지할 수 있을 것입니다.`;
                break;

                case 'fame_risk':
                comment += `상대는 평판관리를 크게 하지 않더라도 기본 인성이 좋으므로 어느정도 관리가 됩니다. 기본적인 예의이상으로 사람을 대하기 때문입니다. 다만 현실적인 면이 있으므로 실력이 떨어지거나 망상에 빠진 사람들에게 냉정하게 대하는 면이 있습니다. 이는 오히려 좋은 태도이므로 친밀한 인간관계를 가지는 것을 추천합니다.`;
                break;

                case 'cheating_risk':
                comment += `상대는 10% 정도로 거짓말을 할 때가 있습니다. 단, 이는 선의를 위한 거짓말이므로 크게 개의치 않는 편이 좋습니다. 이를 따지고 든다면 오히려 좋지 못할 수 있습니다. 상대에 대해서 의심이 든다면, 혹시 오해를 한 적은 없는지 생각해보시기 바랍니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 인간관계에 있어 맺고 끊음이 확실합니다. 이 때문에 좋지 못한 평가를 받을 수 있지만 이런 면이 오히려 신뢰를 줄 수 있는 태도입니다. 혹시 상대방이 당신에 관해 좋지못한 인식을 갖고 있다면 빨리 털어서 좋은 관계를 가질 것을 추천합니다.`
                break;
            }
        }else if(minScr>= -4 && minScr<=4){
            switch(minType){
                case 'financial_risk':
                comment += `상대방은 재정적인 부분에서 노력에 비해 다소 손해를 보는 편입니다. 이 때문에 돈에 관해 신중한 편입니다. 하지만 기본적인 능력이 좋기 때문에 재정적으로 큰 문제가 발생하지 않습니다. 돈 거래를 한다면 크게 나쁘지 않는 상대입니다.`;
                break;

                case 'unfortune_risk':
                comment += `다른 능력에 비해 비판적인 태도가 다소 강한 성격입니다. 어찌보면 이렇게 현실적으로 접근하는 능력 덕분에 현재의 지위를 유지하고 있다고 볼 수 있습니다. 만일 상대가 공직에 있다면 세상을 현실적으로 볼 수 있는 능력은 오히려 좋습니다.`;
                break;

                case 'fame_risk':
                comment += `과거 평판관리에 다소 문제가 있었을 수도 있지만 그렇다고 해서 남에게 피해를 주는 스타일은 아닙니다. 본인이 옳다고 생각하면 그대로 실행하고 말하는 성격탓에 다소 저평가 된 사람일 수 있습니다.`;
                break;

                case 'cheating_risk':
                comment += `필요한 상황에서는 적극적으로 거짓말을 하며 현실적으로 대처해야 한다고 생각하는 부류입니다. 주로 사업가에게서 나타나는 유형으로 불필요한 거짓말이나 상대방에게 피해를 줄 정도는 아니므로 크게 개의치 않는 편이 좋습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대방은 인간관계에 있어 실리를 우선으로 생각합니다. 다소 허황된 내용이나 희망사항을 이야기하면 단절하는 스타일로 현실적으로 접근하기를 추천합니다.`;
                break;
            }
        }else if(minScr<-4){
            switch(minType){
                case 'financial_risk':
                comment += `사람은 좋다는 소리를 듣지만 돈 관계에 있어 다소 좋지 못한 습관과 버릇이 있습니다. 이러한 사람과 무리한 투자나 동업은 하지 않는 편이 좋으며, 어쩔 수 없이 사회적 관계에 의해 재정적으로 엮인다면 계약관리를 확실하게 하는 편이 좋습니다. 상대방은 매번 손해를 많이 본다는 점을 염두에 둬야 합니다.`;
                break;

                case 'unfortune_risk':
                comment += `세상을 아주 비판적으로 보는 유형입니다. 금융권, 공무원, 법조계, 의료계 종사자일 확률이 높습니다. 상대방과 거리를 유지하거나 혹은 다가서기 위해서는 펙트에 기반한 대화를 지향해야 합니다.`;
                break;

                case 'fame_risk':
                comment += `평판에 크게 개의치않는 스타일로 직업특성상 사람을 상대하지 않는 유형일 가능성이 높습니다. 가령, 현장직 노동자나 과학자, 연구원의 경우가 대표적입니다. 이런 부류의 사람들과 관계를 유지하기 위해서는 솔직한 면을 그대로 보여주는 편이 좋습니다.`;
                break;

                case 'cheating_risk':
                comment += `입에 발린 소리를 많이 하는 스타일로 직업 특성상 영업직이나 마케팅 방면일 가능성이 높습니다. 공적인 관계라면 일부로 하는 상대말에 크게 신경쓰지 않는 편이 좋습니다. 다만 사적인 관계를 유지해야 한다면 상대의 겉치레를 구분할 필요가 있습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대방은 인맥을 거의 고려하지 않는 편으로 금수저 집안에서 자랐거나 현재 대표와 같은 위치에 있을 수 있습니다. 본인 위주로 생각하는 면이 강하므로 상대방의 자존심에 타격을 가하는 말은 금물입니다. 인간관계를 유지하고 싶다면 상대를 높여주는 입발린 말이 효과가 있습니다.`;
                break;
            }
        }
    }else if(sumscr > -15 && sumscr < 15){
        comment += `아주 평범한 사람입니다. 알고 지내면 도움되는 분야가 최소 1분야는 있습니다. 단, 위기상황에서 큰 도움을 줄 수 있는 분은 아닙니다.`
        if(minScr>4){
            switch(minType){
                case 'financial_risk':
                comment += `재정적으로도 평범한 사람입니다. 세상 이야기하는 정도로 듣고 흘리는 게 좋습니다.`
                break;

                case 'unfortune_risk':
                comment += `운이 없지 않지만 그렇다고 운빨을 믿는 스타일이 아닙니다. 운에 대한 적절한 관념을 갖고 있으며, 공적인 관계를 벗어나지 않는 선에서 지낸다면 피해를 끼칠 유형은 아닙니다.`;
                break;

                case 'fame_risk':
                comment += `적절히 예의가 있으며, 평균 범위의 도덕개념을 갖추고 있습니다. 딱히 피해를 끼칠 염려는 없으며,알아서 적당한 거리를 유지할 것입니다. 당신의 평판에 긍정적·부정적 영향을 미치지 않습니다.`;
                break;

                case 'cheating_risk':
                comment += `일반적인 수준에서 거짓을 말하는 수준이며, 선의를 위해 적당히 타협할 줄 아는 스타일입니다. 뭔가 오해가 있다면,빨리 풀고 적당한 인간관계를 유지하는 것을 추천합니다.`;
                break;

                case 'relationship_risk':
                comment += `공과 사가 확실한 유형으로 인간관계에 있어 알아서 거리유지를 하는 사람입니다. 너무 무리한 부탁을 하지 않고 받지도 않는 선에서 인간관계를 유지하는 것이 좋습니다.`
                break;
            }
        }else if(minScr>= -4 && minScr<=4){
            switch(minType){
                case 'financial_risk':
                comment += `재정적 감각이 다소 부족하지만 그렇다고 해서 남에게 피해를 줄 정도는 아닙니다. 다만 노력에 비해 재정감각이 다소 부족하기 때문에 돈에 관한 대화를 자주 하지 않는 편이 좋습니다. 그렇다고 멀리할 수준도 아닙니다.`;
                break;

                case 'unfortune_risk':
                comment += `좋지 않은 태도가 1~2개 정도 있는 유형으로 본인도 단점을 알고 있지만 고치지 않고 그대로 살아가는 스타일입니다. 눈감아 줄 정도의 부정적인 태도를 갖고 있으므로 관계를 단절할 필요는 없습니다. 단, 상대방이 부정적으로 세상을 바라보는 면이 있다는 정도는 알아두면 도움될 것입니다.`;
                break;

                case 'fame_risk':
                comment += `평판에 크게 신경쓰지 않는 스타일로 남의 눈치를 많이 보지 않습니다. 좋게 보자면, 솔직하다고 할 수 있지만 가끔씩 눈치없는 발언을 할 수 있습니다. 하지만 상대를 해하려는 의도가 없으므로 대충 한귀로 듣고 한귀로 흘리면 좋은 관계를 유지할 수 있습니다.`;
                break;

                case 'cheating_risk':
                comment += `실수를 모면하기 위해서 거짓말을 어느정도 하는 편이므로 100% 신뢰하지 않는 편이 좋습니다. 그러나 인간적인 면이 있기 때문에 거짓말을 했다고해서 굳이 인간관계를 멀리할 정도는 아닙니다. 이를 염두에 두고 관계를 갖는게 좋습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대방은 인맥이 다소 좁은 스타일로 깊고 좁은 관계를 선호합니다. 오픈된 장소나 사람이 많은 곳을 싫어하는 스타일이며, 과도하게 접근하는 사람을 무시하거나 회피하는 경향이 있으므로 이를 알고 관계를 유지하는 편이 좋습니다.`;
                break;
            }
        }else if(minScr<-4){
            switch(minType){
                case 'financial_risk':
                comment += `재정운영 감각이 다소 낮습니다. 상대는 돈에 관한 지식이 부족하며, 손해를 잘 보는 편입니다. 따라서 궁핍한 상황에 자주 처할 수 있으므로 도와줘야 할 일이 많을 수 있습니다. 혹은 사기를 당해 어려움에 빠질 확률이 높기에 절대 돈 관리를 맡겨서는 안 되며 또한 돈과 관련된 문제를 상의할 필요가 없습니다.`;
                break;

                case 'unfortune_risk':
                comment += `세상을 다소 부정적으로 바라보는 면이 많습니다. 10가지 사안 중에서 7개 정도를 좋지 않게 봅니다. 좋게 보자면 비판적 사고가 발달한 유형이므로 객관적인 부분을 분석하는 부분에서 뛰어난 강점을 갖고 있습니다. 냉정하게 비판할 부분이 있으면 부탁해도 될 듯합니다.`;
                break;

                case 'fame_risk':
                comment += `상대는 주변의 평판이 좋지 않습니다. 다소 거친 언행과 행동으로 손해를 많이 보는 유형입니다. 이러한 유형은 지적 수준이 낮을 수 있지만 인성이 나쁜 것은 아닙니다. 상대의 언행이 거칠다는 면을 염두에 두면 관계에 도움이 되겠습니다.`;
                break;

                case 'cheating_risk':
                comment += `상대는 거짓말을 꽤 잘 합니다. 그런데 이는 직업적인 부분 혹은 좋지 못한 상황탓에 어쩔 수 없이 사람을 속일 수밖에 없는 상황입니다. 이러한 상대와 중요한 거래는 피하는 편이 좋고, 가벼운 거래나 활동을 하는 것을 추천합니다.`;
                break;

                case 'relationship_risk':
                comment += `상대방은 인맥관리를 거의 하지 않는 편입니다. 직업 특징상 인맥을 관리할 필요가 없는 경우일 수도 있습니다.(예술계) 따라서 상대가 당신을 기억하지 못한다고 하더라도 서운할 필요는 없습니다. 원래 사람을 좋아하지 않는 성격이기 때문입니다. `;
                break;
            }
        }
    
    }else if(sumscr <= -15 && sumscr >= -40){
        comment += `당신에게 피해를 끼칠 수 있는 사람입니다. 열등감이나 피해의식이 상당하며 당신이 망하기를 은근히 기대하는 부류입니다. 나쁜 습관과 언변으로 불운한 사람이며, 어떠한 경우에도 사적인 관계를 맺어서는 안 됩니다. `
        if(maxScr>4){
            switch(maxType){
                case 'financial_risk':
                comment += `돈에 관한 부분에서는 재빠른 두뇌를 가지고 있는 사람입니다. 하지만 남을 돕기보다 항상 자기위주로 생각하는 사람입니다. 재정적인 부분에서 뭔가 도움을 얻거나 기대를 한다면 애당초 희망을 가지지 않는 편이 좋습니다.`
                break;

                case 'unfortune_risk':
                comment += `과거에 유복했던 적이 있던 케이스입니다. 과거에 잘나갔던 습관대로 통이 크고, 낙관적으로 세상을 보는 면은 좋습니다. 하지만 말과 행동이 일치하지 않기 때문에 좋은 말과 달리 행동에 실망을 느낄 것입니다. 가끔 대화를 하겠지만 함께 뭔가를 하지않는 편이 좋습니다.`;
                break;

                case 'fame_risk':
                comment += `실속보다 평판이나 명분을 따지는 스타일입니다. 약간 귀찮을 수 있으므로 깊은 이야기를 하지 않는 편이 좋습니다. 단, 뒷담화나 뒷끝은 많지 않기 때문에 거리만 유지한다면 적당한 관계를 가질 수 있습니다.`;
                break;

                case 'cheating_risk':
                comment += `생각은 다소 부정적이지만 매사 솔직한 편입니다. 너무 현실적이기에 좀처럼 움직이려 하지 않습니다. 이와 같은 사람과 새로운 활동이나 도전을 하는 것은 좋지 않습니다. 열정보다는 철저하게 현실만 보는 유형이므로 깊은 생각을 공유할 필요는 없습니다. `;
                break;

                case 'relationship_risk':
                comment += `인맥을 꽤 중요하게 생각하는 유형입니다. 당신도 자신의 인맥 중의 하나라 생각하며 먼저 자신의 생각을 드러낼 것입니다. 그러나 세상을 다소 좋지않게 보는 습관이 있기때문에 절대 당신만 알고 있는 비밀을 이야기해서는 안 됩니다. 일정 거리를 두고 계속 지켜볼 유형입니다.`
                break;
            }
        }else if(maxScr>= -4 && maxScr<=4){
            switch(minType){
                case 'financial_risk':
                comment += `재정상태가 좋은지 나쁜지 겉으로보아 알 수 없으나 실제 좋지 않은 습관이 있는 사람입니다. 공적인 관계라면 거리를 유지하시되, 걸러야 될 필요는 없습니다. 다만 금전적 정보나 거래는 하지 않는 편이 좋습니다.`;
                break;

                case 'unfortune_risk':
                comment += `불운과 행운 중에서 불운이 많은 유형에 속합니다. 그와 함께 있다면 기쁜 일보다 좋지 않은 일이 더 많을 것입니다. 상대의 주장에 동요하거나 그대로 이행해서는 안 됩니다. 상대는 당신이 잘 되기를 바리지 않습니다. 자신을 먼저 앞세우기 때문이죠.`;
                break;

                case 'fame_risk':
                comment += `가끔씩 감정 통제를 하지 못하는 경향이 있는 사람입니다. 심각한 수준은 아니지만 결국 당신에게 피해를 입힐 수도 있습니다. 따라서 사적인 관계로 발전하는 일이 없도록 거리를 둬야 합니다. `;
                break;

                case 'cheating_risk':
                comment += `상대의 말 중에는 어느정도 진실이 있습니다만 전반적으로 거짓말을 하는데 능숙한 편입니다. 곧이 곧대로 믿지 마시고, 항상 상대의 말을 검증하는 태도가 필요합니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 이익에 따라 움직이는 스타일입니다. 달면 삼키고 쓰면 뱉는 식이므로 전적으로 상대에게 의존하는 일은 금물입니다. 단, 사기꾼 가능성은 낮습니다. `;
                break;
            }
        }else if(maxScr<-4){
            switch(minType){
                case 'financial_risk':
                comment += `재정상황이 상당히 좋지 않는 사람이며, 돈에 관한 습관이나 태도역시 위험한 사람입니다. 한탕주의나 도박에 빠질 수 있는 사람이므로 상대방이 추천하는 금전적인 일에 절대 관여하는 일이 없어야 합니다.`;
                break;

                case 'unfortune_risk':
                comment += `불운이 많은 사람입니다. 곁에 있어서 좋은 일은 없습니다. 될 수 있는한 멀리해야 합니다.`;
                break;

                case 'fame_risk':
                comment += `상대의 주변환경이 예의를 갖출 정도로 여유있는 상황이 아닙니다. 부정적이며, 삐뚤어진 가치관을 가졌을 가능성이 높고, 기본적인 도덕관념에 대한 기준점이 다소 낮기 때문에 가까이 했을 경우에는 당신의 평판을 깎아내릴 수 있습니다.`;
                break;

                case 'cheating_risk':
                comment += `거짓말을 자주하는 편이며, 매사 솔직하게 대하지 않는 타입입니다. 직업적으로 상대를 대하는 편이며, 자신의 속내를 드러내지 않으려 거짓말을 하지만 티가 나는 스타일입니다. 가까이 하는경우에는 거짓으로 인한 피해를 입을 수 있습니다. 주의하시기 바랍니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 인간관계가 협소하고, 은둔형 기질을 갖고 있습니다. 섣불리 가까이 한다면 상대방의 가시에 상처를 입을 수 있습니다. 공적인 부분만 처리하고, 가까운 인간관계로 발전하지 않도록 주의해야 합니다. `;
                break;
            }
        }
    }else if(sumscr < -40){
        comment += `경고!! 바로 걸러버려야 할 인간걸레입니다. 이런 부류의 사람들은 드라큐라처럼 주변의 희생양을 찾습니다. 정신적,금전적으로 반드시 당신에게 피해를 끼치며, 심지어 위험한 행동으로 법적인 분쟁에 휘말릴 수 있습니다. 해당 결과가 나왔다면, 즉시 연락을 차단하여 사전에 인생 위험을 방지하세요. `
        if(maxScr> -6 && maxScr<6){
            switch(maxType){
                case 'financial_risk':
                comment += `그나마 다행인 점은 돈 문제를 일으킬 확률은 낮습니다. 어쩔 수 없이 인간관계를 유지해야 한다면, 철저하게 금전적 거래처 관계만 거리유지를 하시길 바랍니다. 하지만 돈 관계도 깊게 들어가서는 안 됩니다. `
                break;

                case 'unfortune_risk':
                comment += `운이 좋지 못한 습관을 갖고 있지만 정작 본인은 알지 못하지만 주변인들에게 불편함을 줍니다. 가까워지면 불쾌한 행동을 서슴없이 할 수 있습니다. `;
                break;

                case 'fame_risk':
                comment += `인간관계에 관한 최소한의 예의는 갖추고 있습니다. 단, 언제든지 성격에 따라 변할 수 있으니 될 수 있는한 거리를 두는게 현명한 판단입니다.`;
                break;

                case 'cheating_risk':
                comment += `의외로 솔직한 면이 있지만 이는 오히려 당신의 기분을 나쁘게 할 수 있습니다. 가령, 강박증이나 의심하는 것과 같은 방식으로 당신을 괴롭힐 수 있기에 될수 있는한 당신의 과거를 말하지 않는 편이 좋습니다.`;
                break;

                case 'relationship_risk':
                comment += `상대는 당신을 믿지 못합니다. 또한 가벼운 관계로만 생각하고 있습니다. 늘 그렇게 살아왔기 때문이죠. 뭔가 함께 일을 하거나 가깝게 다가서려 한다면 주의하세요. 상대는 가볍고 넓은 방식의 인간관계만 지향합니다.`
                break;
            }
        }else if(maxScr <= -14){
            switch(minType){
                case 'financial_risk':
                comment += `이 사람은 반드시 당신에게 금전적 피해를 끼치게 될 것입니다. 일이란 건 터지고 나면 늦은 법입니다. 그 어떠한 금전적 거래를 해서도 안 되며, 사전에 연락을 차단하거나 관계를 반드시 끊어야 합니다.`;
                break;

                case 'unfortune_risk':
                comment += `옆에 있으면 불운이 따라다닙니다. 옆에 가서도 안 될 정도로 더럽게 운이 없는 사람입니다. 사실, 본인의 입에서 나쁜 운을 불러오고 있지만 정작 자신은 모르는 타입입니다. 괜히 고치려 한다거나 같이 활동을 하게 된다면,당신 역시 반드시 불운에 휩싸이고 맙니다. 바로 걸러야되는 사람입니다.`;
                break;

                case 'fame_risk':
                comment += `도덕적 관념이 없으며, 범죄행위도 크게 개의치 않을 정도로 위험합니다. 낮은 도덕관은 반드시 당신의 평판에 나쁜 영향을 미치게 될 것입니다. 이 사람과 어떠한 활동도 해서는 안 됩니다. 어디서든 분수를 모르고 깝치기 때문에 일을 만듭니다.`;
                break;

                case 'cheating_risk':
                comment += `사기꾼이 의심됩니다. 설사 당신에게 사기를 치지 않더라도 곧 사기를 치게 될 것입니다. 법적 문제나 송사에 휘말리고 싶지 않다면, 절대적으로 관계를 끊어야되는 유형입니다. 의도를 갖고 거짓말을 하기 때문에 쉽게 알아채기 힘들 수 있습니다. 따라서 어떠한 말도 믿지 않고 근처에 가지 않는게 좋습니다.`;
                break;

                case 'relationship_risk':
                comment += `정신이상이 의심됩니다. 함께 무슨 일을 한다면 엄청난 스트레스를 당신에게 줄 것입니다. 사회와 동떨어진 생각과 관념을 갖고 있으며, 성숙하지 못한 정신력으로 주변에 피해를 주는 유형입니다. 즉시 연락처에서 삭제하세요.`;
                break;
            }
        }else if(maxScr <= -6 && maxScr >= -14){
            switch(minType){
                case 'financial_risk':
                comment += `금전적인 리스크 역시 위험한 인물입니다. 절대 금전적 거래를 해서는 안 되며, 어떠한 말도 신뢰해서는 안 됩니다. 단, 상황이 좋지 못하여 어쩔 수 없이 재정적인 면에서 힘든 케이스라 볼 수 있습니다.`;
                break;

                case 'unfortune_risk':
                comment += `운이 좋지 못한 행동을 하는 사람입니다. 이 사람의 행동과 말대로 절대 따라해서는 안 됩니다. 스스로 불구덩이에 뛰어들어 불운을 탓하는 유형입니다.`;
                break;

                case 'fame_risk':
                comment += `불우한 환경에 처한탓에 좋지않은 시기를 보내고 있는 사람입니다. 예의범절을 따질 겨를이 없거나 혹은 좋지 못한 습관탓에 당신의 명성에 해를 입힐 수 있습니다.`;
                break;

                case 'cheating_risk':
                comment += `거짓말이 특기이며, 거짓말이 걸렸다한들 별 상관없을 정도로 도덕적인 관념이 없는 사람입니다. 이 사람과 공적인 관계에 엮였다면 절대 신뢰하지 마세요. 아침에 약속한 일이 저녁이면 180도 변경되는 사람입니다.`;
                break;

                case 'relationship_risk':
                comment += `부정적인 기운이 많으며, 사람을 중요하게 생각하지 않는 유형입니다. 본인 자랑이 심하며, 독불장군식의 잘난 맛에 세상을 살아가는 유형이므로 함께 일을 도모해서는 안 되는 사람입니다. 중요할 때 연락이 두절되거나 심지어 아무 이유없이 관계가 단절될 것이므로 사전에 인간관계를 맺지 않는게 최선책입니다.`;
                break;
            }
        }else if(maxScr>6){
            switch(maxType){
                case 'financial_risk':
                comment += `이 사람은 장단점이 극단적입니다. 그 중에서도 의외로 금전적 능력은 좋습니다만 신뢰할 수는 없습니다. 돈머리가 뛰어나고 잔재주에 능해 돈되는 정보에 빠삭합니다. 인간성에 비해 재정적 능력이 너무 뛰어나므로 철저하게 공적인 인간관계에서 돈되는 정보만 받고 거르는 편을 추천합니다. 절대로 동업을 하거나 함께 투자에 뛰어들어서는 안 됩니다.이 사람은 당신의 돈을 자신의 돈으로 가져갈 것입니다. `;
                break;

                case 'unfortune_risk':
                comment += `겉과 속이 다른 사람입니다. 겉보기에 좋은 사람처럼 보이지만 실상 응큼한 부류입니다. 실제 생활은 건실해 보이나 이는 뭔가 수작을 부리기 위해 열심히 노력하고 있는 것입니다. 당신에게 뭔가 얻기위해 잘 보이려는 것이기에 조심해야 합니다.`;
                break;

                case 'fame_risk':
                comment += `성격이 소심하여 대놓고 당신에게 뭐라하지 못하지만 실상은 반대입니다. 속으로는 남탓을 하며, 오만한 성격을 갖고 있습니다. 단, 소심한 성격탓에 겉으로 드러내지 않으므로 당신에게 막대한 피해를 단번에 끼치기보다 조금씩 누적시켜 큰 피해를 줄 것입니다. `;
                break;

                case 'cheating_risk':
                comment += `성격 자체가 오만하여 대놓고 거짓말을 하지 않습니다. 사기꾼은 아니지만 당신의 감정을 상하게 만드는 재주가 있습니다. 눈치가 없기때문에 상황에 따라 유연하지 못하며, 또 솔직한 성격탓에 결국 당신에게 큰소리치며 공격할 가능성이 높습니다. 자신이 속았다며 당신을 사기꾼으로 몰고갈 수 있기에 될 수 있는한 인간관계를 끊어야합니다.`;
                break;

                case 'relationship_risk':
                comment += `사기꾼 기질이 돋보이는 사람입니다. 겉으로 꾸미는 것에 능하며, 조작된 사실로써 쇼의 달인입니다. 달변가 유형이 많으며, 바람둥이나 사기꾼 중에서 이런 특징을 갖는 사람이 많습니다. `;
                break;
            }
        }
    }// if-case문 끝


    return { 
        comment: comment,
        sumscr: sumscr 
    };

}