import React, { Component } from 'react';
import map from 'lodash/map';

class Repos extends Component {
  render() {
    const repoList = map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <div>
            <p className='name'>{repo.name}</p>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    });

    return (
      <ul className="user-repos">
        { repoList }
      </ul>
    );
  }
}

export default Repos;
