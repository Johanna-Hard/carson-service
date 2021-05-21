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

// hosts
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

function populatePhotos() {
  Photo.sync()
    .then(function() {
      // generate 1-15 photos per listing
      axios.get('https://api.unsplash.com/photos/random', {
        params: {
          query: 'rooms',
          count: 30
        },
        headers: {
          Authorization: `Client-ID ${config.unsplash_client_id_token}`
        }
      })
        .then(res => {
          console.log('data', res.data);
          let photos = [];
          let description;
          for (var i = 0; i < res.data.length; i++) {
            description = res.data[i].description;
            if (description === null || description === 'null') {
              if (res.data[i].alt_description) {
                description = res.data[i].alt_description;
              }
            }
            photos.push({
              url: res.data[i].urls.regular,
              width: res.data[i].width,
              height: res.data[i].height,
              description: description,
              listing_id: Math.floor(Math.random() * 100)
            });
          }
          return Photo.bulkCreate(photos);
        })
        .then(result => console.log('result', result))
        .catch(err => console.log('err', err));
    });
}

function populateHosts() {
  Host.sync()
    .then(function() {
      // generate 1-15 photos per listing
      axios.get('https://api.unsplash.com/photos/random', {
        params: {
          query: 'Headshot',
          count: 20
        },
        headers: {
          Authorization: `Client-ID ${config.unsplash_client_id_token}`
        }
      })
        .then(res => {
          console.log('data', res.data);
          let hosts = [];
          for (var i = 0; i < res.data.length; i++) {
            hosts.push({
              hostImage: res.data[i].urls.regular,
              hostName: res.data[i].user.name,
              hostRating: Number((Math.random() * 5).toFixed(1)),
              superHost: Math.random() > 0.80 ? 1 : 0,
              hostListingCount: Math.floor(Math.random() * 10 + 1)
            });
          }
          return Host.bulkCreate(hosts);
        })
        .then(result => console.log('result', result))
        .catch(err => console.log('err', err));
    });
}

// photos
let count = 0;
let seedPhotos = setInterval(function() {
  populatePhotos();
  count++;
  if (count > 40) {
    clearInterval(seedPhotos);
  }
}, 10000);

// hosts
// let count = 0;
// let seedHosts = setInterval(function() {
//   populateHosts();
//   count++;
//   if (count > 4) {
//     clearInterval(seedHosts);
//   }
// }, 10000);