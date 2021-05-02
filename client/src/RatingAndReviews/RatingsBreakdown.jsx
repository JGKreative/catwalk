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
    },
    colors: ['#05e33c', '#9e9e9e'],
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

const RatingsBreakdown = ({ ratings }) => {
  let ratingsPerStar = [];
  let totalRatings = 0;
  let seriesTwo = [];

  const populateData = Object.keys(ratings).map((key) => {
    let value = Number(ratings[key]);
    totalRatings += value;
    ratingsPerStar.unshift(value)
  });

  ratingsPerStar.forEach(num => {
    seriesTwo.unshift(totalRatings - num);
  });

  let series = [{
    name: 'Ratings',
    data: ratingsPerStar,
  }, {
    name: '',
    data: seriesTwo,
  }];

  let keys = [1, 2, 3, 4, 5];
  let foundKeys = [];
  console.log('series[0].data', series[0].data);

  keys.forEach((key, i) => {
    if (series[0].data.includes(key)) {

      let value = series[0].data[i];
      console.log('series[0].data',);
      foundKeys.push(value);
    }
  });
  console.log('foundKeys:', foundKeys);

  return (
    <div id="chart">
      <Chart
        options={chartOptions.options}
        series={series}
        type="bar"
        height="250"
        width="300"
      />
    </div>
  );
};

export default RatingsBreakdown;
