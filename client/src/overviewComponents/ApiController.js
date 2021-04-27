const axios = require('axios');
import authToken from './authToken';

const api = {
  fetchAllProducts() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products', {
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

  fetchProductById(productId) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/${productId}`, {
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

  fetchProductStyles(productId) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/${productId}/styles`, {
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