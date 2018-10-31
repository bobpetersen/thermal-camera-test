import React, { Component } from "react";
import { connect } from react-redux;
import Nav from './Nav/Nav';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Search from './Search/Search';
import CaptureImage from './CaptureImage/CaptureImage';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Gallery />
        <Search />
        <CaptureImage />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Dashboard);