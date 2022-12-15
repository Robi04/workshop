var dataAPA = [];
var dataGIR = [];

var optionsGIR = {
    series: [],
    labels: ['GIR 4', 'GIR 3', 'GIR 2', 'GIR 1'],
    chart: {
        type: 'donut',
        fontFamily: 'GreyCliff',
    },
    title: {
        text: 'Proportion des différents niveau de GIR dans la Loire',
        style : {
          color: "#FFFFFF"
        }
      },
    noData: {
        text: 'Loading...',
        style: {
            color: '#FFFFFF'
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    legend : {
        labels: {
            colors: "#FFFFFF",
            useSeriesColors: false
        }
    }
};

var chartGIR = new ApexCharts(document.querySelector("#girGraph"), optionsGIR);
chartGIR.render();

const url = "./Data/donnesAPA.json";

const promiseLoadJsonAPA = new Promise((resolve, reject) =>{
    $.getJSON(url, function(data) {
        dataAPA = data;   
        resolve('load ok');
    });
    
});

promiseLoadJsonAPA.then((resolve) => {
    console.log(resolve);
    let nbrGIR4 = 0;
    let nbrGIR3 = 0;
    let nbrGIR2 = 0;
    let nbrGIR1 = 0;
    dataAPA.forEach(element => {
        
        switch (element.GIR) {
            case "4":
            nbrGIR4++;
            break;
            
            case "3":
            nbrGIR3++;
            break;
            
            case "2":
            nbrGIR2++;
            break;
            
            case "1":
            nbrGIR1++;
            break;
            
            default:
            break;
        }
    });
    
    dataGIR.push(nbrGIR4);
    dataGIR.push(nbrGIR3);
    dataGIR.push(nbrGIR2);
    dataGIR.push(nbrGIR1);

    chartGIR.updateSeries(dataGIR)
    
});