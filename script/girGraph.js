var dataAPA = [];
var dataGIR = [];

var options = {
    series: [],
    labels: ['GIR 4', 'GIR 3', 'GIR 2', 'GIR 1'],
    chart: {
        type: 'donut',
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

var chart = new ApexCharts(document.querySelector("#girGraph"), options);
chart.render();

const url = "./Data/donnesAPA.json";

const promiseLoadJson = new Promise((resolve, reject) =>{
    $.getJSON(url, function(data) {
        dataAPA = data;        
        resolve('load ok');
    });
    
});

promiseLoadJson.then((resolve) => {
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

    chart.updateSeries(dataGIR)
    
});