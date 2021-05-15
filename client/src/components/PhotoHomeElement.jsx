const React = require('react');
import styled from 'styled-components';

const StyledPhotoHomeElement = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  width: 100%;
  height: 100%;
`

// need to render

class PhotoHomeElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StyledPhotoHomeElement src={this.props.url}></StyledPhotoHomeElement>
    )
  }

}

export default PhotoHomeElement;