
import React from 'react';

const ProjectCardRight= (props) => {
    return (
        <div className="
        w-90 vh-50 flex flex-column items-center
        w-90-ns vh-50-ns flex-ns flex-row-ns items-center-ns 
        w-50-l vh-50-l flex-l flex-row-l 
         ma2 ">
            <div className="
             w-100 h-100 flex flex-column 
             w-60-ns height-100-ns flex-ns
             w-60-l height-100-l flex-l
             bg-green br3">
                img stuff
            </div>
            <div className="
             w-100 h5 flex flex-column    
             w-40-ns h-100-ns flex-ns flex-column-ns 
             w-40-l h-100-l flex-l flex-column-l
             bg-white">
                text
            </div>
        </div>
    );
}

export default ProjectCardRight;