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
  }
}
// const fetchProductById = () => {
// };
// const fetchProductStyles
// const fetchRelatedProducts


export default api;