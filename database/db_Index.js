const Sequelize = require("sequelize");
const db = new Sequelize("airbnb", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});
const {
  fakeListingsData,
  fakeReviewsData,
  fakeBookingsData,
} = require("./fakeDataHelpers.js");

db.authenticate()
  .then(() => {
    console.log("mysql has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const Listings = db.define("Listing", {
  pricePerNight: Sequelize.INTEGER,
  numberOfGuests: Sequelize.INTEGER,
  additionalGuestSurchage: Sequelize.INTEGER,
  minStay: Sequelize.INTEGER,
  discountRate: Sequelize.INTEGER,
  discountMinStay: Sequelize.INTEGER,
});

const Reviews = db.define("Reviews", {
  text: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
});

const Bookings = db.define("Bookings", {
  start: Sequelize.DATEONLY,
  end: Sequelize.DATEONLY,
});

// Listings.hasMany(Reviews);
// Listings.hasMany(Bookings);
// Reviews.belongsTo(Listing);
// Bookings.belongsTo(Listing);

db.sync({ force: true })
  .then(() => {
    console.log("mysql tables have been created successfully.");
  })
  .catch((error) => {
    console.error("Unable to create the tables:", error);
  })
  .then(() => {
    Listings.bulkCreate(fakeListingsData());
    Reviews.bulkCreate(fakeReviewsData());
    Bookings.bulkCreate(fakeBookingsData());
  })
  .then(() => {
    console.log("fake data has been added to tables.");
  })
  .catch((error) => {
    console.error("Unable to add fake data to listing table", error);
  });

module.exports = db;
