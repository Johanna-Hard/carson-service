const Sequelize = require('sequelize');
const db = new Sequelize('airbnb', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

db.authenticate()
  .then(() => { console.log('mysql has been established successfully.'); })
  .catch((error) => {console.error('Unable to connect to the database:', error); })


const Listing = db.define('Listing', {
  pricePerNight: Sequelize.INTEGER,
  numberOfGuests: Sequelize.INTEGER,
  numberOfAdults: Sequelize.INTEGER,
  numberOfChildren: Sequelize.INTEGER,
  numberOfInfants: Sequelize.INTEGER,
  guestSurchage: Sequelize.INTEGER,
  minStay: Sequelize.INTEGER,
  discountRate: Sequelize.INTEGER,
  discountMinStay: Sequelize.INTEGER
});

const Reviews = db.define('Reviews', {
  text: Sequelize.TEXT,
  rating: Sequelize.INTEGER
});

const Bookings = db.define('Bookings', {
  start: Sequelize.DATEONLY,
  end: Sequelize.DATEONLY
});

Listing.hasMany(Reviews);
Listing.hasMany(Bookings);
Reviews.belongsTo(Listing);
Bookings.belongsTo(Listing);


db.sync({ force: true })
.then(() => { console.log('mysql tables have been created successfully.'); })
.catch((error) => {console.error('Unable to create the tables:', error); })


module.exports = db;