const React = require("react");
const ReactDOM = require("react-dom");
const axios = require("axios");
import styled from "styled-components";
import PhotoHome from "./components/PhotoHome.jsx";
import PhotoGallery from "./components/PhotoGallery.jsx";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: null,
      photos: null,
      activeGallery: false,
      activeSlideshow: false,
    };
  }

  getPhotos(listing_id) {
    return axios
      .get(`http://18.117.79.8:2004/photos/${listing_id}`)
      .then((photos) => {
        return photos.data;
      })
      .catch((err) => console.log("err:", err)); // need to return err
  }

  changeGalleryDisplayMode = () => {
    this.setState({
      activeGallery: !this.state.activeGallery,
    });
  };

  changeSlideshowDisplayMode = () => {
    this.setState({
      activeSlideshow: !this.state.activeSlideshow,
    });
  };

  componentDidMount() {
    const splitPath = window.location.pathname.split("/");
    const listingId = splitPath[splitPath.length - 1];
    console.log("photos componentDidMount");

    // if (!this.state.listing_id) {
    //   let listing_id = document
    //     .getElementById("item-page")
    //     .getAttribute("roomId");
    //   console.log("listing_id for photos", listing_id);
    // let photos;
    this.getPhotos(listingId)
      .then((photos) => {
        this.setState({
          listing_id: listingId,
          photos: photos,
        });
      })
      .catch((err) => console.log("err in getPhotos: ", err));
  }

  render() {
    let galleryDisplayMode =
      this.state.activeGallery === false ? "none" : "block";

    let slideshowDisplayModee =
      this.state.activeSlideshow === false ? "none" : "block";

    return (
      <div position="fixed" overflow="hidden" inset="0px">
        <div id="photos-module" className="module">
          <PhotoHome
            photos={this.state.photos ? this.state.photos.slice(0, 5) : null}
            changeGalleryDisplayMode={this.changeGalleryDisplayMode}
          />
        </div>
        <div id="photo-gallery">
          <PhotoGallery
            photos={this.state.photos}
            changeGalleryDisplayMode={this.changeGalleryDisplayMode}
            activeGallery={this.state.activeGallery}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Photos listing_id={20} />, document.getElementById("Photos"));
