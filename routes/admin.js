const express = require('express');

const router = express.Router();

// get /admin/add
router.get('/add', (req, res, next) => {
  res.send(
    '<form action="/admin/add" method="POST"><input type="text" name="title" /><input type="submit" /></form>'
  );
});

// post /admin/add
router.post('/add', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
