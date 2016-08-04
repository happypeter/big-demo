import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import Repos from './Repos';
import github from './github';


class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    github.getGithubInfo('happypeter')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos
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
          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label="save" />
        </div>
      );
    }
    return(
      <div className='account'>
        <Card className="content">
          { GitHubInfo }
        </Card>
      </div>
    )
  }
}

export default GithubAccount;
