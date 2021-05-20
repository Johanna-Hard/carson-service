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
`

const StyledGalleryModalHeader = styled.div`
  display: flex;
  height: 40px;
`

const StyledGalleryModalBody1 = styled.div`
  display: block;
  padding-bottom: 24px;
  padding-top: 40px;
  margin: auto;
`

const StyledGalleryModalBody2 = styled.div`
  display: block;
  max-width: 1128px;
  height: 100%;
  width: 100%;
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

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <StyledGalleryModalBody2>
              <div>
                <img src='https://a0.muscache.com/im/pictures/a5bde047-5dc9-444a-a6cd-1fd86943a991.jpg?im_w=1200'></img>
              </div>
            </StyledGalleryModalBody2>
          </StyledGalleryModalBody1>
        </StyledGalleryModal>
    )
  }
}

export default PhotoGallery;