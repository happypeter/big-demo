import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import AppLeftNav from './AppLeftNav'

class Header extends Component {
  _onLeftIconButtonTouchTap() {
    this.refs.LeftNav.handleToggle();
  }

  render(){
    return (
      <div>
        <AppLeftNav ref='LeftNav' />
        <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}/>
      </div>
    );
  }
}

export default Header;
