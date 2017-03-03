import React, { Component } from 'react';
import map from 'lodash/fp/map';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';

import BlogCard from './BlogCard.js';

class Blog extends Component {
  constructor(){
    super();
    this.state={
      posts: '',
      wait: true
    }
  }

  componentDidMount(){
    // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/happypeter/big-demo/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        posts: res.data,
        wait: false
      });
    });
  }

  render(){
    let styles={
      circle:{
        textAlign:'center',
        margin:'30px auto'
      }
    };
    var blogCards = [];
    map((b) =>  {
        blogCards.push(
          <BlogCard title={b.title} date={b.created_at } index={b.id} url={b.name} key={Math.random()}/>
        );
      },
      this.state.posts
    );
    return(
      <div>
        {this.state.wait ? <div style={styles.circle}><CircularProgress size={60} /></div> : ''}
        {blogCards}
      </div>
    )
  }
}

export default Blog;
