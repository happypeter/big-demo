import React, { Component } from 'react';
import {hashHistory} from 'react-router';

class BlogCard extends Component {
  handleClick(){
    hashHistory.push(`blog/${this.props.url}`);
  }
  render(){
    let styles={
      root:{
        width:'80%',
        height:'100px',
        margin:'10px auto',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
      },
      index:{
        float:'left',
        width:'80px',
        height:'100px',
        textAlign:'center',
        backgroundColor:'#00bcd4',
        color:'#fff',
        lineHeight:'100px'
      },
      content:{
        float:'left',
        color:'#777',
        paddingLeft:'10px'
      }
    }
    return(
      <div style={styles.root} onClick={this.handleClick.bind(this)}>
        <div style={styles.index}>{this.props.index}</div>
        <div style={styles.content}>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

BlogCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  date: React.PropTypes.string.isRequired,
};

BlogCard.defaultProps = {
  title: "请输入标题",
  index: 1,
  date: '2016.7.19',
};

export default BlogCard;
