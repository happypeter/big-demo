import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';

import BlogCard from './BlogCard.js';

class Blog extends Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }

  componentDidMount(){
    let address = `https://raw.githubusercontent.com/happypeter/big-demo/master/posts/index.json`
    axios.get(address).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      });
    });
  }

  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.created_at } index={b.id} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default Blog;
