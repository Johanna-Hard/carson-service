import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    const WidgetWrapper = styled.section`
      border: 1px solid rgb(221, 221, 221);
      border-radius: 12px;
      padding: 24px;
      box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    `;

    return (
      <WidgetWrapper>
        <div className='widget'>In the widget</div>
      </WidgetWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));