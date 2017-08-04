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

  render() {
    return (
      <div className="App">
        <header className="navbar navbar-inverse fixed-top bg-inverse">
          <h1 className="navbar-brand"><img src="./logo.svg" />Home Page</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/123">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/123">Page Two</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/123">Page Three</a>
                </li>
              </ul>
            </nav>
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3 pb-3">
              <TransactionList />
            </main>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
