const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "/../public")))

app.use(express.json());

// want this??
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next()
})



app.listen(PORT, () => {
  console.log(`Server running and listening at localhost:${PORT}`);
})