const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('../database/index.js');
Promise.promisifyAll(db);

const app = express();
const port = 2004;

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('testing');
});

app.get('/photos/:listingId', (req, res) => {
  console.log(req.params.listingId);
  db.findForListingIdAsync(req.params.listingId)
    .then(function(photos) {
      console.log('photos:', photos);
      res.send(photos);
    })
    .catch(function(err) {
      console.log('err', err);
      res.send(err);
    })
});

app.get('/host/:hostId', (req, res) => {
  db.findForHostIdAsync(req.params.hostId)
    .then(function(host) {
      console.log('host:', host);
      res.send(host);
    })
    .catch(function(err) {
      console.log('err', err);
      res.send(err);
    })
});

app.listen(port, () =>  {
  console.log(`Listening at http://localhost:${port}`);
});