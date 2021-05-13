import styled from "styled-components";
import BookIt from "../bookit.jsx";
import { Price, Rating } from "../priceRating.jsx";
import { CheckAvailability } from "../CheckAvailability.jsx";

export const WidgetContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin-top: 48px;
`;

export const StyledBookIt = styled(BookIt)``;

export const StyledPrice = styled(Price)`
  font-family: Helvetica;
  font-size: 50px;
`;

export const StyledRating = styled(Rating)`
  font-family: Helvetica;
  font-size: 50px;
`;

export const StyledCheckAvailability = styled(CheckAvailability)`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 14px 24px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border: none !important;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  ) !important;
  color: rgb(255, 255, 255) !important;
  width: 100% !important;
`;
