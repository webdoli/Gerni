const labels = [

    '재정 건정성',
    '행운력',
    '이타심',
    '정직함',
    '사회성'

];

const ChartDB = ( usrType, usrData, usrName ) => {

    let matchingChart = {

        'bar': barConfig( usrData, usrName ),
        'line': lineConfig( usrData, usrName ),
        'radar': radarConfig( usrData, usrName )
    
    }

    let output = matchingChart[ usrType ];

    return output;

}


//bar Type Config
function barConfig( usrData, usrName ) {

    const data = {

        labels: labels,
        datasets: [{
          label: usrName + '님의 인성 결과',
          data: [ 

                usrData.financial_risk, 
                usrData.unfortune_risk, 
                usrData.fame_risk, 
                usrData.cheating_risk, 
                usrData.relationship_risk

            ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 1
        }]
      };

    const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

    return config;

}

//radar Type Config
function lineConfig( usrData, usrName ) {

    const data = {

        labels: labels,
        datasets: [{

            label: usrName + '님의 인성 결과',
            data: [
                usrData.financial_risk, 
                usrData.unfortune_risk, 
                usrData.fame_risk, 
                usrData.cheating_risk, 
                usrData.relationship_risk
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1

        }]
    };

    const config = {
    
        type: 'line',
        data: data,
    
    };


    return config;

}

//line Type Config
function radarConfig( usrData, usrName ) {

    const data = {
            
        labels: labels,
        datasets: [ {

            label: usrName + '님의 인성 결과',
            data: [
                usrData.financial_risk, 
                usrData.unfortune_risk, 
                usrData.fame_risk, 
                usrData.cheating_risk, 
                usrData.relationship_risk
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'

        }]
    };


    const config = {

        type: 'radar',
        data: data,
        options: {
            
            elements: {
                line: {
                    borderWidth: 3
                }
            }

        }
    }


    return config;

}

export { ChartDB }