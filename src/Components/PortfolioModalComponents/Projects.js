import React, { useState } from 'react';
import '../PortfolioModalComponents/Projects.css';
import { BsGithub } from 'react-icons/bs'
import { ReactComponent as CollapsedCard } from '../../assets/WindowIcons/PortfolioWindow/CollapsedCard.svg';
import { ReactComponent as ExpandedCard } from '../../assets/WindowIcons/PortfolioWindow/ExpandedCard.svg';
import hardware from '../../assets/WindowIcons/PortfolioWindow/diagnostic.png';
import { ReactComponent as ReactSVG } from '../../assets/WindowIcons/PortfolioWindow/React.svg';
import { ReactComponent as Smoothie } from '../../assets/WindowIcons/PortfolioWindow/Smoothie.svg';
import { ReactComponent as C } from '../../assets/WindowIcons/PortfolioWindow/C.svg';
import { ReactComponent as Ticket } from '../../assets/WindowIcons/PortfolioWindow/Ticket.svg';
import { ReactComponent as MaterialUI } from '../../assets/WindowIcons/PortfolioWindow/MaterialUI.svg';
import { ReactComponent as Electron } from '../../assets/WindowIcons/PortfolioWindow/Electron.svg';
import { ReactComponent as Link } from '../../assets/WindowIcons/PortfolioWindow/Link.svg';
import { ReactComponent as SmartChoiceBank } from '../../assets/WindowIcons/PortfolioWindow/SmartChoiceBank.svg';
import { ReactComponent as CSharp } from '../../assets/WindowIcons/PortfolioWindow/CSharp.svg';
import { ReactComponent as SQL } from '../../assets/WindowIcons/PortfolioWindow/SQL.svg';
import Logo from '../../assets/Logo/logo.png';

