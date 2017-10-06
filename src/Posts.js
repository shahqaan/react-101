/**
 * Created by shahqaan on 06/10/2017.
 */
import React, { Component } from 'react';
import './App.css';


class Posts extends Component {

  render() {

    if (!this.props.posts) return false;
    const posts = this.props.posts.map(post => <p>{post.author}: {post.message}</p>);
    return <div>{posts}</div>
    
  }
}

export default Posts;
