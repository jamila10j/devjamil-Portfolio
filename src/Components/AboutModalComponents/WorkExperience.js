import React, { useState } from 'react';
import '../AboutModalComponents/WorkExperience.css';
import { ReactComponent as IWM } from '../../assets/WindowIcons/AboutWindow/iwm.svg';
import { ReactComponent as ReactSVG } from '../../assets/WindowIcons/AboutWindow/React.svg';
import { ReactComponent as Powershell } from '../../assets/WindowIcons/AboutWindow/PowerShell.svg';
import { ReactComponent as PHP } from '../../assets/WindowIcons/AboutWindow/PHP.svg';
import { ReactComponent as CollapsedCard } from '../../assets/WindowIcons/AboutWindow/CollapsedCard.svg';
import { ReactComponent as ExpandedCard } from '../../assets/WindowIcons/AboutWindow/ExpandedCard.svg';


const WorkExperience = () => {

    const [card1, setCard1] = useState(false);

    const collapseCard1 = () => {
        setCard1(false);
    }

    const expandCard1 = () => {
        setCard1(true);
    }

    return (
        <React.Fragment>
            <div className='workExperience'>
                <div className='row' id='row1'>

                    <div className='col-workEXP'>
                        <div className='stats' id='stat1'>
                            <h3>1</h3>
                            <p>professional project</p>
                        </div>
                    </div>
                    <div className='col-workEXP'>
                        <div className='stats' id='stat2'>
                            <h3>25,000+</h3>
                            <p>lines of code written</p>
                        </div>
                    </div>
                    <div className='col-workEXP'>
                        <div className='stats' id='stat3'>
                            <h3>2</h3>
                            <p>frameworks learned</p>
                        </div>
                    </div>
                     
                </div>

                <ul className='cards' id='workExpCardList'>

                    <li>
                        
                        <div className='row' id='row2'>
                            
                                <div className='exp-card' id='card1Work'>
                                    {card1 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={collapseCard1}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={expandCard1}/>}

                                    <div className='exp-name'>
                                        <h4>It's Worth More</h4>
                                        <h6>Tech Specialist/Software Developer</h6>
                                        <IWM />
                                    </div>

                                    <div id={card1 ? 'exp-card1Content-expanded' : 'exp-card1Content-collapsed'}>

                                        <div className='exp-card-InnerRow'>

                                            <div className='col-exp-list'>
                                                
                                                <h4 id='from'>From</h4>
                                                <p id='to'>Late 2021</p>
                                                
                                                <h4 id='from'>To</h4>
                                                <p id='to'>Current</p>
                                                
                                                        
                                            </div>

                                            <div className='col-exp-list'>

                                                <p>
                                                    Created and modified various applications essential for the business. Contributed to the development of Windows Powershell scripts for automation.
                                                    Wiped and restored operating systems on laptops, desktops, and tablets. Troubleshooted any software issues that arised.
                                                </p>

                                            </div>

                                        </div>

                                        <div className='skillsAttained'>
                                                
                                            <h3>Skills Attained</h3>
                                            <ul id='skills-list'>
                                                <li>React<ReactSVG height={'40px'} width={'40px'} /></li>
                                                <li>Windows Powershell<Powershell height={'40px'} width={'40px'} /></li>
                                                <li>PHP<PHP height={'40px'} width={'40px'} /></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>

                        </div>

                    </li>

                </ul>

                
            </div>
        </React.Fragment>
    )   
}

export default WorkExperience;