import React from 'react';
import '../AboutModalComponents/HobbiesInterests.css';
import { ReactComponent as AppDev } from '../../assets/WindowIcons/AboutWindow/HobbiesInterestsComponentIcons/AppDev.svg'
import { ReactComponent as Controller } from '../../assets/WindowIcons/AboutWindow/HobbiesInterestsComponentIcons/Controller.svg'
import { ReactComponent as VideoGames } from '../../assets/WindowIcons/AboutWindow/HobbiesInterestsComponentIcons/VideoGames.svg'
import { ReactComponent as Plane } from '../../assets/WindowIcons/AboutWindow/HobbiesInterestsComponentIcons/Plane.svg'
import { ReactComponent as Spotify } from '../../assets/WindowIcons/AboutWindow/HobbiesInterestsComponentIcons/Spotify.svg'


const HobbiesInterests = () => {
    return (
        <React.Fragment>
            <div className='HobbiesInterests'>
                <div className='hiRow' id='row1'>

                    <div className='col-hi'>
                        <div className='stats' id='hiStat1'>
                            <h2>Hobbies & Interests</h2>
                        </div>
                    </div>
                    
                     
                </div>

                <ul className='cards'>

                    <li>
                        
                        <div className='hiRow' id='row2'>
                            
                            <div className='hi-card' id='hiCard1'>
 
                                <div className='hi-name'>
                                    <h4>Application Development</h4>
                                </div>
                                
                                <div className='hi-content'>
                                    <p>I build applications in my free time to sharpen up my skills in the development space.</p>

                                    <AppDev className="hi-graphic" height={'100px'} width={'100px'} />
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='hiCard2'>
 
                                <div className='hi-name'>
                                    <h4>Game Development</h4>
                                </div>
                                
                                <div className='hi-content'>
                                   <p>
                                        I build video games with Unity in my free time.
                                        I design my own 3D models and animations in Blender, script in C#, and engineer all audio for my games.
                                   </p>      

                                    <p className='innerCardListName'>Currently in Development:</p>
                                    <ul className='innerCardList'>
                                        <li>Indie Horror Game: [[REDACTED]]</li>
                                    </ul>
                                    
                                    <Controller className="hi-graphic" height={'100px'} width={'100px'} />
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='hiCard2'>
 
                                <div className='hi-name'>
                                    <h4>Video games</h4>
                                </div>

                                <div className='hi-content'>
                                    <p>I enjoy playing video games whenever I can.</p>

                                    <p className='innerCardListName'>Fun Facts!</p>
                                    <ul className='innerCardList'>
                                        <li>I became a semi-professional Rainbow Six Siege player and competed in tournaments</li>
                                        <li>My biggest inspiration to create video games comes from Grand Theft Auto V</li>
                                    </ul>

                                    <VideoGames className="hi-graphic" height={'100px'} width={'100px'} />
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='hiCard3'>
 
                                <div className='hi-name'>
                                    <h4>Flight Simulation</h4>
                                </div>

                                <div className='hi-content'>
                                    <p>I play flight simulation games such as Microsoft Flight Simulator & X-Plane</p>

                                    <p className='innerCardListName'>Fun Facts!</p>
                                    <ul className='innerCardList'>
                                        <li>I can pilot a real commerical jet such as a Boeing 767 or an Airbus A320 based on years of experience with flight simulation</li>
                                        <li>I have over 1000 hours logged in the virtual sky</li>
                                    </ul>

                                    <Plane className="hi-graphic" height={'100px'} width={'100px'} />
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='hiCard3'>
 
                                <div className='hi-name'>
                                    <h4>Music</h4>
                                </div>

                                <div className='hi-content'>
                                    <p>I am an avid music listener.</p>

                                    <Spotify className="hi-graphic" height={'100px'} width={'100px'} />
                                </div>

                            </div>

                        </div>

                    </li>

                </ul>

                
            </div>
        </React.Fragment>
    )   
}

export default HobbiesInterests;