const Projects = (props) => {
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    const [card4, setCard4] = useState(false);
    const [card5, setCard5] = useState(false);


    const expandCard = (cardNum) => {
        switch (cardNum)
        {
            case 1:
                setCard1(true);
                break;
            case 2:
                setCard2(true);
                break;
            case 3:
                setCard3(true);
                break;
            case 4:
                setCard4(true);
                break;
            case 5:
                setCard5(true);
                break;
            default:
                return;
        }
    }

    const collapseCard = (cardNum) => {
        switch (cardNum)
        {
            case 1:
                setCard1(false);
                break;
            case 2:
                setCard2(false);
                break;
            case 3:
                setCard3(false);
                break;
            case 4:
                setCard4(false);
                break;
            case 5:
                setCard5(false);
                break;
            default:
                return;
        }
    }

    const githubExt = () => {
        window.open("https://github.com/jamila10j/devjamil-Portfolio", "_blank");
    }

    const githubSmoothie = () => {
        window.open("https://github.com/jamila10j/SmoothieShopSearchSort", "_blank");
    }

    const githubTicket = () => {
        window.open("https://github.com/jamila10j/TicketingLine", "_blank");
    }

    const githubBank = () => {
        window.open("https://github.com/jamila10j/SmartchoiceBank", "_blank");
    }

    const requestWorkExp = () => {
        props.Requester('About', 1);
    }

    return (
        <React.Fragment>
            <div className='Projects'>
                <div className='project-row' id='row1'>

                    <div className='project-col'>
                        <div className='stats' id='projectStat1'>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    
                     
                </div>

                <ul className='cards' id='projectCardList'>

                    <li>
                        
                        <div className='project-row' id='row2'>
                            
                            <div className='project-card' id='projectCard1'>
                                {card1 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => collapseCard(1)}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => expandCard(1)}/>}
 
                                <div className='project-name'>
                                    <h4>devJamil - Portfolio</h4>
                                    <img id="projimg" src={Logo} />
                                </div>

                                <div id={card1 ? 'proj-card1Content-expanded' : 'proj-card1Content-collapsed'}>

                                        <div className='proj-card-InnerRow'>

                                            <div className='col-proj-list'>                                
                                                <h4 id='from'>Release</h4>
                                                <p id='to'>Late 2022</p>                                    
                                            </div>

                                            <div className='col-proj-list'>

                                                <p>
                                                    Inspired by macOS, my devJamil - Portfolio project was built from the ground up to showcase my skills with the React front-end 
                                                    library in a desktop style user interface.
                                                </p>

                                            </div>

                                        </div>

                                        <div className='techStack'>          
                                            <h3>Tech Stack</h3>
                                            <ul id='techStack-list'>
                                                <li>React <ReactSVG height={'40px'} width={'40px'} /></li>
                                            </ul>
                                        </div>

                                        <div className='view-external'>          
                                            <h3>Ways to View</h3>
                                            <ul id='view-list'>
                                                <li>
                                                    View Source Code on Github 
                                                    <BsGithub id='githubIcon' />
                                                    <div className='arrow' onClick={githubExt} />
                                                </li>
                                            </ul>
                                        </div>

                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='project-row' id='row2'>
                            
                            <div className='project-card' id='projectCard2'>
                                {card2 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => collapseCard(2)}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => expandCard(2)}/>}
 
                                <div className='project-name'>
                                    <h4>Smoothie Shop Search & Sort</h4>
                                    <Smoothie id='smoothie' height="50px" width="50px" />
                                </div>

                                <div id={card2 ? 'proj-card1Content-expanded' : 'proj-card1Content-collapsed'}>

                                        <div className='proj-card-InnerRow'>

                                            <div className='col-proj-list'>                                
                                                <h4 id='from'>Completed</h4>
                                                <p id='to'>Mid 2022</p>                                    
                                            </div>

                                            <div className='col-proj-list'>

                                                <p>
                                                    Using computer science concepts, this C program scans in coordinates of smoothies shops from a file, sorts & ranks them based on 
                                                    distance from the user, and allows users to search for stores using coordinates. 
                                                </p>

                                            </div>

                                        </div>

                                        <div className='techStack'>          
                                            <h3>Tech Stack</h3>
                                            <ul id='techStack-list'>
                                                <li>C <C height={'40px'} width={'40px'} /></li>
                                            </ul>
                                        </div>

                                        <div className='view-external'>          
                                            <h3>Ways to View</h3>
                                            <ul id='view-list'>
                                                <li>
                                                    View Source Code on Github 
                                                    <BsGithub id='githubIcon' />
                                                    <div className='arrow' onClick={githubSmoothie} />
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='project-row' id='row2'>
                            
                            <div className='project-card' id='projectCard3'>
                                {card3 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => collapseCard(3)}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => expandCard(3)}/>}
 
                                <div className='project-name'>
                                    <h4>Ticketing Line</h4>
                                    <Ticket height="50px" width="50px" />
                                </div>

                                <div id={card3 ? 'proj-card1Content-expanded' : 'proj-card1Content-collapsed'}>

                                        <div className='proj-card-InnerRow'>

                                            <div className='col-proj-list'>                                
                                                <h4 id='from'>Completed</h4>
                                                <p id='to'>Mid 2022</p>                                    
                                            </div>

                                            <div className='col-proj-list'>

                                                <p>
                                                    Using computer science data structures such as queues & stacks, this C program simulates a ticketing line by scanning in information
                                                    about customers from a file, and implements a queue with that information.
                                                </p>

                                            </div>

                                        </div>

                                        <div className='techStack'>          
                                            <h3>Tech Stack</h3>
                                            <ul id='techStack-list'>
                                                <li>C <C height={'40px'} width={'40px'} /></li>
                                            </ul>
                                        </div>

                                        <div className='view-external'>          
                                            <h3>Ways to View</h3>
                                            <ul id='view-list'>
                                                <li>
                                                    View Source Code on Github 
                                                    <BsGithub id='githubIcon' />
                                                    <div className='arrow' onClick={githubTicket} />
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='project-row' id='row3'>
                            
                            <div className='project-card' id='projectCard4'>
                                    {card4 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => collapseCard(4)}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => expandCard(4)}/>}
    
                                    <div className='project-name'>
                                        <h4>It'sWorthMore Hardware Diagnostic</h4>
                                        <img id="projimg" src={hardware} height="50px" width="50px" />
                                    </div>

                                    <div id={card4 ? 'proj-card1Content-expanded' : 'proj-card1Content-collapsed'}>

                                            <div className='proj-card-InnerRow'>

                                                <div className='col-proj-list'>                                
                                                    <h4 id='from'>Revised</h4>
                                                    <p id='to'>Early 2022</p>                                    
                                                </div>

                                                <div className='col-proj-list'>

                                                    <p>
                                                        Developed for It's Worth More, LLC. This desktop application detects all interal computer hardware
                                                        and allows users to test various components such as microphones, cameras, and bluetooth, to ensure 
                                                        proper functionality. 
                                                    </p>

                                                </div>

                                            </div>

                                            <div className='techStack'>          
                                                <h3>Tech Stack</h3>
                                                <ul id='techStack-list'>
                                                    <li>React <ReactSVG height={'40px'} width={'40px'} /></li>
                                                    <li>MaterialUI <MaterialUI height={'40px'} width={'40px'} /></li>
                                                    <li>Electron <Electron height={'40px'} width={'40px'} /></li>
                                                </ul>
                                            </div>

                                            <div className='view-external'>          
                                                <h3>Ways to View</h3>
                                                <ul id='view-list'>
                                                    {/* <li>
                                                        View Sample on Github 
                                                        <BsGithub id='githubIcon' />
                                                        <div className='arrow' onClick={githubExt} />
                                                    </li> */}
                                                    <li>
                                                        See Related 
                                                        <Link id='link' />
                                                        <div className='arrow' onClick={requestWorkExp} />
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className='project-row' id='row4'>
                            
                            <div className='project-card' id='projectCard5'>
                                        {card5 ? <ExpandedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => collapseCard(5)}/> : <CollapsedCard id='collapsable' width={'20px'} height={'20px'} onClick={() => expandCard(5)}/>}
        
                                        <div className='project-name'>
                                            <h4>SmartChoice Bank</h4>
                                            <SmartChoiceBank height='50px' width='50px' />
                                        </div>

                                        <div id={card5 ? 'proj-card1Content-expanded' : 'proj-card1Content-collapsed'}>

                                                <div className='proj-card-InnerRow'>

                                                    <div className='col-proj-list'>                                
                                                        <h4 id='from'>Released</h4>
                                                        <p id='to'>Mid 2020</p>                                    
                                                    </div>

                                                    <div className='col-proj-list'>

                                                        <p>
                                                            A command line application that allows users to create accounts, login, and interact with various banking functions
                                                            such as depositing and withdrawing virtual money. 
                                                        </p>

                                                    </div>

                                                </div>

                                                <div className='techStack'>          
                                                    <h3>Tech Stack</h3>
                                                    <ul id='techStack-list'>
                                                        <li>C# <CSharp height={'40px'} width={'40px'} /></li>
                                                        <li>SQL <SQL height={'40px'} width={'40px'} /></li>
                                                    </ul>
                                                </div>

                                                <div className='view-external'>          
                                                    <h3>Ways to View</h3>
                                                    <ul id='view-list'>
                                                        <li>
                                                            View Source Code on Github 
                                                            <BsGithub id='githubIcon' />
                                                            <div className='arrow' onClick={githubBank} />
                                                        </li>
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

export default Projects;