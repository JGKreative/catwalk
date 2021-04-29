/* eslint-disable */
import axios from 'axios';

const compareHelpfulness = (a, b) => {
  if (a.question_helpfulness < b.question_helpfulness) {
    return 1;
  }
  if (a.question_helpfulness > b.question_helpfulness) {
    return -1;
  }
  return 0;
}

export const fetchQuestions = (productId, callback) => {
  axios.get('/qna/allQuestions', {
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

export const submitNewQA = (type, newQuestion, nickname, email, parentId, cb) => {
  const formData = {
    body: newQuestion,
    name: nickname,
    email,
  }

  axios.post('/qna/newQA', {
    formData: formData,
    type,
    parentId,
  })
  .then((results) => {
    console.log('results from post', results.data);
    cb();
  })
  .catch((err) => {
    console.log('error posting new Q/A', err);
  })
}
