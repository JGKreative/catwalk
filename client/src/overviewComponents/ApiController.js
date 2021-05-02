import axios from 'axios';

const api = {
  // fetchAllProducts(callback) {
  //   return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products')
  //     .then((response) => {
  //       callback(response.data);
  //     })
  //     .catch((error) => {
  //       callback(error);
  //     });
  // },

  fetchProductById(productId, callback) {
    axios.get(`/overview/productInfo/${productId}`)
      .then((response) => {
        console.log('product response data', response.data);
        callback(response.data);
      })
      .catch((error) => {
        callback(error);
      });
  },

  fetchProductStyles(productId, callback) {
    axios.get(`/overview/styles/${productId}`)
      .then((response) => {
        console.log('styles response data', response.data.results);
        callback(response.data.results);
      })
      .catch((error) => {
        callback(error);
      });
  },

  fetchRelatedProducts(productId) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/${productId}/related`, {
      headers: authToken
    })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}

export default api;