const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import styled from 'styled-components';
import PhotoPreview from './components/PhotoPreview.jsx'

const StyledPhotosHomeContainerFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1280px;
  height: 640px;
  border-left: 76px;
  border-right: 76px;
  padding-top: 24px;
  background-color: red;
`

const StyledPhotosHomeHalfWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  background-color: grey;
`

const StyledPhotosHomeQuarterFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  padding-left:12px;
  background-color: grey;
`

const StyledPhotosHomeHalfHeightBlockTop = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  background-color: blue;
`

const StyledPhotosHomeHalfHeightBlockBottom = styled.div`
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
    return (
      <StyledPhotosHomeContainerFlex>

        <StyledPhotosHomeHalfWidthBlock>
          <PhotoPreview url={'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'} />
        </StyledPhotosHomeHalfWidthBlock>

        <StyledPhotosHomeQuarterFlex>
          <StyledPhotosHomeHalfHeightBlockTop>
            <PhotoPreview url={'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'} />
          </StyledPhotosHomeHalfHeightBlockTop>

          <StyledPhotosHomeHalfHeightBlockBottom>
            <PhotoPreview url={'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'} />
          </StyledPhotosHomeHalfHeightBlockBottom>

        </StyledPhotosHomeQuarterFlex>

        <StyledPhotosHomeQuarterFlex>

          <StyledPhotosHomeHalfHeightBlockTop>
            <PhotoPreview url={'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'} />
          </StyledPhotosHomeHalfHeightBlockTop>

          <StyledPhotosHomeHalfHeightBlockBottom>
          <PhotoPreview url={'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'} />
          </StyledPhotosHomeHalfHeightBlockBottom>

        </StyledPhotosHomeQuarterFlex>
      </StyledPhotosHomeContainerFlex>
    )
  }
}

ReactDOM.render(<Photos listingId={13}/>, document.getElementById('Photos'));