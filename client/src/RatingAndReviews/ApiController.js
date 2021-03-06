/* eslint-disable */
import Axios from 'axios';
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

  export const getReviews = function (productId, cb) {
    // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/(productId)
    Axios.get('/rnr/reviews', {
      params: {
        product_id: productId,
        page: 1,
        count: 100,
      }
    })
    .then((response) => {
      // console.log('client has received a Reviews response from server:', response.data.results);
      cb(response.data.results)
    })
    .catch(err => {
      console.error('error fetching reviews:', err);
    })
  };

  export const getReviewsMeta = function (productId, cb) {
    // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/meta/(productId)
    Axios.get('/rnr/reviews/meta', {
      params: {
        product_id: productId
      }
    })
    .then((response) => {
      // console.log('client has received a meta response from server:', response.data);
      cb(response.data)
    })
    .catch(err => {
      console.error('error fetching reviews:', err);
    })
  };

  // getAvgRating: function (productId) {
  //   // GET: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews/(productId)
  //   // then iterate through all reviews,
  //     // adding each rating to a sum
  //     // divide by number of ratings
  //   // return average
  // },


