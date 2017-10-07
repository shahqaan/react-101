import React, { Component } from 'react';
import Posts from './Posts';
import Navbar from './Navbar';
import './App.css';

import getPosts from './Posts.Model';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    getPosts().then(posts => this.setState({posts}));
  }

  handleUpdate = (post) => {
    let likedPostIndex = this.state.posts.findIndex(p => p.id === post.id);
    this.state.posts[likedPostIndex].liked = true;
    this.setState({posts: this.state.posts});
  }


  render() {
    return (
      <div>
        <Navbar posts={this.state.posts} />
        <div className="container">
          <div className="row">
            <Posts posts={this.state.posts} handleUpdate={this.handleUpdate}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
