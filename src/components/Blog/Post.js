import React, { Component } from 'react';


class Post extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  render(){
    return(
      <div>
        { this.props.params.title }
      </div>
    )
  }
}

export default Post;
