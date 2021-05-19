const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import styled from 'styled-components';
import PhotoHome from './components/PhotoHome.jsx'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: null,
      photos: null,
      view: 'photoHome'
    }
  }

  getPhotos(listing_id) {
    return axios.get(`http://localhost:2004/photos/${listing_id}`)
      .then(photos => {
        return photos.data;
      })
      .catch(err => console.log('err:', err)); // need to return err
  }

  componentDidMount() {
    if (!this.state.listing_id) {
      let photos;
      this.getPhotos(this.props.listing_id)
        .then(photos => {
          this.setState({
            listing_id: this.props.listing_id,
            photos
          });
        })
        .catch(err => console.log('err in getPhotos: ', err));
    }
  }

  render() {
    let photoComponent;

    if (this.state.view === 'photoHome') {
      photoComponent = (
        <PhotoHome photos={this.state.photos}/>
      )
    } else if (this.state.view === 'photoGallery') {
      photoComponent = (
        <div></div>
      )
    }

    return (
      <div id='photos-module'>
        {photoComponent}
      </div>
    )
  }
}

ReactDOM.render(<Photos listing_id={25}/>, document.getElementById('Photos'));

// 3 templates: 5, 3, 1 photo(s)
// 5 photo widths: 50% 25% 25%
// 3 photo widths: up to 67% 33%
// 1 photo widths: 100%