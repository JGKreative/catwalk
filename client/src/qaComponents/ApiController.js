import axios from 'axios';
// import authToken from '../../../authToken.js';

const compareHelpfulness = (a, b) => {
  if (a.question_helpfulness < b.question_helpfulness) {
    return 1;
  }
  if (a.question_helpfulness > b.question_helpfulness) {
    return -1;
  }
  return 0;
}

const fetchQuestions = (productId, callback) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', {
    headers: authToken,
    params: {
      product_id: productId,
    },
  })
  .then((response) => {
    console.log('response from request------>', response.data.results)
    const QuestionsSortedByHelpfulness = response.data.results.sort(compareHelpfulness);
    callback(QuestionsSortedByHelpfulness);
  })
  .catch((err) => {
    console.log('error fetching question data', err);
  })
};

export default fetchQuestions;