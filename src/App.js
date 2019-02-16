import React, { Component } from 'react';
import './App.css';
import Header from './components/headersection/header/Header.js';
import Hero from './components/mainsection/hero/Hero.js';

import tachyons from 'tachyons';


class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Hero />
      </div>
    );
  }
}

export default App;
