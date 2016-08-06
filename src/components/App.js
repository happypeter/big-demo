import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../style/main.css';


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Header from './Header/Header';
import Footer from './Footer';


export default class App extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
      <div>
        <Header />
          { this.props.children }
        <Footer />
      </div>
    )
  }
}


App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
