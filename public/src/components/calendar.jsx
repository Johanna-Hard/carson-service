import React from "react";
import ReactDOM from "react-dom";
import * as s from "./styles/styles.jsx";

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestsPanelExpanded: false,
      changeDatesExpanded: false,
      Adults: 1,
      Children: 0,
      Infants: 0,
      totalGuestCount: 1,
    };

    this.toggleDatesPanel = this.toggleDatesPanel.bind(this);
    this.toggleGuestsPanel = this.toggleGuestsPanel.bind(this);
    this.incrementGuests = this.incrementGuests.bind(this);
    this.decrementGuests = this.decrementGuests.bind(this);
  }

  toggleDatesPanel() {
    this.setState({
      changeDatesExpanded: !this.state.changeDatesExpanded,
    });
  }

  toggleGuestsPanel() {
    this.setState({
      guestsPanelExpanded: !this.state.guestsPanelExpanded,
    });
  }

  incrementGuests(guest) {
    if (guest === "Infants") {
      this.setState((state) => {
        return { [guest]: state[guest] + 1 };
      });
    } else {
      this.setState((state) => {
        return {
          [guest]: this.state[guest] + 1,
          totalGuestCount: this.state.totalGuestCount + 1,
        };
      });
    }
  }

  decrementGuests(guest) {
    if (guest === "Infants") {
      this.setState((state) => {
        return { [guest]: state[guest] - 1 };
      });
    } else {
      this.setState((state) => {
        return {
          [guest]: this.state[guest] - 1,
          totalGuestCount: this.state.totalGuestCount - 1,
        };
      });
    }
  }

  render() {
    console.log("component state", this.state);
    console.log("props", this.props.state);
    const datesPanel = this.state.changeDatesExpanded;
    const guestsPanel = this.state.guestsPanelExpanded;
    let datesContainer;
    let guestsContainer;
    let datesPopOut;
    let NumberofGuestsDisplay;

    if (this.state.totalGuestCount > 1 && this.state.Infants == 0) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guests`;
    } else if (this.state.totalGuestCount > 1 && this.state.Infants == 1) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guests, ${this.state.Infants} infant`;
    } else if (this.state.totalGuestCount > 1 && this.state.Infants > 1) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guests, ${this.state.Infants} infants`;
    } else if (this.state.totalGuestCount <= 1 && this.state.Infants == 0) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guest`;
    } else if (this.state.totalGuestCount <= 1 && this.state.Infants == 1) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guest, ${this.state.Infants} infant`;
    } else if (this.state.totalGuestCount <= 1 && this.state.Infants > 1) {
      NumberofGuestsDisplay = `${this.state.totalGuestCount} guest, ${this.state.Infants} infants`;
    }

    if (guestsPanel) {
      guestsContainer = (
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
              <s.GuestsFunctionality onClick={() => this.toggleGuestsPanel()}>
                <s.TotalGuestsHeader>Guests</s.TotalGuestsHeader>
                <s.NumberOfGuestsContainer>
                  <s.NumberOfGuestsContainer2>
                    <s.NumberOfGuests>{NumberofGuestsDisplay}</s.NumberOfGuests>
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
                      d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z"
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
              <s.GuestsPickerPanelContainer>
                <s.GuestsOptionContainer>
                  <s.GuestsOptionContainer2>
                    <s.GuestsTextContainer>
                      <s.GuestsText>Adults</s.GuestsText>
                    </s.GuestsTextContainer>
                    <s.AddSubtractGuests>
                      <s.AddSubtractGuests2>
                        {this.state.Adults > 1 ? (
                          <s.SubtractButtonEnabled
                            onClick={() => this.decrementGuests("Adults")}
                          >
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonEnabled>
                        ) : (
                          <s.SubtractButtonDisabled>
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonDisabled>
                        )}
                        <s.GuestCounter>
                          <s.GuestCount>{this.state.Adults}</s.GuestCount>
                        </s.GuestCounter>
                        {this.state.totalGuestCount <
                        this.props.state.numberOfGuests ? (
                          <s.AddButtonEnabled
                            onClick={() => this.incrementGuests("Adults")}
                          >
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonEnabled>
                        ) : (
                          <s.AddButtonDisabled>
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonDisabled>
                        )}
                      </s.AddSubtractGuests2>
                    </s.AddSubtractGuests>
                  </s.GuestsOptionContainer2>
                </s.GuestsOptionContainer>
                <s.GuestsOptionContainer>
                  <s.GuestsOptionContainer2>
                    <s.GuestsTextContainer>
                      <s.GuestsText>Children</s.GuestsText>
                    </s.GuestsTextContainer>
                    <s.AddSubtractGuests>
                      <s.AddSubtractGuests2>
                        {this.state.Children > 0 ? (
                          <s.SubtractButtonEnabled
                            onClick={() => this.decrementGuests("Children")}
                          >
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonEnabled>
                        ) : (
                          <s.SubtractButtonDisabled>
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonDisabled>
                        )}
                        <s.GuestCounter>
                          <s.GuestCount>{this.state.Children}</s.GuestCount>
                        </s.GuestCounter>
                        {this.state.totalGuestCount <
                        this.props.state.numberOfGuests ? (
                          <s.AddButtonEnabled
                            onClick={() => this.incrementGuests("Children")}
                          >
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonEnabled>
                        ) : (
                          <s.AddButtonDisabled>
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonDisabled>
                        )}
                      </s.AddSubtractGuests2>
                    </s.AddSubtractGuests>
                  </s.GuestsOptionContainer2>
                </s.GuestsOptionContainer>
                <s.GuestsOptionContainer>
                  <s.GuestsOptionContainer2>
                    <s.GuestsTextContainer>
                      <s.GuestsText>Infants</s.GuestsText>
                    </s.GuestsTextContainer>
                    <s.AddSubtractGuests>
                      <s.AddSubtractGuests2>
                        {this.state.Infants > 0 ? (
                          <s.SubtractButtonEnabled
                            onClick={() => this.decrementGuests("Infants")}
                          >
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonEnabled>
                        ) : (
                          <s.SubtractButtonDisabled>
                            <s.SubtractButtonSpan>
                              <s.SubtractButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28"></path>
                              </s.SubtractButtonSVG>
                            </s.SubtractButtonSpan>
                          </s.SubtractButtonDisabled>
                        )}
                        <s.GuestCounter>
                          <s.GuestCount>{this.state.Infants}</s.GuestCount>
                        </s.GuestCounter>
                        {this.state.Infants < 5 ? (
                          <s.AddButtonEnabled
                            onClick={() => this.incrementGuests("Infants")}
                          >
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonEnabled>
                        ) : (
                          <s.AddButtonDisabled>
                            <s.AddButtonSpan>
                              <s.AddButtonSVG
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="m2 16h28m-14-14v28"></path>
                              </s.AddButtonSVG>
                            </s.AddButtonSpan>
                          </s.AddButtonDisabled>
                        )}
                      </s.AddSubtractGuests2>
                    </s.AddSubtractGuests>
                  </s.GuestsOptionContainer2>
                </s.GuestsOptionContainer>
                <s.MaxGuests>
                  {this.props.state.numberOfGuests} guests maximum. Infants
                  don’t count toward the number of guests.
                </s.MaxGuests>
                <s.CloseButtonContainer
                  onClick={() => this.toggleGuestsPanel()}
                >
                  <s.CloseButton>Close</s.CloseButton>
                </s.CloseButtonContainer>
              </s.GuestsPickerPanelContainer>
            </s.GuestsContainer3>
          </s.GuestsContainer2>
        </s.GuestsContainer>
      );
    } else {
      guestsContainer = (
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
              <s.GuestsFunctionality onClick={() => this.toggleGuestsPanel()}>
                <s.TotalGuestsHeader>Guests</s.TotalGuestsHeader>
                <s.NumberOfGuestsContainer>
                  <s.NumberOfGuestsContainer2>
                    <s.NumberOfGuests>{NumberofGuestsDisplay}</s.NumberOfGuests>
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
      );
    }

    if (datesPanel) {
      datesContainer = (
        <s.CheckInCheckOutContainer onClick={() => this.toggleDatesPanel()}>
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
      );
    } else {
      datesContainer = (
        <s.CheckInCheckOutContainer onClick={() => this.toggleDatesPanel()}>
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
      );
    }

    if (datesPanel) {
      datesPopOut = (
        <s.DatesPopoutContainer>
          <s.SelectDatesContainer>
            <s.CheckInCheckOutSelection>
              <s.CheckInCheckOutSelection2>
                <s.CheckInSelection>
                  <s.CheckInSelectionLabel>
                    <s.CheckInSelectionText>Check-in</s.CheckInSelectionText>
                    <div dir={"ltr"}>
                      <s.CheckInDate>
                        <s.CheckInDateInput
                          placeholder={"Add date"}
                          type={"text"}
                          value={""}
                        ></s.CheckInDateInput>
                      </s.CheckInDate>
                    </div>
                  </s.CheckInSelectionLabel>
                </s.CheckInSelection>
                <s.CheckOutSelection></s.CheckOutSelection>
              </s.CheckInCheckOutSelection2>
            </s.CheckInCheckOutSelection>
            <s.SelectDatesHeader>
              <s.SelectDatesHeader2 style={{ paddingBottom: "0px" }}>
                <s.SelectDatesHeaderText>
                  <s.SelectDatesHeaderH2>Select Dates</s.SelectDatesHeaderH2>
                </s.SelectDatesHeaderText>
                <s.AddTravelDates>
                  <s.AddTravelDatesText>
                    Add your travel dates for exact pricing
                  </s.AddTravelDatesText>
                </s.AddTravelDates>
              </s.SelectDatesHeader2>
            </s.SelectDatesHeader>
          </s.SelectDatesContainer>
          <s.ActualCalendarContainer>
            <s.ActualCalendarContainer2>
              <s.ActualCalendarContainer3 style={{ minHeight: "361px" }}>
                <s.ActualCalendarContainer4 style={{ width: "661px" }}>
                  <s.ActualCalendarContainer5
                    style={{ width: "660px" }}
                  ></s.ActualCalendarContainer5>
                </s.ActualCalendarContainer4>
              </s.ActualCalendarContainer3>
              <s.ActualCalendarFooter></s.ActualCalendarFooter>
            </s.ActualCalendarContainer2>
          </s.ActualCalendarContainer>
        </s.DatesPopoutContainer>
      );
    } else {
      datesPopOut = "";
    }

    return (
      <div className={this.props.className}>
        <s.CalendarContainer2>
          <s.CalendarContainer3 style={{ borderRadius: "8px" }}>
            {datesContainer}
            {guestsContainer}
          </s.CalendarContainer3>
          <div>{datesPopOut}</div>
        </s.CalendarContainer2>
      </div>
    );
  }
}
