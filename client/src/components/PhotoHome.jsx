const React = require('react');
const axios = require('axios');
import styled from 'styled-components';
import PhotoHomeElement from './PhotoHomeElement.jsx'

const StyledPhotoHomeContainerBlock = styled.div`
  display: block;
  width: 1432px;
  height: 664px;
  padding-left: 76px;
  padding-right: 76px;
  padding-top: 24px;
  margin: auto;
  position: relative;
  z-index: 2;
`

const StyledPhotoHomeContainerFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1280px;
  height: 640px;
  padding-left: 76px;
  padding-right: 76px;
  padding-top: 24px;
`

const StyledPhotoHomeFullWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const StyledPhotoHomeTwoThirdWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 67%;
  height: 100%;
`

const StyledPhotoHomeHalfWidthBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
`


const StyledPhotoHomeHalfFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding-left:10px;
`

const StyledPhotoHomeOneThirdFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  padding-left:10px;
`

const StyledPhotoHomeQuarterFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  padding-left:10px;
`

const StyledPhotoHomeHalfHeightBlockTop = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
`

const StyledPhotoHomeHalfHeightBlockBottom = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  padding-top:12px;
`

const StyledShowAllPhotosContainerBlock = styled.div`
  display: block;
  height: 34px;
  width: 155px;
  position: absolute;
  z-index: 3;
  bottom: 24px;
  right: 170px;
  background-color: #181a1b;
  border-color: #776e62;
  color: #e8e6e3;
`

const StyledShowAllPhotosContainerFlex = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
`

const StyledShowAllPhotos = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin: auto;
  text-align: center;
`

class PhotoHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null
    }
  }

  getPhotos(listingId) {
    return axios.get(`http://localhost:3003/photos/${this.props.listingId}`)
      .then(photos => {
        return photos.data;
      })
      .catch(err => console.log('err:', err)); // need to return err
  }

  componentDidMount() {
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
    let photoHome;

    if (this.state.photos) {
      if (this.state.photos.length >= 5) {
        // 5 photos
        photoHome = (
          <StyledPhotoHomeContainerBlock>
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

            <StyledShowAllPhotosContainerBlock>
              <StyledShowAllPhotosContainerFlex>
                <StyledShowAllPhotos>
                  Show all photos
                </StyledShowAllPhotos>
              </StyledShowAllPhotosContainerFlex>
            </StyledShowAllPhotosContainerBlock>

          </StyledPhotoHomeContainerBlock>

        )
      } else if (this.state.photos.length >= 3) {
        // 3 photos
        photoHome = (
        <StyledPhotoHomeContainerBlock>

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

          </StyledPhotoHomeContainerFlex>

          <StyledShowAllPhotosContainerBlock>
            <StyledShowAllPhotosContainerFlex>
              <StyledShowAllPhotos>
                    Show all photos
              </StyledShowAllPhotos>
            </StyledShowAllPhotosContainerFlex>
          </StyledShowAllPhotosContainerBlock>

        </StyledPhotoHomeContainerBlock>
        );
      } else if (this.state.photos.length >= 1) {
        // 1 photo
        photoHome = (
        <StyledPhotoHomeContainerBlock>

          <StyledPhotoHomeContainerFlex>
            <StyledPhotoHomeFullWidthBlock>
              <PhotoHomeElement url={this.state.photos[0].url}></PhotoHomeElement>
            </StyledPhotoHomeFullWidthBlock>
          </StyledPhotoHomeContainerFlex>

          <StyledShowAllPhotosContainerBlock>
            <StyledShowAllPhotosContainerFlex>
              <StyledShowAllPhotos>
                    Show all photos
              </StyledShowAllPhotos>
            </StyledShowAllPhotosContainerFlex>
          </StyledShowAllPhotosContainerBlock>

        </StyledPhotoHomeContainerBlock>
        );
      }
    }

    return (
      <div id='photos-home'>
        {photoHome}
      </div>
    )
  }
}

export default PhotoHome;