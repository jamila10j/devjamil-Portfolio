import React from 'react';
import '../AboutModalComponents/Overview.css';
import { ReactComponent as Development } from '../../assets/WindowIcons/AboutWindow/OverviewComponentIcons/Development.svg';
import { ReactComponent as Framework } from '../../assets/WindowIcons/AboutWindow/OverviewComponentIcons/Framework.svg';
import { ReactComponent as SoftwareDevelopment } from '../../assets/WindowIcons/AboutWindow/OverviewComponentIcons/SoftwareDevelopment.svg';
import Logo from '../../assets/Logo/logo.png';


const Overview = () => {
    return (
        <React.Fragment>
            <div className='overview'>

                <ul className='cards' id='overviewCards'>

                    <li>
                        <div className='row' id='row2'>
                            <div className='overview-card' id='card1Overview'>
                                
                                <p>Hello, my name is Jamil, and I'm a Software Developer.</p>
                                <img id='overview-img' src={Logo} />
                            
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='row' id='row2'>
                            <div className='overview-card' id='card2Overview'>
                                
                                <p>My passion for development began at a young age, and has become a life-long love.</p>
                                <Development id="overviewGraphic" height="100px" width="100px"/>
                            
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='row' id='row3'>
                            <div className='overview-card' id='card3Overview'>
                                
                                <p>
                                    As a someone who is dedicated to quality and success, software development has been a way for me to express ideas, and
                                    achieve my goals to build high quality applications and games.
                                </p>
                                <SoftwareDevelopment id="overviewGraphic" height="150px" width="150px"/>
                            
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='row' id='row3'>
                            <div className='overview-card' id='card4Overview'>
                                
                                <p>
                                    So far along my career, I've learned many languages, frameworks, and concepts of 
                                    computer science, and I'm eager to learn more in the future.
                                </p>
                                <Framework id="overviewGraphic" height="125px" width="125px"/>
                            
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </React.Fragment>
    )   
}

export default Overview;