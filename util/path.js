const path = require('path');

// global variable.
// always return the main file which is used when app run.
const mainFile = require.main.filename;

// this file alwasy return the path to app.js
module.exports = path.dirname(mainFile);
