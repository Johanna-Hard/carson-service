import React from "react";
import {
  StyledBookItLevel2,
  StyledPriceRatingContainer,
  StyledPriceContainer,
  StyledRatingContainer,
  StyledCalendarContainer,
  StyledCheckAvailability,
} from "./styles/styles.jsx";

const BookIt = ({ className, state }) => {
  return (
    <div className={className}>
      <StyledBookItLevel2>
        <StyledPriceRatingContainer>
          <StyledPriceContainer state={state}></StyledPriceContainer>
          <StyledRatingContainer state={state}></StyledRatingContainer>
        </StyledPriceRatingContainer>

        <StyledCalendarContainer>cal to go here</StyledCalendarContainer>

        <StyledCheckAvailability></StyledCheckAvailability>
      </StyledBookItLevel2>
    </div>
  );
};

export default BookIt;
