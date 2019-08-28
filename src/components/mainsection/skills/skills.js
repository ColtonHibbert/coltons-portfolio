
import React from 'react';
const Skills = ({frontEndImage, frontEndText, backEndImage, backEndText}) => {
//console.log(this)   
    let arr = [{}];
    return ( 
        <div id="skills" className="bg-light-blue pv3">
            <h2 className="tc ma0 pt4">Skills</h2>
            <div 
                className="
                w-100 flex flex-column
                flex-ns flex-column-ns
                flex-m flex-column-m
                flex-l flex-row-l justify-center"
            >
                    <div className="w-100 flex flex-column items-center items-end-l">
                        <h2 className="w-100 w-40-l flex flex-row justify-center ma3">Front End</h2>
                    {   frontEndImage.map((item, i) => {                   
                            return(
                            <div className="w-100 w-40-l flex flex-row ma1" key={frontEndText[i]}>
                                <div className="w-100 flex flex-column items-end">
                                {  arr.map((item, j) => {
                                    if(frontEndImage[i] !== "empty") {
                                   return(                                                                                                       
                                        <div key={frontEndText[i]}>                    
                                            <div className="w3 h3 bg-white br2 pa1 pr1">{frontEndImage[i]}</div>                                                                        
                                        </div> 
                                   )
                                   } else {
                                       return(
                                           <div className="w3 h3 bg-light-blue br2 pa1 pr1" key={frontEndText[i]}></div>
                                       )
                                   }
                                    })                                                    
                                }                                                                  
                                </div>
                                <div className="w-100 flex flex-column items-start justify-center white pl1">
                                    <div className="f5">{frontEndText[i]}</div>
                                </div>
                            </div>
                            )
                        })   
                    } 
                    </div>
                    <div className="w-100 flex flex-column items-center items-start-l">
                        <h2 className="w-100 w-40-l flex flex-row justify-center ma3">Back End</h2>
                    {   backEndText.map((item, i) => {
                            return(
                            <div className="w-100 w-40-l flex flex-row ma1" key={backEndText[i]}>
                                <div className="w-100 flex flex-column items-end">
                               { arr.map((item, j) => {
                                    if(backEndImage[i] !== "empty") {
                                   return(                                                                                                       
                                        <div key={backEndText[i]}>                                             
                                            <div className="w3 h3 bg-white br2 pa1 pr1">{backEndImage[i]}</div>                                                                        
                                        </div> 
                                   )
                                   } else {
                                       return(
                                           <div className="w3 h3 bg-light-blue br2 pa1 pr1" key={backEndText[i]}></div>
                                       )
                                   }
                                    })                                                    
                                }        
                                </div>
                                <div className="w-100 flex flex-column items-start justify-center white pl1">
                                    <div className="f5">{backEndText[i]}</div>
                                </div>
                            </div>
                            )
                        })   
                    } 
                    </div>
            </div>
        </div>
    );
}

export default Skills;