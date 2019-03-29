

import React from 'react';
import './projectcardleft.css';

const ProjectCardLeft= ({title,  description, builtwith, viewproject, images}) => {
    return (
        <div className="
        w-100 h-auto flex flex-column items-center mt2
        w-100-ns vh-50-ns flex-ns flex-row-ns items-center-ns 
        w-45-l vh-50-l flex-l flex-row-l mr2-l      
        ">
            <div className="
            w-100 h-75 flex flex-column items-center justify-around
            w-40-ns h-100-ns flex-ns flex-column-ns items-center-ns
            w-50-l h-100-l flex-l flex-column-l items-center-l
            bg-light-blue white">
                <div className="ma2">{title}</div>
                <div className="flex flex-column items-center ma0">Description:
                    <div className="tc ma0">{description}</div> 
                </div>
                <div className="flex flex-column items-center ma2">Built with:
                    <div className="tc ma0">{builtwith}</div>
                </div>
                <a className="f6 link dim br3 ph3 pv2 mb2 mt2 dib white bg-dark-blue" href={viewproject} target="blank">View Project</a>
            </div>
            <img
            src={images}
            alt="project"
            className="
            w-100 h-100 flex flex-column items-center
            w-60-ns h-auto-ns flex-ns items-center-ns
            w-50-l h-auto-l flex-l items-center-l
            bg-green br3"
            ></img>
                
            
        </div>
    );
}

export default ProjectCardLeft;