import React from "react";
import ReactDOM from "react-dom";
import * as s from "./styles/styles.jsx";

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestsPanelExpanded: false,
      changeDatesExpanded: false,
      adultsGuestCount: 1,
      childrenGuestCount: 0,
      infantsGuestCount: 0,
      totalGuestCount: 1,
    };

    this.toggleDatesPanel = this.toggleDatesPanel.bind(this);
    this.toggleGuestsPanel = this.toggleGuestsPanel.bind(this);
    this.incrementAdultGuests = this.incrementAdultGuests.bind(this);
    this.decrementAdultGuests = this.decrementAdultGuests.bind(this);
    this.incrementChildrenGuests = this.incrementChildrenGuests.bind(this);
    this.decrementChildrenGuests = this.decrementChildrenGuests.bind(this);
    this.incrementInfantGuests = this.incrementInfantGuests.bind(this);
    this.decrementInfantGuests = this.decrementInfantGuests.bind(this);
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

  incrementAdultGuests() {
    this.setState({
      adultsGuestCount: this.state.adultsGuestCount + 1,
      totalGuestCount: this.state.totalGuestCount + 1,
    });
  }

  decrementAdultGuests() {
    this.setState({
      adultsGuestCount: this.state.adultsGuestCount - 1,
      totalGuestCount: this.state.totalGuestCount - 1,
    });
  }

  incrementChildrenGuests() {
    this.setState({
      childrenGuestCount: this.state.childrenGuestCount + 1,
      totalGuestCount: this.state.totalGuestCount + 1,
    });
  }

  decrementChildrenGuests() {
    this.setState({
      childrenGuestCount: this.state.childrenGuestCount - 1,
      totalGuestCount: this.state.totalGuestCount - 1,
    });
  }

  incrementInfantGuests() {
    this.setState({
      infantsGuestCount: this.state.infantsGuestCount + 1,
      totalGuestCount: this.state.totalGuestCount + 1,
    });
  }

  decrementInfantGuests() {
    this.setState({
      infantsGuestCount: this.state.infantsGuestCount - 1,
      totalGuestCount: this.state.totalGuestCount - 1,
    });
  }

  render() {
    const datesPanel = this.state.changeDatesExpanded;
    const guestsPanel = this.state.guestsPanelExpanded;
    let datesContainer;
    let guestsContainer;

    if (datesPanel) {
      datesContainer = <div>yo dates</div>;
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
                    <s.NumberOfGuests>
                      {this.state.totalGuestCount > 1
                        ? `${this.state.totalGuestCount} guests`
                        : `${this.state.totalGuestCount} guest`}
                    </s.NumberOfGuests>
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
                <s.Adults>
                  <s.Adults2>
                    <s.AdultsTextContainer>
                      <s.AdultsText>Adults</s.AdultsText>
                    </s.AdultsTextContainer>
                    <s.AddSubtractGuests>
                      <s.AddSubtractGuests2>
                        {this.state.adultsGuestCount > 1 ? (
                          <s.SubtractButtonEnabled
                            onClick={() => this.decrementAdultGuests()}
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
                          <s.GuestCount>
                            {this.state.adultsGuestCount}
                          </s.GuestCount>
                        </s.GuestCounter>
                        <s.AddButtonEnabled
                          onClick={() => this.incrementAdultGuests()}
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
                      </s.AddSubtractGuests2>
                    </s.AddSubtractGuests>
                  </s.Adults2>
                </s.Adults>
                <s.MaxGuests></s.MaxGuests>
                <s.Close>closing up shop...</s.Close>
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
      );
    }

    return (
      <div className={this.props.className}>
        <s.CalendarContainer2>
          <s.CalendarContainer3 style={{ borderRadius: "8px" }}>
            {datesContainer}
            {guestsContainer}
          </s.CalendarContainer3>
        </s.CalendarContainer2>
      </div>
    );
  }
}
