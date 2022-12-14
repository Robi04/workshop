var annees = [];
for (let i = 18; i <= 70; i++) {
  annees.push('20' + i.toString());
}

var ProjCentrale = [];
var ProjBasse = [];
var ProjHaute = [];

var optionsProj = {
  series: [
    {
      name: 'Projection haute',
      data: ProjHaute
    },
    {
      name: "Projection centrale",
      data: ProjCentrale
    },
    {
      name: "Projection basse",
      data: ProjBasse
    },
    
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 5, 3],
    curve: 'smooth',
    dashArray: [5, 0, 5]
  },
  title: {
    text: 'Projection de la population ligérienne jusqu\'en 2070 selon 3 scénarios',
    align: 'left',
    style: {
      color: '#FFFFFF'
    }
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    },
    labels: {
      colors: "#FFFFFF",
      useSeriesColors: false
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: annees,
    labels : {
      style: {
        colors: '#FFFFFF'
      }
    }
  },
  yaxis: {
    title: {
      text :'Population en milliers',
      style : {
        color : '#FFFFFF'
      }
    },
    labels: {
      style : {
        colors: "#FFFFFF"
      } 
    }
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
};

const urlProj = "./Data/Projection2070.json";

const promiseLoadJsonProjection = new Promise((resolve, reject) =>{
  $.getJSON(urlProj, function(data) {
    
    // Projection centrale
    for(var key in data.Centrale) {
      var obj = data.Centrale[key];
      Object.values(obj).forEach(val => {
        if (val != '42' && val != 'Loire'){ ProjCentrale.push(val); } 
      });
    }
    
    // Projection  basse
    for(var key in data.Basse) {
      var obj = data.Basse[key];
      Object.values(obj).forEach(val => {
        if (val != '42' && val != 'Loire'){ ProjBasse.push(val); } 
      });
    }
    
    // Projection haute
    for(var key in data.Haute) {
      var obj = data.Haute[key];
      Object.values(obj).forEach(val => {
        if (val != '42' && val != 'Loire'){ ProjHaute.push(val); } 
      });
    }
    resolve('load ok');
  });
});

promiseLoadJsonProjection.then((resolve) => {
  console.log(resolve);
  
  var chartProj = new ApexCharts(document.querySelector("#projGraph"), optionsProj);
  chartProj.render();
});

