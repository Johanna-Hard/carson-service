const faker = require("faker");

const fakeListingsData = () => {
  let fakeData = [];

  while (fakeData.length <= 100) {
    fakeData.push({
      pricePerNight: faker.datatype.number({
        min: 60,
        max: 1200,
      }),
      numberOfGuests: faker.datatype.number({
        min: 1,
        max: 12,
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
      text: faker.lorem.paragraph(),
      rating: faker.datatype.number({
        min: 1,
        max: 5,
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
    });
  }
  return fakeData;
};

module.exports = {
  fakeListingsData,
  fakeReviewsData,
  fakeBookingsData,
};
