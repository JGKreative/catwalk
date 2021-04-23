/* eslint-disable */

/*
https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea
GET:
  /reviews/(insertProductId)
  /reviews/meta/(insertPrductId)
POST:
 /reviews
PUT: (marking reviews as helpful)
  /reviews/:review_id/helpful
PUT: (reporting a review - flagging it to not show up)
  /reviews/:review_id/report
*/

module.exports = {

  getReviews: function (productId) {
    // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/(productId)

  },

  getMetaData: function (productId) {
    // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/meta/(productId)
  },

  getAvgRating: function (productId) {
    // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/(productId)
    // then iterate through all reviews,
      // adding each rating to a sum
      // divide by number of ratings
    // return average
  },

};


/*  Things I need to display for each component:
 * ReviewsList:
  * Review: (just needs access to each review object)
    - rating of each review (review.rating)
    - user of review (review.reviewer_name)
    - date of review (review.date)
    - etc.
  * button - needs to know how many reviews
 * Ratings Breakdown
   - Average Review for a product:
     - Access to all reviews for a product
   - % of reccommended reviews:
     - Access to all reviews for a product
 * Product Breakdown (...uggh)

*/