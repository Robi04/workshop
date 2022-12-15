var optionsHorizontalDouble = {
  series: [
    {
      name: 'Par un professionnel',
      data: [-8.92, -5, -2, 0]
    },
    {
      name: 'Par l\'entourage',
      data: [35.67, 19.58, 5.92, 3]
    }    
  ],
  chart: {
    type: 'bar',
    height: 440,
    fontFamily: 'GreyCliff',
    stacked: true
  },
  colors:['#62BBE7', '#FFF172'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    min: -10,
    max: 38,
    text: 'GIR estimé',
    style : {
      color : '#FFFFFF'
    },
    labels: {
      style : {
        colors: "#FFFFFF"
      } 
    }
  },
  legend : {
    labels: {
      colors: "#FFFFFF",
      useSeriesColors: false
    }
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val
      }
    },
    y: {
      formatter: function (val) {
        return Math.abs(val) + "H"
      }
    }
  },
  title: {
    text: 'Volume médian d’aide hebdomadaire apporté par GIR estimé',
    style : {
      color: "#FFFFFF"
    }
  },
  xaxis: {
    categories: ['GIR 1-2', 'GIR 3', 'GIR 4', 'GIR 5-6'],
    title: {
      text: 'Volume médian hebdomadaire',
      style : {
        color : '#FFFFFF'
      }
    },
    labels: {
      formatter: function (val) {
        return Math.abs(Math.round(val)) + "H"
      },
      style : {
        colors: "#FFFFFF"
      } 
    }
  },
};

var HorizontalDoublechart = new ApexCharts(document.querySelector("#HorizontalDoubleGraph"), optionsHorizontalDouble);
HorizontalDoublechart.render();