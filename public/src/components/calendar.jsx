import React from "react";
import * as s from "./styles/styles.jsx";

export const Calendar = ({ className, state }) => {
  return (
    <div className={className}>
      <s.CalendarContainer2>
        <s.CalendarContainer3 style={{ borderRadius: "8px" }}>
          <s.CheckInCheckOutContainer>
            <s.CheckInCheckOutContainer2>
              <s.CheckInCheckOutContainer3 style={{ flex: "1 1 0%" }}>
                <s.inset1
                  style={{
                    background: "none",
                    borderRadius: "8px 8px 0px 0px",
                    inset: "0px 0px -1px",
                  }}
                ></s.inset1>
                <s.CheckInCheckOutFunctionality>
                  <s.CheckInContainer>
                    <s.CheckInCheckOut>Check-in</s.CheckInCheckOut>
                    <s.AddDate>Add date</s.AddDate>
                  </s.CheckInContainer>
                  <s.CheckOutContainer>
                    <s.CheckInCheckOut>Checkout</s.CheckInCheckOut>
                    <s.AddDate>Add date</s.AddDate>
                  </s.CheckOutContainer>
                </s.CheckInCheckOutFunctionality>
                <s.inset2
                  style={{
                    inset: "0px 0px -1px",
                    borderRadius: "8px 8px 0px 0px",
                    borderColor: "rgb(176, 176, 176)",
                    borderWidth: "1px",
                    zIndex: "0",
                  }}
                ></s.inset2>
              </s.CheckInCheckOutContainer3>
            </s.CheckInCheckOutContainer2>
          </s.CheckInCheckOutContainer>
          <s.GuestsContainer>
            <s.GuestsContainer2>
              <s.GuestsContainer3 style={{ flex: "1 1 0%" }}>
                <s.inset3
                  style={{
                    background: "none",
                    borderRadius: "0px 0px 8px 8px",
                    inset: "0px 0px -1px",
                  }}
                ></s.inset3>
                <s.GuestsFunctionality>
                  <s.Guests>Guests</s.Guests>
                  <s.NumberOfGuestsContainer>
                    <s.NumberOfGuestsContainer2>
                      <s.NumberOfGuests>1 guest</s.NumberOfGuests>
                    </s.NumberOfGuestsContainer2>
                  </s.NumberOfGuestsContainer>
                  <s.DropDownIconContainer>
                    <s.DropDownIconSVG
                      viewBox="0 0 18 18"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                        fill-rule="evenodd"
                      ></path>
                    </s.DropDownIconSVG>
                  </s.DropDownIconContainer>
                </s.GuestsFunctionality>
                <s.inset4
                  style={{
                    inset: "0px 0px -1px",
                    borderRadius: "0px 0px 8px 8px",
                    borderColor: "rgb(176, 176, 176)",
                    borderWidth: "1px",
                    zIndex: "0",
                  }}
                ></s.inset4>
              </s.GuestsContainer3>
            </s.GuestsContainer2>
          </s.GuestsContainer>
        </s.CalendarContainer3>
      </s.CalendarContainer2>
    </div>
  );
};
