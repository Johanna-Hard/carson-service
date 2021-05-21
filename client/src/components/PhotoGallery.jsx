const React = require('react');
const ReactDOM = require('react-dom');
import styled from 'styled-components';

const StyledGalleryModal = styled.div`
  display: ${props => props.activeGallery ? 'block' : 'none'};
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  margin: auto;
`

const StyledGalleryModalHeader = styled.div`
  display: flex;
  height: 40px;
`

const StyledGalleryModalBody1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 752px;
  height: 100%;
  padding-bottom: 24px;
  padding-top: 40px;
  margin: auto;
`

// 504px * 1.3, 1, 0.7
const StyledGalleryModalBlock = styled.div`
  display: block;
  width: 752px;
  height: ${props => props.height};
  padding-bottom: 8px;
`

const StyledGalleryModalHeaderCloseFlex = styled.div`
  top: 24px;
  display: block;
`

const StyledGalleryModalHeaderCloseButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`

const StyledPhotoGalleryElement = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
`

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photos = [];
    if (this.props.photos) {
      this.props.photos.forEach(function(photo) {
        photos.push(
          <StyledGalleryModalBlock height='504px'>
            <StyledPhotoGalleryElement src={photo.url}>
            </StyledPhotoGalleryElement>
          </StyledGalleryModalBlock>
        )
      })
    }

    return (
        <StyledGalleryModal activeGallery={this.props.activeGallery}>
          <StyledGalleryModalHeader>
            <StyledGalleryModalHeaderCloseFlex>
              <StyledGalleryModalHeaderCloseButton onClick={this.props.changeGalleryDisplayMode}>
                Close
              </StyledGalleryModalHeaderCloseButton>
            </StyledGalleryModalHeaderCloseFlex>
          </StyledGalleryModalHeader>
          <StyledGalleryModalBody1>
            {photos}
          </StyledGalleryModalBody1>
        </StyledGalleryModal>
    )
  }
}

export default PhotoGallery;