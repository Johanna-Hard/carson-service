const axios = require('axios');
const Sequelize = require('sequelize');
const config = require('../config.js');
const db = new Sequelize('fec', config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql'
});

const Photo = db.define('Photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url: Sequelize.STRING,
  description: Sequelize.STRING,
  width: Sequelize.INTEGER,
  height: Sequelize.INTEGER,
  listing_id: Sequelize.INTEGER
});

const findForListingId = function(listingId, callback) {
  Photo.sync()
    .then(function() {
      return Photo.findAll({
        attributes: [
          'id',
          'url',
          'description',
          'width',
          'height',
          'listing_id'
        ],
        where: {
          listing_id: listingId
        },
        limit: 5
      })
    })
    .then(function(result) {
      const photos = [];
      result.forEach(function(photo) {
        photos.push(photo.dataValues);
      });
      console.log('photos', photos);
      callback(null, photos);
    })
    .catch(function(err) {
      console.log('err', err);
      callback(err);
    })
}

module.exports.findForListingId = findForListingId;