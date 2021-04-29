/* eslint-disable */

const express = require('express');
const axios = require('axios');
const authToken = require('../authToken.js');
// const authToken = require('../client/src/overviewComponents/authToken.js');


const qnaRouter = express.Router();

qnaRouter.get('/allQuestions', (req, res) => {
  console.log('it got inside of all questions for qna router', req.query);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', {
    headers: authToken,
    params: {
      product_id: req.query.product_id,
    },
  })
    .then((responseFromAPI) => {
      console.log('response to server in QNA Router------>', responseFromAPI.data)
      res.status(200).send(responseFromAPI.data);
    })
    .catch((err) => {
      console.log('error fetching question data', err);
      res.sendStatus(500);
    })
})

qnaRouter.post('/newQA', (req, res) => {
  const bodyparams =
  req.body.formData;

  if (req.body.type === "question") {
    bodyparams.product_id = req.body.parentId

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions', bodyparams, {
      headers: authToken,
    })
    .then((results) => {
      console.log('here is result from post question', results.data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('here is an error from post quesiton', err);
    })
  }

  if (req.body.type === "answer") {
    //add photos to bodyparams here when feature is implemented

    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa/questions/${req.body.parentId}/answers`, bodyparams, {
      headers: authToken,
    })
    .then((results) => {
      console.log('here is result from post answer', results.data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('here is an error from post answer', err);
    })
  }
})

module.exports = qnaRouter;

