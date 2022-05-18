

const jobOptions = [

    [ 'default', '직종 선택' ],
    [ 'saler', '영업·판매직' ],
    [ 'public-official', '공무원' ],
    [ 'writer', '작가·어문계열' ],
    [ 'self-employed', '자영업자' ],
    [ 'accountant', '회계·세무사' ],
    [ 'office-worker', '일반 직장인' ],
    [ 'medicine', '의약계열' ],
    [ 'lawer', '법조인' ],
    [ 'calebrity', '문화·예체능 계통' ],
    [ 'education', '교육계' ],
    [ 'journal', '방송계' ],
    [ 'farm', '농업계' ],
    [ 'science', '연구인' ],
    [ 'logistics', '물류·운수업종' ],
    [ 'famous', '명예직' ],
    [ 'outdoor-worker', '현장직' ],
    [ 'tourlist', '관광업계' ],
    [ 'soldier', '군인' ],
    [ 'jobless', '무직' ],

];

const ageOptions = [

    [ 'default', '연령 선택' ],
    [ 'teen', '10대' ],
    [ 'twenty', '20대' ],
    [ 'thirty', '30대' ],
    [ 'fourty', '40대' ],
    [ 'fifty', '50대' ],
    [ 'sixty', '60대' ],
    [ 'seventy', '70대 이상' ]

];


const relationOptions = [

    [ 'default', '관계 선택' ],
    [ 'family', '가족(친인척)' ],
    [ 'friend', '친구' ],
    [ 'coworker', '직장동료' ],
    [ 'stranger', '잘 모르는 사람' ],
    [ 'senior', '선후배' ],
    [ 'blindman', '소개받은 사람' ],
    [ 'army', '군대' ],
    [ 'hobby', '동호회 기타']

];



const bodyOptions = [

    [ 'default', '체형 선택' ],
    [ 'thin', '마른편' ],
    [ 'normal', '적당함' ],
    [ 'fat', '뚱뚱함' ]

];


const calcRes = {
    'financial_risk': 0,
    'unfortune_risk': 0,
    'fame_risk': 0,
    'cheating_risk': 0,
    'relationship_risk': 0
}


export { jobOptions, ageOptions, relationOptions, bodyOptions, calcRes }