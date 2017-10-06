/**
 * Created by shahqaan on 06/10/2017.
 */

import React, { Component } from 'react';
import avatar from './avatar.svg';

class Post extends Component {

  render() {

    let likeButton = null;

    if (this.props.post.liked) {
      likeButton = <a href="#" className="btn btn-primary">Like</a>;
    } else {
      likeButton = <a href="#" className="btn btn-outline-primary">Liked</a>;
    }

    return (
      <div className="container">
        <div className="card" style={{width: '50rem', marginTop: '10px'}}>
          <div className="row">
            <div className="col-md-3">
              <img className="card-img-top" src={avatar} height="200" alt="Card image cap" />
            </div>
            <div className="col-md-9">

              <div className="card-block">
                <h4 className="card-title">{this.props.post.author}</h4>
                <p className="card-text">{this.props.post.message}</p>
                {likeButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

