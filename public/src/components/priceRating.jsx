import React from "react";

export const Price = ({ className, state }) => {
  return <div className={className}>${state.pricePerNight} / night</div>;
};

export const Rating = ({ className, state }) => {
  return (
    <div className={className}>
      {state.rating} rating, {state.numberOfReviews} reviews
    </div>
  );
};
