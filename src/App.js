import React, { Component } from 'react';
import './App.css';
import Header from './components/headersection/header/Header.js';
import Hero from './components/mainsection/hero/Hero.js';
import ProjectsMain from './components/mainsection/projects/projectsmain/ProjectsMain.js';
import tachyons from 'tachyons';
import ProjectCardLeft from './components/mainsection/projects/projectcardleft/ProjectCardLeft';
import ProjectCardRight from './components/mainsection/projects/projectcardright/ProjectCardRight';
import image1 from './SmartBrainSnapshot.PNG';
import image2 from './RobofriendsSnapshot.PNG';
import image3 from './RandomQuoteGeneratorSnapshot.PNG';
import image4 from './BackgroundGeneratorSnapshot.PNG';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ["Face Recognition App", "Robofriends", "Random Quote Generator", "Techinal Documentation Page"],
      description: ["stuff", "stuff", "stuff", "stuff"],
      builtwith: ["react and node.js", "react", "react", "html and css"],
      viewproject: ["link1", "link2", "link3", "link4"],
      images: [image1, image2, image3, image4]
    }

  }
  render() {
    
    return (
      <div className="w-auto">
       <Header />
       <Hero />
       <ProjectsMain> 
       {
          
          this.state.title.map((item,i) => {
           if (i % 2 === 0) {
             return(
             <ProjectCardLeft
             title={this.state.title[i]} 
             description={this.state.description[i]}
             builtwith={this.state.builtwith[i]}
             viewproject={this.state.viewproject[i]}
             images={this.state.images[i]}
             />
             )
             } else if (i % 2 !== 0) {
             return (
             <ProjectCardRight 
             title={this.state.title[i]}
             description={this.state.description[i]}
             builtwith={this.state.builtwith[i]}
             viewproject={this.state.viewproject[i]}
             images={this.state.images[i]}
             />
             )
           }
           
          })
        }
       </ProjectsMain>
      </div>
    )
  }
}

export default App;
