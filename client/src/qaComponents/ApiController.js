import axios from 'axios';
import authToken from '../../../authToken.js';

const fetchQuestions = (productId, callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', {
    headers: authToken,
    params: {
      product_id: productId,
    },
  })
  .then((response) => {
    console.log('response from request------>', response.data.results)
    callback(response.data.results);
  })
  .catch((err) => {
    console.log('error fetching question data', err);
  })
};

export default fetchQuestions;