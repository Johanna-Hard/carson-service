const React = require('react');
import styled from 'styled-components';

const StyledPhotoPreviewWide = styled.img`
  max-height: 100%;
`

const StyledPhotoPreviewTall = styled.img`
  max-width: 100%;
`

// need to render

class PhotoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoType: 'wide'
    }
  }

  componentDidMount() {
    if (this.props.photoType === 'tall') {
      this.setState({
        photoType: 'tall'
      })
    }
  }

  render() {
    return(
      this.state.photoType === 'wide' ? <StyledPhotoPreviewWide src={this.props.url}></StyledPhotoPreviewWide>
        : <StyledPhotoPreviewTall src={this.props.url}></StyledPhotoPreviewTall>
    )
  }

}

export default PhotoPreview;