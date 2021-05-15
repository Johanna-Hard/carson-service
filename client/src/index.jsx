const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import styled from 'styled-components';
import PhotoHomeElement from './components/PhotoHomeElement.jsx'

const StyledPhotoHomeContainerFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1280px;
  height: 640px;
  border-left: 76px;
  border-right: 76px;
  padding-top: 24px;
  background-color: red;
`

const StyledPhotoHomeFullWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: grey;
`

const StyledPhotoHomeTwoThirdWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 67%;
  height: 100%;
  background-color: grey;
`

const StyledPhotoHomeHalfWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  background-color: grey;
`


const StyledPhotoHomeHalfFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding-left:12px;
  background-color: grey;
`

const StyledPhotoHomeOneThirdFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  padding-left:12px;
  background-color: grey;
`

const StyledPhotoHomeQuarterFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  padding-left:12px;
  background-color: grey;
`

const StyledPhotoHomeHalfHeightBlockTop = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  background-color: blue;
`

const StyledPhotoHomeHalfHeightBlockBottom = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  background-color: green;
  padding-top:12px;
`

class Photos extends React.Component {
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

    let photoHome;

    if (this.state.photos) {
      if (this.state.photos.length >= 5) {
        // 5 photos
        photoHome = (
          <StyledPhotoHomeContainerFlex>

          <StyledPhotoHomeHalfWidthBlock>
            <PhotoHomeElement url={this.state.photos[0].url} />
          </StyledPhotoHomeHalfWidthBlock>

          <StyledPhotoHomeQuarterFlex>
            <StyledPhotoHomeHalfHeightBlockTop>
              <PhotoHomeElement url={this.state.photos[1].url} />
            </StyledPhotoHomeHalfHeightBlockTop>

            <StyledPhotoHomeHalfHeightBlockBottom>
              <PhotoHomeElement url={this.state.photos[2].url} />
            </StyledPhotoHomeHalfHeightBlockBottom>

          </StyledPhotoHomeQuarterFlex>

          <StyledPhotoHomeQuarterFlex>

            <StyledPhotoHomeHalfHeightBlockTop>
              <PhotoHomeElement url={this.state.photos[3].url} />
            </StyledPhotoHomeHalfHeightBlockTop>

            <StyledPhotoHomeHalfHeightBlockBottom>
            <PhotoHomeElement url={this.state.photos[4].url} />
            </StyledPhotoHomeHalfHeightBlockBottom>

          </StyledPhotoHomeQuarterFlex>
        </StyledPhotoHomeContainerFlex>
        )
      } else if (this.state.photos.length >= 3) {
        // 3 photos
        photoHome = (
        <StyledPhotoHomeContainerFlex>

          <StyledPhotoHomeTwoThirdWidthBlock>
            <PhotoHomeElement url={this.state.photos[0].url} />
          </StyledPhotoHomeTwoThirdWidthBlock>

          <StyledPhotoHomeOneThirdFlex>
            <StyledPhotoHomeHalfHeightBlockTop>
              <PhotoHomeElement url={this.state.photos[1].url} />
            </StyledPhotoHomeHalfHeightBlockTop>

            <StyledPhotoHomeHalfHeightBlockBottom>
              <PhotoHomeElement url={this.state.photos[2].url} />
            </StyledPhotoHomeHalfHeightBlockBottom>

          </StyledPhotoHomeOneThirdFlex>

      </StyledPhotoHomeContainerFlex>);
      } else if (this.state.photos.length >= 1) {
        // 1 photo
        photoHome = (
        <StyledPhotoHomeContainerFlex>
          <StyledPhotoHomeFullWidthBlock>
            <PhotoHomeElement url={this.state.photos[0].url}></PhotoHomeElement>
          </StyledPhotoHomeFullWidthBlock>
        </StyledPhotoHomeContainerFlex>);
      }
    }

    return (
      <div>
        {photoHome}
      </div>
    )
  }
}

ReactDOM.render(<Photos listingId={18}/>, document.getElementById('Photos'));

// 3 templates: 5, 3, 1 photo(s)
// 5 photo widths: 50% 25% 25%
// 3 photo widths: up to 67% 33%
// 1 photo widths: 100%