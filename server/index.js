const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

const port = 1234;

app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(port, () => {
  console.log(`Server is listening at port ${port}`)
});