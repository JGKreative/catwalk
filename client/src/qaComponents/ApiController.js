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

export const fetchQuestions = (productId, callback = () => {}, count = 1000) => {
  axios.get('/qna/allQuestions', {
    params: {
      product_id: productId,
      page: 1,
      count,
    },
  })
  .then((response) => {
    if (count > 4) {
      console.log('response from request for all questions------>', response.data.results);
    } if (count < 5) {
      console.log('response for initial request for questions ---->', response.data.results);
    }
    callback(response.data.results)

  })
  .catch((err) => {
    console.log('error fetching question data', err);
  })
};

export const fetchAnswers = (questionId, cb) => {
  axios.get(`/qna/answers/${questionId}`, {
    params: {
      page: 1,
      count: 1000
    }
  })
  .then((results) => {
    console.log('got updated answers', results.data.results);
    cb(results.data.results);
  })
  .catch((err) => {
    console.log('error getting updated answers', err);
  });
}

export const submitNewQA = (type, newQuestion, nickname, email, parentId, cb) => {
  const formData = {
    body: newQuestion,
    name: nickname,
    email,
  }

  axios.post('/qna', {
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

export const reporthelpful = (type, id, action, cb = ()=>{}) => {
  //type should be 'answers' or 'questions'
  //action should be 'report' or 'helpful'

  axios.put(`/qna/${type}/${id}/${action}`)
    .then((result) => {
      console.log(`successfully did ${action} to API for ${type} ${id}`, result.data);
      cb();
    })
    .catch((error) => {
      console.log(`error doing ${action} to API for ${type} ${id}`, error);
    });
}