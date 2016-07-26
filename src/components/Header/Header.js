import React, { Component } from 'react';
import Hamburger from './Hamburger';

class Header extends Component {
  getStyles() {
     return {
       root: {
         backgroundColor: '#00bcd4',
         height: '200px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    return (
      <div style={styles.root}>
        <Hamburger />
      </div>
    );
  }
}

export default Header;
