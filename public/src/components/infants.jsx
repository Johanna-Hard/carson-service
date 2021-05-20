{
  /* <s.GuestsOptionContainer>
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
        {this.state.Infants <= 5 ? (
          <s.AddButtonEnabled onClick={() => this.incrementGuests("Infants")}>
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
</s.GuestsOptionContainer>; */
}
