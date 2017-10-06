/**
 * Created by shahqaan on 07/10/2017.
 */
import React, { Component } from 'react';
import Posts from './Posts';
import logo from './logo.svg';

const Loader = (Posts) => {
  return class Loader extends Component {
    render() {

      const loader = (
        <div className="container">
          <div className="row">
            <img src={logo} className="App-logo col-md-12 text-center"></img>
          </div>
        </div>
      );

      return this.props.posts.length === 0 ? loader : <Posts {...this.props} />;
    }
  }
};

export default Loader;
