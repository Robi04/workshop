var optionsGirGrouped = {
    series: [{
    name: 'Ensemble',
    data: [100, 96, 94, 80, 53, 11]
  }, {
    name: 'Femmes',
    data: [100, 98, 94, 85, 61, 14]
  }, {
    name: 'Hommes',
    data: [100, 93, 94, 70, 42, 6]
  }],
    chart: {
    type: 'bar',
    fontFamily: 'GreyCliff',
    height: 350
  },
  title: {
    text: 'Part des seniors déclarant recevoir une aide pour les activités de la vie quotidienne par GIR estimé',
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
    categories: ['GIR 1', 'GIR 2', 'GIR 3', 'GIR 4', 'GIR 5', 'GIR 6'],
    labels: {
        style : {
            colors: "#FFFFFF"
        } 
    }
  },
  yaxis: {
    min: 0,
    max: 100,
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

  var chartGirGrouped = new ApexCharts(document.querySelector("#GirGroupedGraph"), optionsGirGrouped);
  chartGirGrouped.render();