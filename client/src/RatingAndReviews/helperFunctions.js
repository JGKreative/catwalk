
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
    return (total / numberOfRatings).toFixed(2);
  },
};
