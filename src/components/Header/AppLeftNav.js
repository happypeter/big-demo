import Drawer from 'material-ui/Drawer';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class AppLeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    let styles={
      menu:{
        textAlign:'center'
      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
      }
    }
    return (
      <div>
        <Drawer
          docked={false}
          width={260}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div style={styles.menu}>
            <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>Happypeter{this.state.title}</p>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" style={styles.link} activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="blog" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AppLeftNav;
