const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

// get /admin/add
router.get('/add-product', (req, res, next) => {
  // path join is special method, different from just concat strings
  // path join creates path string for both windows and linux
  // windows : sample/test/some.html
  // linux : sample\test\some.html

  // without helper
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

  // with helpler
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// post /admin/add
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
