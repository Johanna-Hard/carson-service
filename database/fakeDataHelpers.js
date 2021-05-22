const faker = require("faker");

const fakeListingsData = () => {
  let fakeData = [];

  while (fakeData.length <= 100) {
    fakeData.push({
      numberOfGuests: faker.datatype.number({
        min: 2,
        max: 12,
      }),
      pricePerNight: faker.datatype.number({
        min: 60,
        max: 999,
      }),
      weekendPricePerNight: faker.datatype.number({
        min: 60,
        max: 999,
      }),
      additionalGuestSurcharge: faker.datatype.number({
        min: 5,
        max: 100,
      }),
      minStay: faker.datatype.number({
        min: 1,
        max: 5,
      }),
      discountRate: faker.datatype.number({
        min: 5,
        max: 50,
      }),
      discountMinStay: faker.datatype.number({
        min: 5,
        max: 30,
      }),
    });
  }

  return fakeData;
};

const fakeReviewsData = () => {
  let fakeData = [];

  while (fakeData.length <= 100) {
    fakeData.push({
      rating: faker.datatype.number({
        min: 1,
        max: 5,
      }),
      ListingId: faker.datatype.number({
        min: 1,
        max: 20,
      }),
    });
  }
  return fakeData;
};

const fakeBookingsData = () => {
  let fakeData = [];

  while (fakeData.length <= 20) {
    fakeData.push({
      start: faker.date.future(1),
      end: faker.date.future(1),
      ListingId: faker.datatype.number({
        min: 1,
        max: 10,
      }),
    });
  }
  return fakeData;
};

module.exports = {
  fakeListingsData,
  fakeReviewsData,
  fakeBookingsData,
};
