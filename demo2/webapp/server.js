'use strict';

const express = require('express');
var os = require("os");

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://' + os.hostname() + ":" + PORT);
