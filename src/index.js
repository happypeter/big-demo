import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import List from './components/List.js';


class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
