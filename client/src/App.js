import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TransactionList from './components/TransactionList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }

  renderItem(val) {
    return <Item value={val} loggedIn={this.state.loggedIn} />
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Logged in? - {this.state.loggedIn}. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.renderItem("Hello")}
        </ul>
        <TransactionList />
        <button onClick={() => this.setState({ loggedIn: true })} />
      </div>
    );
  }
}

class Item extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  flipState() {
    console.log(this.state);
    if (this.state.value === 'X') {
      this.setState({ value: 'X' });
    } else {
      this.setState({ value: 'Y' });      
    }
  }

  render() {
    return (
      <li onClick={() => this.flipState()}>{this.props.value} - {this.state.value}</li>
    )
  }
}

export default App;
