/**
 * Created by shahqaan on 06/10/2017.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {i: 0};
  }

  componentDidMount() {
    this.countInterval = setInterval(() => {


      this.setState({i: ++this.state.i});
      this.setState({i: ++this.state.i});
      this.setState({i: ++this.state.i});
      // Result of these 3 statements would be i == 1, not 3

      this.setState((prevState, props) => ({
        i: ++prevState.i
      }))
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countInterval);
  }

  clickListener() {

  }

  render() {
    return <h1>Hello, {this.props.name} for {this.state.i} times</h1>;
  }
}

const element = (
  <div>
    <Welcome name="James" />
    <Welcome name="Shahqaan" />
    <button onClick={this.clickListener}>Click me!</button>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));








const LoaderHigherOrderComponent = (MessagesComponent) => {
  return class LoaderHigherOrderComponent extends Component {
    render() {
      return this.props.messages.length === 0 ? <div className="loader"></div> : <MessagesComponent {...this.props} />;
    }
  }
};


@LoaderHigherOrderComponent('messages')
class MessagesComponent extends Component {
  render() {
    return <MessagesList />;
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

