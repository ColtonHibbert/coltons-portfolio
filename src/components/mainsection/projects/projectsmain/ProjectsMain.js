

import React from 'react';
import './projectsmain.css';

const ProjectsMain = (props) => {
    return (
        <div id="projects" className="w-100 flex flex-column bg-light-blue ph3">
            <h2 className="w-100 flex justify-center pa0 pv3 ma0">Projects</h2>
            <div className="w-100 flex flex-column items-center bg-light-blue">
                {props.children}
            </div>
        </div> 
    );
}

export default ProjectsMain;