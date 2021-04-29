import React from 'react';
import Chart from 'react-apexcharts';

const chartOptions = {
  series: [{
    name: 'Ratings',
    data: [26, 4, 3, 3, 1]
  }, {
    name: '',
    data: [11, 33, 34, 34, 36]
  }],

  options: {
    chart: {
      type: 'bar',
      height: 250,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
      // dataLabels: {
      //   enabled: false
      // },
    },
    colors: ['#05e33c', '#9e9e9e'],
    // stroke: {
    //   width: 1,
    //   colors: ['#fff']
    // },
    title: {
      text: 'Ratings Breakdown'
    },
    xaxis: {
      categories: ['5 stars', '4 stars', '3 stars', '2 stars', '1 stars'],
    },
    yaxis: {

    },
    tooltip: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    }
  },
}

const Breakdown = () => {

  return (
    <div id="chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height="250"
        width="300"
      />
    </div>
  );
};

export default Breakdown;
