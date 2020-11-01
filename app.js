const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add', (req, res, next) => {
  res.send(
    '<form action="/logout" method="POST"><input type="text" name="title" /><input type="submit" /></form>'
  );
});

app.use('/logout', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('hello from middleware');
});

app.listen(3000);
