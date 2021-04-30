/* eslint-disable */

const express = require('express');
const axios = require('axios');
const authToken = require('../authToken.js');

const qnaRouter = express.Router();
const qaRootUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/qa'
const questionRootUrl = qaRootUrl.concat('/questions');
const answerRootUrl = qaRootUrl.concat('/answers');

qnaRouter.get('/allQuestions', (req, res) => {
  axios.get(questionRootUrl, {
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

qnaRouter.post('/', (req, res) => {
  const bodyparams = req.body.formData;

  if (req.body.type === "questions") {
    bodyparams.product_id = req.body.parentId

    axios.post(questionRootUrl, bodyparams, {
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

  if (req.body.type === "answers") {
    //add photos to bodyparams here when feature is implemented
    const newAnswerEndpoint = questionRootUrl.concat(`/${req.body.parentId}/answers`)

    axios.post(newAnswerEndpoint, bodyparams, {
      headers: authToken,
    })
    .then((results) => {
      console.log('here is result from post answer', results.data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('here is an error from post answer', err);
      res.status(400).send(err);
    })
  }
})

qnaRouter.put('/:type/:id/:action', (req, res) => {
  const putEndPoint = qaRootUrl.concat(req._parsedUrl.path);
  console.log('PUT END POINT', putEndPoint);
  axios.put(putEndPoint, {}, {
    headers: authToken
  })
  .then((results) => {
    console.log('successful put action');
    res.sendStatus(200);
  })
  .catch((err) => {
    // console.log('put action error', err);
    console.log('put action error');
    res.status(400).send(err);
  })

})

module.exports = qnaRouter;

