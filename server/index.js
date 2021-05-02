/* eslint-disable */

const express = require('express');
const path = require('path');
const qnaRouter = require('./qnaRouter.js');
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

app.use('/qna', qnaRouter);
//app.use('/otherModuleEndPoints', otherModuleRouter);

//--- Look for and store certain product info
//--- (I think keep this at bottom so it doesn't intercept our component routers???)
app.use('/:productId', express.static(path.join(__dirname, '/../public')))

app.listen(PORT, () => {
  console.log(`Server running and listening at localhost:${PORT}`);
})