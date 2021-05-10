const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const { db, Listings, Reviews, Bookings } = require("../database/db_Index.js");
const axios = require("axios");

const app = express();

const port = 2002;

app.use(express.static(path.join(__dirname + "/../public")));
app.use(bodyParser.urlencoded({ extended: false }));

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

  // let options = {
  //   url: `localhost:2001/listings/${listingId}/bookings`,
  // }

  // axios.get(options.url)
  //   .then((listingData) => {
  //     // do stuff with returned listingData?
  //     res.send(listingData);
  //   })
});

app.get("/reviews/:listingId", (req, res) => {
  const listingId = req.params.listingId;
  let data = {};

  Reviews.findAll({
    where: {
      ListingId: listingId,
    },
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

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
