import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }

  componentDidMount(){
    // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/happypeter/big-demo/master/posts/git-tips.md?v=${Math.random()}`
    axios.get(address).then((res) => {
      console.log(res);
      console.log(address);
      this.setState({
        rawContent: res.data
      });
    });
  }

  render(){
    return(
      <div>
        { this.props.params.title }
        { this.state.rawContent }
      </div>
    )
  }
}

export default Post;
