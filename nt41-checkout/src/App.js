import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Main from './components/Main.js'
import About from './components/About.js'
import './components/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
            <img src={logo} className="logo" alt="logo" />
	    </div>
	    <Main/>
	    <About/>
	    </div>
    );
  }
}

export default App;
