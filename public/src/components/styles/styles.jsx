import styled from "styled-components";
import BookIt from "../bookit.jsx";
import { Price, Rating } from "../priceRating.jsx";
import { CheckAvailability } from "../CheckAvailability.jsx";
import { Calendar } from "../Calendar.jsx";

export const WidgetContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin-top: 48px;
  -webkit-font-smoothing: antialiased;
`;

export const StyledBookIt = styled(BookIt)`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`;

export const BookItLevel2 = styled.div`
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  display: flex !important;
  flex-direction: column !important;
`;

export const PriceRatingContainer = styled.div`
  -webkit-box-align: baseline !important;
  -webkit-box-pack: justify !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;
  display: flex !important;
  flex-flow: row wrap !important;
  justify-content: space-between !important;
  align-items: baseline !important;
  margin-bottom: 24px !important;
`;

/// PRICE ///

export const PriceContainer = styled(Price)`
  -webkit-box-pack: center !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-align: start !important;
  align-items: flex-start !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

export const PriceContainer2 = styled.div`
  line-height: normal !important;
  width: 100% !important;
`;

export const PriceContainer3 = styled.div`
  font-size: 22px !important;
  line-height: 26px !important;
`;

export const PriceSpanContainer = styled.span`
  box-sizing: border-box;
`;

export const PriceSpan = styled.span`
  font-weight: 600 !important;
`;

export const NightSpan = styled.span`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  white-space: nowrap !important;
  padding-left: 4px !important;
`;

/// RATING ///

export const RatingContainer = styled(Rating)`
  margin-top: 8px !important;
`;

export const RatingContainer2 = styled.div`
  margin-top: 8px !important;
`;

export const RatingSpanContainer = styled.div`
  -webkit-box-align: baseline !important;
  align-items: baseline !important;
  display: flex !important;
  font-size: 14px !important;
  line-height: 18px !important;
`;

export const StarIconSpan = styled.span`
  font-size: 12px;
  text-align: center !important;
  color: #ff385c !important;
`;

export const StarIconSVG = styled.svg`
  display: block;
  height: 12px;
  width: 12px;
  fill: currentcolor;
`;

export const RatingSpan = styled.span`
  color: rgb(34, 34, 34) !important;
  padding-left: 4px !important;
  font-weight: 600 !important;
`;

export const ReviewsSpan = styled.span`
  color: rgb(113, 113, 113) !important;
  padding-left: 4px !important;
  font-weight: 600 !important;
  text-decoration: underline !important;
`;

/// CALENDAR STRUCTURE ///

export const CalendarContainer = styled(Calendar)`
  margin-bottom: 16px !important;
  box-sizing: border-box;
`;

export const CalendarContainer2 = styled.div`
  position: relative !important;
`;

export const CalendarContainer3 = styled.div`
  position: relative !important;
  background-color: #ffffff !important;
`;

/// CHECK IN CHECK OUT ///

export const CheckInCheckOutContainer = styled.div`
  display: flex !important;
  box-sizing: border-box;
`;

export const CheckInCheckOutContainer2 = styled.div`
  width: 100% !important;
`;

export const CheckInCheckOutContainer3 = styled.div`
  position: relative !important;
`;

export const inset1 = styled.div`
  position: absolute !important;
  pointer-events: none !important;
`;

export const CheckInCheckOutFunctionality = styled.div`
  position: relative !important;
  display: flex !important;
  width: 100% !important;
  margin: 0px !important;
  border: none transparent !important;
  color: rgb(34, 34, 34) !important;
  background-color: transparent !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  outline: 0px !important;
`;

export const inset2 = styled.div`
  position: absolute !important;
  pointer-events: none !important;
  border-style: solid !important;
`;

export const CheckInContainer = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  width: 100% !important;
  overflow: hidden !important;
`;

export const CheckInCheckOut = styled.div`
  position: absolute !important;
  top: 12px !important;
  left: 12px !important;
  right: 12px !important;
  margin: 0px !important;
  padding: 0px !important;
  pointer-events: none !important;
  font-size: 10px !important;
  line-height: 12px !important;
  color: rgb(34, 34, 34) !important;
  text-transform: uppercase !important;
  font-weight: 800 !important;
  max-width: 100% !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
`;

export const AddDate = styled.div`
  height: 20px !important;
  width: 100% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 26px 12px 10px !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: 14px !important;
  font-weight: inherit !important;
  line-height: 18px !important;
  appearance: none !important;
  cursor: pointer !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  color: rgb(113, 113, 113) !important;
`;

export const CheckOutContainer = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  width: 100% !important;
  overflow: hidden !important;
  border-left: 1px solid rgb(176, 176, 176) !important;
`;

export const GuestsContainer = styled.div`
  display: flex !important;
`;

export const GuestsContainer2 = styled.div`
  position: relative !important;
  width: 100% !important;
`;

export const GuestsContainer3 = styled.div`
  position: relative !important;
`;

export const inset3 = styled.div`
  position: absolute !important;
  pointer-events: none !important;
`;

