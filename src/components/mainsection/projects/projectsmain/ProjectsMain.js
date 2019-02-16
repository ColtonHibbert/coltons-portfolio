

import React from 'react';

const ProjectsMain = (props) => {
    return (
        <div className="w-100 flex justify-center bg-light-blue">
        <h2 className="pa0 ma0">Projects</h2>
            {props.children}
        </div>
    );
}

export default ProjectsMain;