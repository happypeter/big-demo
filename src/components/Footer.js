import React, { Component } from 'react';

class Footer extends Component {
  getStyles() {
     return {
       root: {
         backgroundColor: '#212121',
         height: '200px'
       }
     }
   }
  render(){
   const styles = this.getStyles();
    return (
      <div style={styles.root}>
        Footer
      </div>
    );
  }
}

export default Footer;
