import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styled from "styled-components";

import * as s from "./components/styles/styles.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfGuests: null,
      pricePerNight: null,
      weekendPricePerNight: null,
      additionalGuestSurcharge: null,
      minStay: null,
      discountRate: null,
      discountMinStay: null,
      rating: null,
      numberOfReviews: null,
      bookings: [],
    };
  }

  async componentDidMount() {
    let stateData = {
      numberOfGuests: null,
      pricePerNight: null,
      weekendPricePerNight: null,
      additionalGuestSurcharge: null,
      minStay: null,
      discountRate: null,
      discountMinStay: null,
      rating: null,
      numberOfReviews: null,
      bookings: [],
    };
    const splitPath = window.location.pathname.split("/");
    const listingId = splitPath[splitPath.length - 1];

    await $.ajax({
      method: "GET",
      url: `http://13.58.29.30:2002/listings/${listingId}`,
      success: (data) => {
        stateData["numberOfGuests"] = data.numberOfGuests;
        stateData["pricePerNight"] = data.pricePerNight;
        stateData["weekendPricePerNight"] = data.weekendPricePerNight;
        stateData["additionalGuestSurcharge"] = data.additionalGuestSurcharge;
        stateData["minStay"] = data.minStay;
        stateData["discountRate"] = data.discountRate;
        stateData["discountMinStay"] = data.discountMinStay;
      },
      error: (err) => {
        console.log("GET listings req error", err);
      },
    });

    await $.ajax({
      method: "GET",
      url: `http://13.58.29.30:2002/reviews/${listingId}`,
      success: (data) => {
        const randomNum = Math.floor(Math.random() * 100);
        stateData["rating"] = Number(data.rating).toFixed(2);
        stateData["numberOfReviews"] = randomNum;
      },
      error: (err) => {
        console.log("GET rating req error", err);
      },
    });

    await $.ajax({
      method: "GET",
      url: `http://13.58.29.30:2002/bookings/${listingId}`,
      success: (data) => {
        stateData["bookings"] = data.bookings;
      },
      error: (err) => {
        console.log("GET bookings req error", err);
      },
    });

    this.setState(stateData);
  }

  render() {
    return (
      <s.WidgetContainer>
        <s.StyledBookIt state={this.state}></s.StyledBookIt>
      </s.WidgetContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("calendarWidget"));
