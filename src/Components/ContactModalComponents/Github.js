import React from 'react';
import '../ContactModalComponents/Github.css';
import { BsGithub } from 'react-icons/bs'

const Github = () => {

    const githubHome = () => {
        window.open("https://github.com/jamila10j", "_blank");
    }

    const githubPortfolio = () => {
        window.open("https://github.com/jamila10j/devjamil-Portfolio", "_blank");
    }

    const githubCS = () => {
        window.open("https://github.com/jamila10j?tab=repositories&q=&type=&language=c&sort=", "_blank");
    }

    return (
        <React.Fragment>
            <div className='Github'>
                
                <ul className='cards'>

                    <li>
                        
                        <div className='github-row' id='row1'>
                            
                            <div className='github-card' id='githubCard'>
 
                                <div className='github-name'>
                                    <h4>Github</h4>
                                    <BsGithub id='githubIcon'/>
                                </div>

                                <div className='github-external'>
                                    <h3>View my Github Pages</h3>
                                    <ul className='github-options'>
                                        <li>
                                            View my Github Homepage
                                            <BsGithub id='githubIcon' />
                                            <div className='arrow' onClick={githubHome} />
                                        </li>
                                        <li>
                                            View devJamil - Portfolio Source Code
                                            <BsGithub id='githubIcon' />
                                            <div className='arrow' onClick={githubPortfolio} />
                                        </li>
                                        <li>
                                            View my Computer Science Projects
                                            <BsGithub id='githubIcon' />
                                            <div className='arrow' onClick={githubCS} />
                                        </li>
                                     </ul>
                                </div>

                            </div>

                        </div>

                    </li>

                </ul>
    
            </div>
        </React.Fragment>
    )   
}

export default Github;