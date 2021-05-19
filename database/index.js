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

const Host = db.define('Host', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hostImage: Sequelize.STRING,
  hostName: Sequelize.STRING,
  hostRating: Sequelize.DECIMAL(2,1),
  superHost: Sequelize.BOOLEAN,
  hostListingCount: Sequelize.INTEGER
});

const findForListingId = function(listing_id, callback) {
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
          listing_id
        }
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
};

const findForHostId = function(host_id, callback) {
  Host.sync()
    .then(function() {
      return Host.findAll({
        attributes: [
          'id',
          'hostImage',
          'hostName',
          'hostRating',
          'superHost',
          'hostListingCount'
        ],
        where: {
          id: host_id
        }
      })
    })
    .then(function(result) {
      console.log('host', result[0].dataValues);
      callback(null, result[0].dataValues);
    })
    .catch(function(err) {
      console.log('err', err);
      callback(err);
    })
};

module.exports = {
  findForListingId,
  findForHostId
};