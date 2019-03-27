

import React from 'react';
import './projectsmain.css';

const ProjectsMain = (props) => {
    return (
        <div id="projects" className="w-100 flex flex-column bg-light-blue pa3">
               <h2 className="
        w-100 flex justify-center
        pa0 ma0">Projects</h2>

            <div className="
            w-100 flex flex-column items-center 
            w-100-l flex-l flex-row-l flex-wrap-l justify-center-l
            bg-light-blue">

                {props.children}

            </div>
        </div> 
    );
}

export default ProjectsMain;