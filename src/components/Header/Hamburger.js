
import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';



class Hamburger extends Component {
  render() {
    let styles={
      icon:{
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      }
    }
    return (
      <div>
        <IconButton style={styles.icon} iconStyle={styles.svg}>
          <MenuButton color='#fff' hoverColor='#004D40' />
        </IconButton>
      </div>
    );
  }
}



export default Hamburger;
