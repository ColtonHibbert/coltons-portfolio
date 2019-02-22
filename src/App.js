import React, { Component } from 'react';
import './App.css';
import Header from './components/headersection/header/Header.js';
import Hero from './components/mainsection/hero/Hero.js';
import ProjectsMain from './components/mainsection/projects/projectsmain/ProjectsMain.js';
import tachyons from 'tachyons';
import ProjectCardLeft from './components/mainsection/projects/projectcardleft/ProjectCardLeft';
import ProjectCardRight from './components/mainsection/projects/projectcardright/ProjectCardRight';




class App extends Component {
  render() {
    return (
      <div className="w-auto">
       <Header />
       <Hero />
       <ProjectsMain>
          <ProjectCardLeft />
          <ProjectCardRight />
       </ProjectsMain>
      </div>
    );
  }
}

export default App;
