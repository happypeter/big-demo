import React, { Component } from 'react';

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
        header
      </div>
    );
  }
}

export default Header;
