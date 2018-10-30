import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import { connect } from 'react-redux';

class CaptureImage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CaptureImage);