import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styled from "styled-components";

import PriceRating from "./components/price_rating.jsx";
import Dates from "./components/dates.jsx";
import CheckAvailability from "./components/check_availability.jsx";
import WidgetWrapper from "./components/styles/index.styles.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 5,
      numberOfGuests: null,
      pricePerNight: null,
      weekendPricePerNight: null,
      additionalGuestSurcharge: null,
      minStay: null,
      discountRate: null,
      discountMinStay: null,
      rating: null,
      bookings: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: "GET",
      url: `/listings/${this.state.listingId}`,
      success: (data) => {
        console.log("get listings request success: ", data);
        this.setState({
          numberOfGuests: data.numberOfGuests,
          pricePerNight: data.pricePerNight,
          weekendPricePerNight: data.weekendPricePerNight,
          additionalGuestSurcharge: data.additionalGuestSurcharge,
          minStay: data.minStay,
          discountRate: data.discountRate,
          discountMinStay: data.discountMinStay,
        });
        console.log("updated listings state:", this.state);
      },
      error: (err) => {
        console.log("GET listings req error", err);
      },
    });

    $.ajax({
      method: "GET",
      url: `/reviews/${this.state.listingId}`,
      success: (data) => {
        console.log("get rating request success: ", data);
        this.setState({
          rating: data.rating,
        });
        console.log("updated rating state:", this.state);
      },
      error: (err) => {
        console.log("GET rating req error", err);
      },
    });

    $.ajax({
      method: "GET",
      url: `/bookings/${this.state.listingId}`,
      success: (data) => {
        console.log("get bookings request success: ", data);
        this.setState({
          bookings: data.bookings,
        });
        console.log("updated bookings state:", this.state);
      },
      error: (err) => {
        console.log("GET bookings req error", err);
      },
    });
  }

  render() {
    return <WidgetWrapper>book it!</WidgetWrapper>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
