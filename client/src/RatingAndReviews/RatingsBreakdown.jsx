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


  const populateEmptyRatings = (obj) => {
    for (let i = 1; i <= 5; i++) {
      if (obj[i] === undefined) {
        obj[i] = '0';
      }
    }
  }
  populateEmptyRatings(ratings)

  const populateData = Object.keys(ratings).map((key) => {
    let value = Number(ratings[key]);
    totalRatings += value;
    ratingsPerStar.unshift(value)
  });

  ratingsPerStar.forEach(num => {
    seriesTwo.push(totalRatings - num);
  });
  console.log(ratingsPerStar)
  console.log(seriesTwo)

  let series = [{
    name: 'Ratings',
    data: ratingsPerStar,
  }, {
    name: '',
    data: seriesTwo,
  }];

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
