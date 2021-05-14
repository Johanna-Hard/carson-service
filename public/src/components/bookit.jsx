import React from "react";
import * as s from "./styles/styles.jsx";

const BookIt = ({ className, state }) => {
  return (
    <div className={className}>
      <s.BookItLevel2>
        <s.PriceRatingContainer>
          <s.PriceContainer state={state}></s.PriceContainer>
          <s.RatingContainer state={state}></s.RatingContainer>
        </s.PriceRatingContainer>

        <s.CalendarContainer>cal to go here</s.CalendarContainer>

        <s.CheckAvailabilityContainer></s.CheckAvailabilityContainer>
      </s.BookItLevel2>
    </div>
  );
};

export default BookIt;
