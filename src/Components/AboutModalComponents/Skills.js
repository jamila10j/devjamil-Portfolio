import React from 'react';
import { ReactComponent as Gear } from '../../assets/WindowIcons/AboutWindow/Gear.svg';
import '../AboutModalComponents/Skills.css';
import { ReactComponent as ReactSkill } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/ReactSkill.svg'
import { ReactComponent as Javascript } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Javascript.svg'
import { ReactComponent as CSS } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/CSS.svg'
import { ReactComponent as C } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/C.svg'
import { ReactComponent as CSharp } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/CSharp.svg'
import { ReactComponent as Algo } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Algo.svg'
import { ReactComponent as VSCode } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/VSCode.svg'
import { ReactComponent as Powershell } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/PowershellSkill.svg'
import { ReactComponent as ProbSolve } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/ProbSolve.svg'
import { ReactComponent as Adapt } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Adapt.svg'
import { ReactComponent as Collaborate } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Collaborate.svg'
import { ReactComponent as Leader } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Leader.svg'
import { ReactComponent as Create } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Create.svg'
import { ReactComponent as Decision } from '../../assets/WindowIcons/AboutWindow/SkillsComponentIcons/Decision.svg'

const Skills = () => {
    return (
        <React.Fragment>
            <div className='Skills'>
                <div className='skillRow' id='row1'>

                    <div className='col-skill'>
                        <div className='stats' id='skillStat1'>
                            <Gear id='skillGear'/>
                            <h2>Skills</h2>
                        </div>
                    </div>
                    
                     
                </div>

                <ul className='cards'>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='skillCard1'>
 
                                <div className='skill-name'>
                                    <h4>Technical</h4>
                                </div>

                                <ul className='skill-list' id='technicalSkills'>

                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='reactBar' />
                                        </div>
                                        <p>80%</p>
                                        React
                                        <ReactSkill className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='javascriptBar'></div>
                                        </div>
                                        <p>85%</p>
                                        Javascript
                                        <Javascript className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='cssBar'></div>
                                        </div>
                                        <p>65%</p>
                                        CSS
                                        <CSS className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='cBar'></div>
                                        </div>
                                        <p>85%</p>
                                        C
                                        <C className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='csharpBar'></div>
                                        </div>
                                        <p>70%</p>
                                        C#
                                        <CSharp className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='sortingAlgoBar'></div>
                                        </div>
                                        <p>70%</p>
                                        Sorting Algoritms
                                        <Algo className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='vsBar'></div>
                                        </div>
                                        <p>85%</p>
                                        Visual Studio
                                        <VSCode className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='powershellBar'></div>
                                        </div>
                                        <p>50%</p>
                                        Powershell
                                        <Powershell className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='skillRow' id='row2'>
                            
                            <div className='skill-card' id='skillCard2'>
 
                                <div className='skill-name'>
                                    <h4>Interpersonal</h4>
                                </div>

                                <ul className='skill-list' id='interpersonalSkills'>

                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='probSolveBar'></div>
                                        </div>
                                        <p>95%</p>
                                        Problem Solving
                                        <ProbSolve className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='adaptBar'></div>
                                        </div>
                                        <p>85%</p>
                                        Adaptability
                                        <Adapt className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='collabBar'></div>
                                        </div>
                                        <p>85%</p>
                                        Collaboration
                                        <Collaborate className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='leadershipBar'></div>
                                        </div>
                                        <p>95%</p>
                                        Leadership
                                        <Leader className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='createBar'></div>
                                        </div>
                                        <p>80%</p>
                                        Creativity
                                        <Create className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>
                                    <li>
                                        <div className='bar-container'>
                                            <div className='skill-bar' id='decisionBar'></div>
                                        </div>
                                        <p>85%</p>
                                        Decision Making
                                        <Decision className="skill-graphic" height={'40px'} width={'40px'}/>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </li>

                </ul>

                
            </div>
        </React.Fragment>
    )   
}

export default Skills;