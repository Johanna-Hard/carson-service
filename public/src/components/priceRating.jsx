import React from "react";
import * as s from "./styles/styles.jsx";

export const Price = ({ className, state }) => {
  return (
    <div className={className}>
      <s.PriceContainer2>
        <s.PriceContainer3>
          <s.PriceSpanContainer>
            <s.PriceSpan>${state.pricePerNight}</s.PriceSpan>
            <s.NightSpan>/ night</s.NightSpan>
          </s.PriceSpanContainer>
        </s.PriceContainer3>
      </s.PriceContainer2>
    </div>
  );
};

export const Rating = ({ className, state }) => {
  return (
    <div className={className}>
      <s.RatingContainer2>
        <s.RatingSpanContainer>
          <s.StarIconSpan>
            <s.StarIconSVG
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
              ></path>
            </s.StarIconSVG>
          </s.StarIconSpan>
          <s.RatingSpan>{state.rating}</s.RatingSpan>
          <s.ReviewsSpan>({state.numberOfReviews} reviews)</s.ReviewsSpan>
        </s.RatingSpanContainer>
      </s.RatingContainer2>
    </div>
  );
};
