/**
 * Created by shahqaan on 06/10/2017.
 */
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

  render() {
    const posts = this.props.posts.map(post => {

      return <Post key={post.id} post={post}/>;

      // return (
      //   <div>
      //     <p key={post.id}>{post.author}: {post.message}</p>
      //   </div>
      // );
    });
    return <div>{posts}</div>
  }
}

export default Posts;
