/* eslint-disable */
const express = require('express');
const axios = require('axios');
const authToken = require('../authToken.js');

const rnrRouter = express.Router();
const rnrRootUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/reviews'
const metaRootUrl = rnrRootUrl.concat('/meta');

rnrRouter.get('/allReviews', (req, res) => {
  axios.get(rnrRootUrl, {
    headers: authToken,
    params: req.query
  })
  .then((apiResponse) => {
    console.log('response to server in RNR Router: ', apiResponse.data);
    res.status(200).send(apiResponse.data);
  })
  .catch((err) => {
    res.status(500).send(`API get req error: ${err}`);
  })
})


module.exports = rnrRouter;