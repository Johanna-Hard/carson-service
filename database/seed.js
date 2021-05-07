const axios = require('axios');
const Sequelize = require('sequelize');
const db = new Sequelize('fec', 'root', 'august30', {
  host: 'localhost',
  dialect: 'mysql'
});

const Listing = db.define('Listing', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
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

function generateListings() {
  Listing.sync()
    .then(function() {
      // generate 100 listings
      let listings = [];
      for (let id = 0; id < 100; id++) {
        listings.push({});
      }
      return Listing.bulkCreate(listings);
    })
    .then(result => {
      console.log('result', result);
    })
    .catch(err => {
      console.log('error', err);
    });
}

function populatePhotos() {
  Photo.sync()
    .then(function() {
      // generate 1-15 photos per listing
      axios.get('https://api.unsplash.com/photos/random', {
        params: {
          query: 'apartment',
          count: 30
        },
        headers: {
          Authorization: 'Client-ID LhqSjP-bnHsXW2FaOEzjznJZGUy0js4CrZ7UV04m2v4'
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

generateListings();
let count = 0;
let seed = setInterval(function() {
  populatePhotos();
  count++;
  if (count > 40) {
    clearInterval(seed);
  }
}, 10000);

