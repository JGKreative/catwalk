/* eslint-disable */
const express = require('express');
const axios = require('axios');
const authToken = require('../authToken.js');

const overviewRouter = express.Router();
const overviewRootUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products/'

overviewRouter.get('/productInfo/:productId', (req, res) => {
  axios.get(overviewRootUrl + `${req.params.productId}`, {
    headers: authToken,
  })
    .then((responseFromAPI) => {
      console.log('response to server in overview Router------>', responseFromAPI.data)
      res.status(200).send(responseFromAPI.data);
    })
    .catch((err) => {
      console.log('error fetching products data', err);
      res.sendStatus(500);
    })
})

overviewRouter.get('/styles/:productId', (req, res) => {
  axios.get(overviewRootUrl + `${req.params.productId}/styles`, {
    headers: authToken,
  })
    .then((responseFromAPI) => {
      console.log('response to server in overview Router------>', responseFromAPI.data)
      res.status(200).send(responseFromAPI.data);
    })
    .catch((err) => {
      console.log('error fetching products data', err);
      res.sendStatus(500);
    })
})

module.exports = overviewRouter;

