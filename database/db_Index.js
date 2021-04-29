const Sequelize = require('sequelize');
const db = new Sequelize('airbnb', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

db.authenticate()
  .then(() => { console.log('mysql has been established successfully.'); })
  .catch((error) => {console.error('Unable to connect to the database:', error); })

module.exports = db;