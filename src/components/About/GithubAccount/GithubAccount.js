import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';


class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: {},
      wait: true
    };
  }
  componentDidMount() {
    github.getGithubInfo('happypeter')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait: false
        });
      });
  }
  render(){
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }
    return(
      <div className='account'>
        <Card className="content">
          {this.state.wait ? <p>Reading Data from Github...</p> : ''}
          { GitHubInfo }
        </Card>
      </div>
    )
  }
}

export default GithubAccount;
