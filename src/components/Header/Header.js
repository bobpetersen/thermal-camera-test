import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="GridHeader">
        <h1 className="Title">Thermal Camera</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);