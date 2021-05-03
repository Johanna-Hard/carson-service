const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const { db, Listings, Reviews, Bookings } = require("../database/db_Index.js");

const app = express();

const port = 1234;

app.use(express.static(path.join(__dirname + "/../public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/calendarwidget/:listingId", (req, res) => {
  const listingId = req.params.listingId;

  let data = {};

  Listings.findAll({
    where: {
      id: listingId,
    },
  })
    .then((listingData) => {
      data = listingData[0].dataValues;

      return Reviews.findAll({
        attributes: [
          [Sequelize.fn("AVG", Sequelize.col("rating")), "ratingAvg"],
        ],
      });
    })
    .then((rating) => {
      data["rating"] = rating[0].dataValues.ratingAvg;

      return Bookings.findAll({});
    })
    .then((bookings) => {
      let formattedBookings = [];

      bookings.forEach((obj, i) => {
        const values = obj.dataValues;

        if (values.start > values.end) {
          let temp = null;
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
      console.log("error", error);
    });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
