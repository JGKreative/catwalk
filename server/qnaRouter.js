/* eslint-disable */

const express = require('express');
const axios = require('axios');
const authToken = require('../authToken.js');

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
});

module.exports = qnaRouter;

