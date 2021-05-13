import React from "react";
import {
  StyledPrice,
  StyledRating,
  StyledCheckAvailability,
} from "./styles/styles.jsx";

const BookIt = ({ className, state }) => {
  return (
    <div className={className}>
      <StyledPrice state={state}></StyledPrice>
      <StyledRating state={state}></StyledRating>
      <StyledCheckAvailability></StyledCheckAvailability>
    </div>
  );
};

export default BookIt;
