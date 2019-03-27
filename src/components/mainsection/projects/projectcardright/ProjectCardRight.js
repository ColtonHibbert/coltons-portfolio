
import React from 'react';
import './projectcardright.css';
const ProjectCardRight= ({ title, description, builtwith, viewproject, images}) => {
    return (
        <div className="
        w-100 vh-75 flex flex-column items-center mt2
        w-100-ns vh-50-ns flex-ns flex-row-ns items-center-ns 
        w-45-l vh-50-l flex-l flex-row-l ml2-l
         ">
            <img 
             src={images}
             className="
             w-100 h-100 flex flex-column items-center
             w-60-ns height-100-ns flex-ns items-center-ns
             w-50-l height-100-l flex-l items-center-l
             bg-green br3">
            </img>
            <div className="
             w-100 h-75 flex flex-column items-center justify-around
             w-40-ns h-100-ns flex-ns flex-column-ns items-center-ns
             w-50-l h-100-l flex-l flex-column-l items-center-l
             bg-light-blue white">
                <p className="ma2">{title}</p>
                <p className="flex flex-column items-center ma0">Description:
                    <p className="tc ma0">{description}</p> 
                </p>
                <p className="flex flex-column items-center ma2">Built with: 
                    <p className="tc ma0">{builtwith}</p>
                </p>
                <a className="f6 link dim br3 ph3 pv2 mb2 mt2 dib white bg-dark-blue" href={viewproject} target="blank">View Project</a>
            </div>
        </div>
    );
}

export default ProjectCardRight;