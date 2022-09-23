import React, { useState } from 'react';
import '../AboutModalComponents/Education.css';
import { ReactComponent as Binary } from '../../assets/WindowIcons/AboutWindow/Binary.svg';
import { ReactComponent as UCF } from '../../assets/WindowIcons/AboutWindow/UCF.svg';
import { ReactComponent as IRSC } from '../../assets/WindowIcons/AboutWindow/IRSC.svg';
import { ReactComponent as Physics } from '../../assets/WindowIcons/AboutWindow/Physics.svg';
import { ReactComponent as Calculus } from '../../assets/WindowIcons/AboutWindow/Calculus.svg';
import { ReactComponent as CollapsedCard } from '../../assets/WindowIcons/AboutWindow/CollapsedCard.svg';
import { ReactComponent as ExpandedCard } from '../../assets/WindowIcons/AboutWindow/ExpandedCard.svg';

const Education = () => {
    
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);

    const collapseCard1 = () => {
        setCard1(false);
    }

    const expandCard1 = () => {
        setCard1(true);
    }

    const collapseCard2 = () => {
        setCard2(false);
    }

    const expandCard2 = () => {
        setCard2(true);
    }


    return (
        <React.Fragment>
            
            <div className='Education' id='education'>
                <div className='row' id='row1'>
                    <div className='col-edu'>
                        <div className='stats' id='stat1'>
                            <h3>Bachelor's Degree</h3>
                            <p>Currently Pursuing</p>
                        </div>
                    </div>
                    <div className='col-edu'>
                        <div className='stats' id='stat2'>
                            <h3>Associate's Dregree</h3>
                            <p>Current Education</p>
                        </div>
                    </div>
                     
                </div>

                <ul className='cards' id='eduCardList'>

                    <li>
                        
                        <div className='row' id='row2'>
                            
                                <div className='edu-card' id='card1Edu'>
                                    {card1 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={collapseCard1}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={expandCard1}/>}

                                    <div className='edu-name'>
                                        <h4>University of Central Florida</h4>
                                        <h6>Computer Engineering</h6>
                                        <UCF />
                                    </div>

                                    <div id={card1 ? 'edu-card1Content-expanded' : 'edu-card1Content-collapsed'}>

                                        <div className='edu-card-InnerRow'>

                                            <div className='col-edu-list'>
                                                
                                                <h4 id='from'>From</h4>
                                                <p id='to'>Mid 2021</p>
                                                
                                                <h4 id='from'>To</h4>
                                                <p id='to'>Current</p>
                                                
                                                        
                                            </div>

                                            <div className='col-edu-list'>

                                                <p>
                                                    Pursuing a Bachelor's Degree in Computer Engineering. Classes include Computer Science, Circuits, Operating Systems, & Computer Architecture.
                                                </p>

                                            </div>

                                        </div>

                                        <div className='critical-classes-taken'>
                                                
                                                <h3>Critical Classes Taken So Far</h3>
                                                <ul id='criticalClassesList'>
                                                    <li>Computer Science I <Binary height={'40px'} width={'40px'} /></li>
                                                </ul>


                                        </div>

                                    </div>
                                </div>

                        </div>

                    </li>


                    <li>
                        
                        <div className='row' id='row3'>
                            
                                <div className='edu-card' id='card2Edu'>
                                    {card2 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={collapseCard2}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={expandCard2}/>}

                                    <div className='edu-name'>
                                        <h4>Indian River State College</h4>
                                        <h6>Computer Engineering</h6>
                                        <IRSC />
                                    </div>

                                    <div id={card2 ? 'edu-card2Content-expanded' : 'edu-card2Content-collapsed'}>

                                        <div className='edu-card-InnerRow'>

                                            <div className='col-edu-list'>
                                                
                                                <h4 id='from'>From</h4>
                                                <p id='to'>Late 2017</p>
                                                
                                                <h4 id='from'>To</h4>
                                                <p id='to'>May 2020</p>
                                                
                                                        
                                            </div>

                                            <div className='col-edu-list'>

                                                <p>
                                                    Achieved an Associate's Degree. Classes include Physics I & II, and Calculus I, II, & III.
                                                </p>

                                            </div>

                                        </div>

                                        <div className='critical-classes-taken'>
                                                
                                                <h3>Critical Classes Taken</h3>
                                                <ul id='criticalClassesList'>
                                                    <li>Calculus <Calculus height={'40px'} width={'40px'} /></li>
                                                    <li>Physics <Physics height={'40px'} width={'40px'} /></li>
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

export default Education;