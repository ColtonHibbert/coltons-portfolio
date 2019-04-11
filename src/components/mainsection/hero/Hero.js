
import React from 'react';
import img from './Colton-Salt-Flats.jpg';
import './hero.css'; 


const Hero = (props) => {
    return (
        <div className="w-100 flex flex-column items-center bg-white bb b--moon-gray">
             <img src={img} alt="colton" className="hero-img pa2 mt3 br-100 ba b--moon-gray"/> 
             <h1 className="mb1 pb1">Colton Hibbert</h1>
             <h2 className="mt1 pt0">Full-Stack Web Developer</h2> 
             <h2>About</h2>
             <p className="ph4 ph5-ns ph6-m ph7-l">I'm a web-developer based out of Salt Lake City, Utah. My focus is on full-stack javascript. I like to lift heavy stuff and go on adventures with my beautiful wife. Most of my time, heart, and soul is spent programming. I have been developing full time for more than 1 year and interning for a telecommunications company since February 2019. I am also discovering machine learning on the side.</p>
        </div>
    );
}

export default Hero;