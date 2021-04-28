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
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Ratings Breakdown'
    },
    xaxis: {
      categories: ['5 stars', '4 stars', '3 stars', '2 stars', '1 stars'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    fill: {
      opacity: 1

    },
  },
}

const Breakdown = () => {

  return (
    <div id="chart">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height="350"
        width="350"
        legend="null"
      />
    </div>
  );
};

export default Breakdown;
