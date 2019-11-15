

import React from 'react';
import './projectcardleft.css';

const ProjectCardLeft= ({title,  description, builtWith, viewProject, images , viewSourceCode }) => {
    return (
        <div 
            className="
            w-100 h-auto flex flex-column items-center mt2 ba b--white br2 pa2
            w-100-ns h-auto-ns flex-ns flex-column-ns items-center-ns
            w-70-l vh-50-l flex-l flex-row-l mh2"    
        >
            <div 
                className="
                w-100 h-75 flex flex-column items-center justify-around pa1
                w-100-ns h-100-ns flex-ns flex-column-ns items-center-ns pa2-ns
                pa2-m
                w-50-l h-100-l flex-l flex-column-l items-center-l pa2-l
                bg-light-blue white"
            >
                <div className="ma2 f4">{title}</div>
                <div className="flex flex-column items-center ma0 f4">Description:
                    <div className="tc ma0 f5">{description}</div> 
                </div>
                <div className="flex flex-column items-center ma0 f4">Built with:
                    <div className="tc ma0 f4 bg-white dark-blue br1">{builtWith}</div>
                </div>
                <div className="flex flex-column items-center"> 
                    <a className="w4 tc f6 link dim br3 ph3 pv2 mb2 mt1 dib white bg-dark-blue" href={viewSourceCode} target="blank">Source Code</a>
                    <a className="w4 tc f6 link dim br3 ph3 pv2 mb2 mt1 dib white bg-dark-blue" href={viewProject} target="blank">View Project</a>
                </div>
            </div>
            <img
                src={images}
                alt="project"
                className="
                w-100 h-100 flex flex-column items-center
                w-100-ns h-auto-ns flex-ns items-center-ns
                w-50-l h-auto-l flex-l items-center-l
                br4"
            >
            </img>  
        </div>
    );
}

export default ProjectCardLeft;
// use if in progress another project line , replace line 30 with the below 
//{
//    title === "Jills Office Signup" ? <div className="tc f5">Repository is private, message me for a code snippit.</div> :
//    <a className="w4 tc f6 link dim br3 ph3 pv2 mb2 mt1 dib white bg-dark-blue" href={viewSourceCode} target="blank">Source Code</a>
// }