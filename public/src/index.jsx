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
      pricePerNight: null,
      numberOfGuests: null,
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
      url: `/calendarwidget/${this.state.listingId}`,
      success: (data) => {
        console.log("get request success: ", data);
        this.setState({
          listingId: data.listingId,
          pricePerNight: data.pricePerNight,
          numberOfGuests: data.numberOfGuests,
          additionalGuestSurcharge: data.additionalGuestSurcharge,
          minStay: data.minStay,
          discountRate: data.discountRate,
          discountMinStay: data.discountMinStay,
          rating: data.rating,
          bookings: data.bookings,
        });
        console.log("updated state:", this.state);
      },
      error: (err) => {
        console.log("GET req error", err);
      },
    });
  }

  render() {
    return <WidgetWrapper>book it!</WidgetWrapper>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
