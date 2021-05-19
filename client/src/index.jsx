const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import styled from 'styled-components';
import PhotoHome from './components/PhotoHome.jsx'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: null
    }
  }

  componentDidMount() {
    if (!this.state.listingId) {
      this.setState({
        listingId: this.props.listingId
      })
    }
  }

  render() {
    return (
      <div id='photos-module'>
        <PhotoHome listingId={this.state.listingId}/>
      </div>
    )
  }
}

ReactDOM.render(<Photos listingId={12}/>, document.getElementById('Photos'));

// 3 templates: 5, 3, 1 photo(s)
// 5 photo widths: 50% 25% 25%
// 3 photo widths: up to 67% 33%
// 1 photo widths: 100%