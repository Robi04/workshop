var optionsProjAge = {
    series: [{
    name: '2018',
    data: [12.4, 8.6, 5.7, 1.5]
  }, {
    name: '2070',
    data: [11.9, 10.3, 8.9, 4]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  title: {
    text: 'Projection des proportions de personnes agées par tranche d\'age dans la Loire',
    style : {
      color: "#FFFFFF"
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['60-70', '70-80', '80-90', '90-99'],
    labels: {
        style : {
            colors: "#FFFFFF"
        } 
    }
  },
  yaxis: {
    min: 0,
    max: 13,
    labels : {
        style : {
            colors : '#FFFFFF'
        }
    },
    title: {
      text: 'Proportion (%)',
      style : {
        color: "#FFFFFF"
      }
    }
  },
  legend : {
    labels: {
        colors: "#FFFFFF",
        useSeriesColors: false
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " %"
      }
    }
  }
  };

  var chartProjAge = new ApexCharts(document.querySelector("#projectionAgeGraph"), optionsProjAge);
  chartProjAge.render();