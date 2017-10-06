import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './Posts';
import './App.css';

import getPosts from './Posts.Model';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: null};
  }

  componentDidMount() {
    getPosts().then(posts => this.setState({posts}));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Posts posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;
