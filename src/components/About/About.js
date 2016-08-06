import React, { PropTypes } from 'react';
import GithubAccount from './GithubAccount/GithubAccount';

class About extends React.Component {
  render () {
    return(
      <div>
        <h1>About</h1>
        <GithubAccount />
      </div>
    )
  }
}
export default About;
