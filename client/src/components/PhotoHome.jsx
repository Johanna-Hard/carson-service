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
  padding-left:8px;
`

const StyledPhotoHomeOneThirdFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 33%;
  height: 100%;
  padding-left:8px;
`

const StyledPhotoHomeQuarterFlex = styled.div`
  display: block;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  padding-left:8px;
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
  padding-top:8px;
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
  height: 34px;
`

const StyledShowAllPhotos = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  margin: auto;
  text-align: center;
  font-size: 0.85em;
  padding: 0.25em 1em;
  border: 2px solid black;
  background-color: white;
`

class PhotoHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props.photos: ', this.props.photos);
    let photoHome;
    if (this.props.photos) {
      if (this.props.photos.length >= 5) {
        // 5 photos
        photoHome = (
          <StyledPhotoHomeContainerBlock>
            <StyledPhotoHomeContainerFlex>

              <StyledPhotoHomeHalfWidthBlock>
                <PhotoHomeElement url={this.props.photos[0].url} />
              </StyledPhotoHomeHalfWidthBlock>

              <StyledPhotoHomeQuarterFlex>
                <StyledPhotoHomeHalfHeightBlockTop>
                  <PhotoHomeElement url={this.props.photos[1].url} />
                </StyledPhotoHomeHalfHeightBlockTop>

                <StyledPhotoHomeHalfHeightBlockBottom>
                  <PhotoHomeElement url={this.props.photos[2].url} />
                </StyledPhotoHomeHalfHeightBlockBottom>

              </StyledPhotoHomeQuarterFlex>

              <StyledPhotoHomeQuarterFlex>

                <StyledPhotoHomeHalfHeightBlockTop>
                  <PhotoHomeElement url={this.props.photos[3].url} />
                </StyledPhotoHomeHalfHeightBlockTop>

                <StyledPhotoHomeHalfHeightBlockBottom>
                <PhotoHomeElement url={this.props.photos[4].url} />
                </StyledPhotoHomeHalfHeightBlockBottom>

              </StyledPhotoHomeQuarterFlex>

            </StyledPhotoHomeContainerFlex>

            <StyledShowAllPhotosContainerBlock onClick={this.props.changeGalleryDisplayMode}>
              <StyledShowAllPhotosContainerFlex >
                <StyledShowAllPhotos>
                  Show all photos
                </StyledShowAllPhotos>
              </StyledShowAllPhotosContainerFlex>
            </StyledShowAllPhotosContainerBlock>

          </StyledPhotoHomeContainerBlock>

        )
      } else if (this.props.photos.length >= 3) {
        // 3 photos
        photoHome = (
        <StyledPhotoHomeContainerBlock>

          <StyledPhotoHomeContainerFlex>

          <StyledPhotoHomeTwoThirdWidthBlock>
            <PhotoHomeElement url={this.props.photos[0].url} />
          </StyledPhotoHomeTwoThirdWidthBlock>

          <StyledPhotoHomeOneThirdFlex>
            <StyledPhotoHomeHalfHeightBlockTop>
              <PhotoHomeElement url={this.props.photos[1].url} />
            </StyledPhotoHomeHalfHeightBlockTop>

            <StyledPhotoHomeHalfHeightBlockBottom>
              <PhotoHomeElement url={this.props.photos[2].url} />
            </StyledPhotoHomeHalfHeightBlockBottom>
          </StyledPhotoHomeOneThirdFlex>

          </StyledPhotoHomeContainerFlex>

          <StyledShowAllPhotosContainerBlock onClick={this.props.changeGalleryDisplayMode}>
            <StyledShowAllPhotosContainerFlex>
              <StyledShowAllPhotos>
                    Show all photos
              </StyledShowAllPhotos>
            </StyledShowAllPhotosContainerFlex>
          </StyledShowAllPhotosContainerBlock>

        </StyledPhotoHomeContainerBlock>
        );
      } else if (this.props.photos.length >= 1) {
        // 1 photo
        photoHome = (
        <StyledPhotoHomeContainerBlock>

          <StyledPhotoHomeContainerFlex>
            <StyledPhotoHomeFullWidthBlock>
              <PhotoHomeElement url={this.props.photos[0].url}></PhotoHomeElement>
            </StyledPhotoHomeFullWidthBlock>
          </StyledPhotoHomeContainerFlex>

          <StyledShowAllPhotosContainerBlock onClick={this.props.changeGalleryDisplayMode}>
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