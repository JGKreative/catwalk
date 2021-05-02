
module.exports = {

  sortByHelpful: function (reviews) {
    let sorted = reviews.sort((a, b) => {
      return b.props.review.helpfulness - a.props.review.helpfulness;
    });
    return sorted;
  },

  sortByNewest: function (reviews) {
    reviews.forEach((r, index) => {
      const date = new Date(r.props.review.date);
      r.props.review.date = date;
    })

    let sorted = reviews.sort((a, b) => {
      return b.props.review.date - a.props.review.date
    });
    return sorted;
  },

  sortByRelevant: function (reviews) {

  },

  calculateAvgRating: function (ratings) {
    let total = 0;
    let numberOfRatings = 0;

    for (const key in ratings) {
      let value = parseInt(ratings[key]);
      if (key === '1') {
        total += value;
        numberOfRatings += value;
      } else if (key === '2') {
        total += value * 2;
        numberOfRatings += value;
      } else if (key === '3') {
        total += value * 3;
        numberOfRatings += value;
      } else if (key === '4') {
        total += value * 4;
        numberOfRatings += value;
      } else if (key === '5') {
        total += value * 5;
        numberOfRatings += value;
      }
    };
    const avg = (total / numberOfRatings).toFixed(2)
     return avg !== 'NaN' ? Math.round(avg * 10) / 10 : 0;
  },

  calculateAvgRecommended: function(data) {
    let total = 0;
    let trueTotal;

    for (const key in data) {
      let value = parseInt(data[key])
      total += value;
      if (key === 'true') {
        trueTotal = value;
      }
    }
    const avg = (trueTotal / total).toFixed(2);
    return avg !== 'NaN' ? Math.round(avg * 100) : 0;
  },


};
