import React, { Component } from 'react';
import map from 'lodash/fp/map';


import BlogCard from './BlogCard.js';

let blogs = [
  {index: '1', title:'这是第一天', date:'2016.7.19'},
  {index: '2', title:'这是第二天', date:'2016.7.21'},
  {index: '3', title:'这是第三天', date:'2016.7.22'}
]


class List extends Component {
  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                  );
                },
        blogs
    );
    // console.log(AllCards);
    return(
      <div>
        <h1>Blog</h1>
        {blogCards}
      </div>
    )
  }
}

export default List;
