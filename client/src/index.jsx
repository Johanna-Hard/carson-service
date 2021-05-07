const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null
    }
  }

  getPhotos(listingId) {
    return axios.get(`http://localhost:3003/photos/${this.props.listingId}`)
      .then(photos => {
        console.log('photos: ', photos.data);
        return photos.data;
      })
      .catch(err => console.log('err:', err)); // need to return err
  }

  componentDidMount() {
    console.log('inside componentdidmount')
    let photos;
    this.getPhotos(this.props.listingId)
      .then(photos => {
        this.setState({
          photos
        });
      })
      .catch(err => console.log('err in getPhotos: ', err));
  }

  render() {
    console.log('state.photos: ', this.state.photos);
    return (
      <div>
        <h2>App</h2>
        <div className='photos-item-page'></div>
      </div>
    )
  }
}

ReactDOM.render(<App listingId={13}/>, document.getElementById('app'));