import React from "react";
import {
  StyledPriceContainer2,
  StyledPriceContainer3,
  StyledPriceSpanContainer,
  StyledPriceSpan,
  StyledNightSpan,
} from "./styles/styles.jsx";

export const Price = ({ className, state }) => {
  return (
    <div className={className}>
      <StyledPriceContainer2>
        <StyledPriceContainer3>
          <StyledPriceSpanContainer>
            <StyledPriceSpan>${state.pricePerNight}</StyledPriceSpan>
            <StyledNightSpan>/ night</StyledNightSpan>
          </StyledPriceSpanContainer>
        </StyledPriceContainer3>
      </StyledPriceContainer2>
    </div>
  );
};

export const Rating = ({ className, state }) => {
  return (
    <div className={className}>
      {state.rating} ({state.numberOfReviews} reviews)
    </div>
  );
};
