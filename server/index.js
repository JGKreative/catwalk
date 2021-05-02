/* eslint-disable */
const express = require('express')
const path = require('path')
const overviewRouter = require('./overViewRouter.js')
const qnaRouter = require('./qnaRouter.js')
const rnrRouter = require('./rnrRouter.js')
const morgan = require('morgan'); /* <-- middleware */

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
// want this??
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
});


//------------------------------------------------------//
//------- ROUTER PATHS FOR DIFFERENT COMPONENTS --------//
//------------------------------------------------------//
app.use('/overview', overviewRouter);
app.use('/qna', qnaRouter);
app.use('/rnr', rnrRouter);
//app.use('/otherModuleEndPoints', otherModuleRouter);


//--- This is to navigate to products from url
//--- (I think keep this at bottom so it doesn't intercept our component routers???)
app.use('/:productId', express.static(path.join(__dirname, '/../public')))

app.listen(PORT, () => {
  console.log(`Server running and listening at localhost:${PORT}`);
})