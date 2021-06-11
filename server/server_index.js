const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const { db, Listings, Reviews, Bookings } = require("../database/db_Index.js");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 2002;

app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname + "/../public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=31536000");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

app.get("*/rooms/:listingId", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

app.get("/listings/:listingId", (req, res) => {
  const listingId = req.params.listingId;

  let data = {};

  Listings.findAll({
    where: {
      id: listingId,
    },
  })
    .then((listingData) => {
      data = listingData[0].dataValues;
      res.send(data);
    })
    .catch((error) => {
      console.log("reviews error", error);
    });
});

app.get("/reviews/:listingId", (req, res) => {
  const listingId = req.params.listingId;
  let data = {};

  Reviews.findAll({
    // where: {
    //   ListingId: listingId,
    // },
    attributes: [[Sequelize.fn("AVG", Sequelize.col("rating")), "ratingAvg"]],
  })
    .then((rating) => {
      data["rating"] = rating[0].dataValues.ratingAvg;
      res.send(data);
    })
    .catch((error) => {
      console.log("reviews error", error);
    });
});

app.get("/bookings/:listingId", (req, res) => {
  const listingId = req.params.listingId;
  let data = {};

  Bookings.findAll({})
    .then((bookings) => {
      let formattedBookings = [];

      bookings.forEach((obj, i) => {
        const values = obj.dataValues;

        if (values.start > values.end) {
          let tempStart = null;
          let tempEnd = null;
          tempStart = values.start;
          tempEnd = values.end;

          values.end = tempStart;
          values.start = tempEnd;
        }

        formattedBookings.push(values);
      });

      data["bookings"] = formattedBookings;
      data["listingId"] = listingId;
      res.send(data);
    })
    .catch((error) => {
      console.log("bookings error", error);
    });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
}

module.exports = app;
