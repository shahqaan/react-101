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


  render() {
    return (
      <div>
        <Navbar posts={this.state.posts} />
        <div className="container">
          <Posts posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;
