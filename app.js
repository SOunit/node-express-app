/**
 * row code behined framework, express.js
 */

// export routes code to outer file
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('this runs always!');
  next();
});

app.use('/add', (req, res, next) => {
  console.log('add middleware!');
  res.send('add page');
});

app.use('/', (req, res, next) => {
  console.log('middleware!');
  res.send('hello from middleware');
});

app.listen(3000);
