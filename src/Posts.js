/**
 * Created by shahqaan on 06/10/2017.
 */
import React, { Component } from 'react';
import Post from './Post';
import Loader from './Loader';

class Posts extends Component {

  render() {
    const posts = this.props.posts.map(post => {

      return <Post key={post.id} post={post} handleLike={this.props.handleUpdate} />;

      // return (
      //   <div>
      //     <p key={post.id}>{post.author}: {post.message}</p>
      //   </div>
      // );
    });
    return (
      <div className="container">
        <div className="row">
          <div>{posts}</div>
        </div>
      </div>

    );
  }
}

export default Loader(Posts);
