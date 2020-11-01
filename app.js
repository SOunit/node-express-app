/**
 * row code behined framework, express.js
 */

// export routes code to outer file
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('another middleware!');
  res.send('hello from middleware');
});

app.listen(3000);
