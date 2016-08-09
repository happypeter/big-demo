import React, { PropTypes } from 'react';
import GithubAccount from './GithubAccount/GithubAccount';
import Echart from './Echart';

class About extends React.Component {
  render () {
    return(
      <div>
        <GithubAccount />
        <Echart />
      </div>
    )
  }
}
export default About;
