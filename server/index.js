const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Promise = require("bluebird");
const db = require("../database/index.js");
const path = require("path");
Promise.promisifyAll(db);

const app = express();
const port = 2004;

app.use(cors());

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("*/rooms/:listingId", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

app.get("/photos/:listingId", (req, res) => {
  db.findForListingIdAsync(req.params.listingId)
    .then(function (photos) {
      console.log("photos:", photos);
      res.send(photos);
    })
    .catch(function (err) {
      console.log("err", err);
      res.send(err);
    });
});

app.get("/host/:hostId", (req, res) => {
  db.findForHostIdAsync(req.params.hostId)
    .then(function (host) {
      console.log("host:", host);
      res.send(host);
    })
    .catch(function (err) {
      console.log("err", err);
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening at http://18.117.79.8:${port}`);
});
