

import React from 'react';

const ProjectsMain = (props) => {
    return (
        <div className="w-100 flex flex-column">
               <h2 className="
        w-100 flex justify-center
        pa0 ma0">Projects</h2>

            <div className="
            w-100 flex flex-column items-center 
            w-100 flex-l flex-row-l justify-center
            bg-light-blue">

                {props.children}

            </div>
        </div> 
    );
}

export default ProjectsMain;