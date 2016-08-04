import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Header from './components/Header/Header';
import Footer from './components/Footer';
import List from './components/List/List';
import GithubAccount from './components/GithubAccount/GithubAccount';


class App extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
      <div>
        <Header />
        <GithubAccount />
        <List />
        <Footer />
      </div>
    )
  }
}


App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<App/>,document.getElementById('app'));
