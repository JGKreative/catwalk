
module.exports = {

  sortByHelpful: function (reviews) {
    let sorted = reviews.sort((a, b) => {
      console.log( b.props.review.helpfulness, a.props.review.helpfulness)
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
};


// const date = new Date(review.date).toLocaleDateString('en-US', {
//   year: 'numeric', month: 'long', day: 'numeric'
// });

// map array to date objects
// use the index of the arrays to sort