export const GuestsFunctionality = styled.div`
  position: relative !important;
  display: flex !important;
  width: 100% !important;
  margin: 0px !important;
  border: none transparent !important;
  color: rgb(34, 34, 34) !important;
  background-color: transparent !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  outline: 0px !important;
`;

export const TotalGuestsHeader = styled.div`
  position: absolute !important;
  top: 12px !important;
  left: 12px !important;
  right: 12px !important;
  margin: 0px !important;
  padding: 0px !important;
  pointer-events: none !important;
  font-size: 10px !important;
  line-height: 12px !important;
  color: rgb(34, 34, 34) !important;
  text-transform: uppercase !important;
  font-weight: 800 !important;
  max-width: 100% !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
`;

export const NumberOfGuestsContainer = styled.div`
  height: 20px !important;
  width: 100% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 26px 36px 10px 12px !important;
  background-color: transparent !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  appearance: none !important;
  cursor: pointer !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
`;

export const NumberOfGuestsContainer2 = styled.div`
  font-size: 14px !important;
  line-height: 18px !important;
`;

export const NumberOfGuests = styled.span``;

export const inset4 = styled.div`
  position: absolute !important;
  pointer-events: none !important;
  border-style: solid !important;
`;

export const DropDownIconContainer = styled.div`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  position: absolute !important;
  right: 0px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  max-width: 50% !important;
  min-width: 36px !important;
  padding-right: 12px !important;
  pointer-events: none !important;
  color: rgb(34, 34, 34) !important;
`;

export const DropDownIconSVG = styled.svg`
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`;

/// GUESTS PANEL PICKER ///

export const GuestsPickerPanelContainer = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 4px !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px, rgb(0 0 0 / 7%) 0px 0px 0px 1px !important;
  box-sizing: border-box !important;
  margin-bottom: 16px !important;
  min-width: 280px !important;
  padding: 16px !important;
  position: absolute !important;
  text-align: left !important;
  width: 100% !important;
  z-index: 999 !important;
  right: 0px !important;
`;

export const GuestsOptionContainer = styled.div`
  margin-bottom: 24px !important;
  margin-top: 8px !important;
`;

export const GuestsOptionContainer2 = styled.div`
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  width: 100% !important;
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
`;

export const GuestsTextContainer = styled.div`
  flex: 1 1 0% !important;
`;

export const GuestsText = styled.div`
  font-size: 16px !important;
  line-height: 20px !important;
  padding-bottom: 4px !important;
  font-weight: 600 !important;
`;

export const AddSubtractGuests = styled.div`
  display: flex !important;
`;

export const AddSubtractGuests2 = styled.div`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 104px !important;
  height: 32px !important;
  color: rgb(34, 34, 34) !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;

export const SubtractButtonDisabled = styled.button`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  -webkit-box-flex: 0 !important;
  width: 32px !important;
  height: 32px !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  cursor: not-allowed !important;
  display: inline-flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  color: rgb(235, 235, 235) !important;
  font-family: inherit !important;
  outline: none !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 50% !important;
`;

export const SubtractButtonEnabled = styled.button`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  -webkit-box-flex: 0 !important;
  width: 32px !important;
  height: 32px !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  cursor: pointer !important;
  display: inline-flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(176, 176, 176) !important;
  color: rgb(113, 113, 113) !important;
  font-family: inherit !important;
  outline: none !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 50% !important;
`;

export const SubtractButtonSpan = styled.span`
  height: 22px !important;
  width: 22px !important;
  padding: 5px !important;
`;

export const SubtractButtonSVG = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;
`;

export const GuestCounter = styled.div`
  position: relative !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  line-height: inherit !important;
`;

export const GuestCount = styled.div``;

export const AddButtonEnabled = styled.button`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  -webkit-box-flex: 0 !important;
  width: 32px !important;
  height: 32px !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  cursor: pointer !important;
  display: inline-flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(176, 176, 176) !important;
  color: rgb(113, 113, 113) !important;
  font-family: inherit !important;
  outline: none !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 50% !important;
`;

export const AddButtonDisabled = styled.button`
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  -webkit-box-flex: 0 !important;
  width: 32px !important;
  height: 32px !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  cursor: not-allowed !important;
  display: inline-flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  color: rgb(235, 235, 235) !important;
  font-family: inherit !important;
  outline: none !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 50% !important;
`;

export const AddButtonSpan = styled.div`
  height: 22px !important;
  width: 22px !important;
  padding: 5px !important;
`;

export const AddButtonSVG = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;
`;

export const MaxGuests = styled.div`
  font-size: 14px !important;
  line-height: 20px !important;
  color: rgb(34, 34, 34) !important;
  margin-bottom: 16px !important;
`;

export const CloseButtonContainer = styled.div`
  -webkit-box-pack: end !important;
  display: flex !important;
  justify-content: flex-end !important;
`;

export const CloseButton = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px -10px !important;
  position: relative !important;
  text-align: center !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 10px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border: none !important;
  background: transparent !important;
  color: rgb(34, 34, 34) !important;
  text-decoration: underline !important;
`;

/// CHECK AVAILABILITY ///

export const CheckAvailabilityContainer = styled(CheckAvailability)`
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
