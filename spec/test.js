// const db = require("../database/db_Index.js");
const request = require("supertest");
const generator = require("../database/fakeDataHelpers.js");
const axios = require("axios");
const app = require("../server/server_index.js");
const req = request(app);
const listingId = 5;

describe("fake data generator", () => {
  test("is price number", () => {
    let fakeListingsData = generator.fakeListingsData();

    expect(typeof fakeListingsData[0].pricePerNight).toBe("number");
  });

  test("reviews has a listingid", () => {
    let fakeReviewsData = generator.fakeReviewsData();

    expect(fakeReviewsData[0].ListingId).toBeTruthy();
  });

  test("bookings has a listingid", () => {
    let fakeBookingsData = generator.fakeBookingsData();

    expect(fakeBookingsData[0].ListingId).toBeTruthy();
  });

  test("fake price per night range", () => {
    expect(generator.fakeListingsData()[0].pricePerNight).toBeLessThanOrEqual(
      1200
    );
  });

  test("returned fake value as an array (of objects)", () => {
    expect(Array.isArray(generator.fakeListingsData())).toBe(true);
    expect(Array.isArray(generator.fakeBookingsData())).toBe(true);
    expect(Array.isArray(generator.fakeReviewsData())).toBe(true);
  });
});

describe("server endpoints tests", () => {
  test("GET listings", async () => {
    const endpoint = `/listings/${listingId}`;
    const response = await req.get(endpoint);
    expect.assertions(8);

    expect(response.statusCode).toBe(200);
    expect(response.body.numberOfGuests).toBeTruthy();
    expect(response.body.pricePerNight).toBeTruthy();
    expect(response.body.weekendPricePerNight).toBeTruthy();
    expect(response.body.additionalGuestSurcharge).toBeTruthy();
    expect(response.body.minStay).toBeTruthy();
    expect(response.body.discountRate).toBeTruthy();
    expect(response.body.discountMinStay).toBeTruthy();
  });

  test("GET reviews", async () => {
    const endpoint = `/reviews/${listingId}`;
    const response = await req.get(endpoint);
    expect.assertions(2);

    expect(response.statusCode).toBe(200);
    expect(response.body.rating).toBeTruthy();
  });

  test("GET bookings", async () => {
    const endpoint = `/bookings/${listingId}`;
    const response = await req.get(endpoint);
    expect.assertions(2);

    expect(response.statusCode).toBe(200);
    expect(response.body.bookings).toBeTruthy();
  });
});
