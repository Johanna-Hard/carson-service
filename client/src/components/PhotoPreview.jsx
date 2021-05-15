const React = require('react');
import styled from 'styled-components';

const StyledPhotoPreview = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
`

// need to render

class PhotoPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StyledPhotoPreview src={this.props.url}></StyledPhotoPreview>
    )
  }

}

export default PhotoPreview;