import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import styled from "styled-components";

import PriceRating from "./components/price_rating.jsx";
import Dates from "./components/dates.jsx";
import CheckAvailability from "./components/check_availability.jsx";
import { WidgetWrapper } from "./components/styles/index.styles.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <WidgetWrapper>book it!</WidgetWrapper>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
