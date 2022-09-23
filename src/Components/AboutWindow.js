import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Window.css';
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactComponent as NavBack } from '../assets/WindowPane/navBack.svg';
import { ReactComponent as NavBackDM } from '../assets/WindowPane/navBackDarkMode.svg';
import { ReactComponent as NavForward } from '../assets/WindowPane/navForward.svg';
import { ReactComponent as NavForwardDM } from '../assets/WindowPane/navForwardDarkMode.svg';
import { ReactComponent as WindowSort } from '../assets/WindowPane/WindowSort.svg';
import { ReactComponent as WindowSortDM } from '../assets/WindowPane/WindowSortDarkMode.svg';
import { ReactComponent as WindowShare } from '../assets/WindowPane/WindowShare.svg';
import { ReactComponent as WindowShareDM } from '../assets/WindowPane/WindowShareDarkMode.svg';

import {ReactComponent as ModalClose} from '../assets/WindowPane/ModalClose.svg';
import {ReactComponent as ModalCloseHover} from '../assets/WindowPane/ModalCloseHover.svg';
import {ReactComponent as DisabledMinimize} from '../assets/WindowPane/ModalFullscreenDisabled.svg';
import {ReactComponent as ModalFullscreen} from '../assets/WindowPane/ModalFullscreen.svg';
import {ReactComponent as ModalFullscreenHover} from '../assets/WindowPane/ModalFullscreenHover.svg';
import {ReactComponent as Check} from '../assets/WindowPane/Check.svg';

import { ReactComponent as OverviewIcon } from '../assets/WindowIcons/AboutWindow/Overview.svg';
import { ReactComponent as WorkExpIcon } from '../assets/WindowIcons/AboutWindow/WorkExp.svg';
import { ReactComponent as EducationIcon } from '../assets/WindowIcons/AboutWindow/Education.svg';
import { ReactComponent as SkillsIcon } from '../assets/WindowIcons/AboutWindow/Skills.svg';
import { ReactComponent as HobbiesIcon } from '../assets/WindowIcons/AboutWindow/Hobbies.svg';

import Overview from './AboutModalComponents/Overview';
import WorkExperience from './AboutModalComponents/WorkExperience';
import Education from './AboutModalComponents/Education';
import Skills from './AboutModalComponents/Skills';
import HobbiesInterests from './AboutModalComponents/HobbiesInterests';
import Resume from '../assets/FileDownloads/DevJamil-Resume2021.PDF';

import { BiMenu } from 'react-icons/bi';

function AboutWindow(props)
{
    const [closeBtnHover, setCloseBtnHover] = useState(false);
    // const [minimizeBtnHover, setMinimizeBtnHover] = useState(false);
    const [fullscreenBtnHover, setFullscreenBtnHover] = useState(false);
    const [openAnim, setOpenAnim] = useState(true);

    const [visitedTabs, setVisitedTabs] = useState([]); 
    const [forwardTabs, setForwardTabs] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    const [sortOldestFirst, setSortOldestFirst] = useState(false);

    const [aboutMaximized, setAboutMaximized] = useState(false);

    let isMobile = window.innerWidth <= 900;

    let darkMode = props.DarkMode;
    let modalOpen = props.OpenState;
    const windowTitle = 'About';

    const resetWindow = () => {
        setCloseBtnHover(false);
        setFullscreenBtnHover(false);
        setAboutMaximized(false);
        setSortOldestFirst(false);
        setTabIndex(0);
        setOpenAnim(false);
    }


    const handleMouseOverClose = (closeBtnHover) => {
        setCloseBtnHover(closeBtnHover => !closeBtnHover);
    }

    /*const handleMouseOverMini = (minimizeBtnHover) => {
        setMinimizeBtnHover(minimizeBtnHover => !minimizeBtnHover);
    }*/

    const handleMouseOverFull = (fullscreenBtnHover) => {
        setFullscreenBtnHover(fullscreenBtnHover => !fullscreenBtnHover);
    }


    const closeWindow = () => {
        setVisitedTabs([]);
        setForwardTabs([]);
        props.CloseFunction(props.OpenState, props.OpenStateSetter);
    }

    /*const minimizeWindow = () => {
        props.MinimizeFunction(props.MinimizedState, props.MinimizeStateSetter);
    }*/


    const fullscreenWindow = () => {
        props.MaximizeFunction(props.MaximizedState, props.MaximizeStateSetter);
        const aboutWindow = document.getElementById('aboutWindow');
        
        document.documentElement.style.setProperty('--currentWindow', aboutWindow.style.transform);

        //document.documentElement.style.setProperty('--windowPosition_About', aboutWindow.style.transform);

        if (!aboutMaximized)
        {
            aboutWindow.classList.toggle('maximizing'); 
            
            setTimeout(() => {
                aboutWindow.classList.toggle('maximized');
                aboutWindow.classList.remove('maximizing');
            }, 1000)   
             
            setAboutMaximized(true);
        }
        else
        {
            aboutWindow.classList.remove('maximized');
            aboutWindow.classList.toggle('window-UnMax'); 

            setTimeout(() => {
                aboutWindow.className = 'window'
                aboutWindow.classList.remove('window-UnMax'); 
            }, 1000)
            setAboutMaximized(false);
        }
    }

    const toggleWindowMenu = () => {
        let sidebarMenu = document.getElementById('windowTabs');

        sidebarMenu.classList.toggle('toggled');
    }

    const closeWindowMenu = () => {
        let sidebarMenu = document.getElementById('windowTabs');

        sidebarMenu.classList.remove('toggled');
    }
    

    const updateTab = (e) => {
        let newTab = parseInt(e.target.value);

        if (newTab === tabIndex) return;
        setVisitedTabs(visitedTabs => [...visitedTabs, tabIndex]);
        setTabIndex(newTab);  
        setSortOldestFirst(false);
        closeWindowMenu();
    }

    const updateFocusedWindow = () => {
        props.UpdateFocusedWindow('About', 'aboutWindow');
    }

    const updateFocusedWindowOnClick = (e) => {
        if (document.getElementById('aboutWindowControlBtns').contains(e.target)) return;

        props.UpdateFocusedWindow('About', 'aboutWindow');
    }


    /* ---------------------------------- NAVBACK FUNCTIONALITY -------------------------------------- */

    const handlePrevTab = () => {
        if (visitedTabs.length > 0)
        {
            let popTab = [...visitedTabs].pop();
            setForwardTabs(forwardTabs => [...forwardTabs, tabIndex]);
            setTabIndex(popTab);
            setVisitedTabs([...visitedTabs].filter(tab => tab !== popTab)); 
        }
        else return;
        
    }

    /* ----------------------------------------------------------------------------------------------- */



    /* ---------------------------------- NAVFORWARD FUNCTIONALITY -------------------------------------- */

    const handleForwardTab = () => {
        if (forwardTabs.length > 0)
        {
            let popTab = [...forwardTabs].pop();
            setVisitedTabs(visitedTabs => [...visitedTabs, tabIndex]);
            setTabIndex(popTab);
            setForwardTabs([...forwardTabs].filter(tab => tab !== popTab));
            
        }
        else return;
        
    }

    /* ----------------------------------------------------------------------------------------------- */



    /* ---------------------------------- SORT FUNCTIONALITY -------------------------------------- */

    const toggleSortDrop = () => {
        const sortDrop = document.getElementById('aboutSort');

        sortDrop.classList.toggle('toggled');

        document.addEventListener('click', detectClickOutSort);
        document.addEventListener('touchstart', detectClickOutSort);
    }

    const closeSortDrop = () => {
        const sortDrop = document.getElementById('aboutSort');

        sortDrop.classList.remove('toggled');

        document.removeEventListener('click', detectClickOutSort);
        document.removeEventListener('touchstart', detectClickOutSort);
    }


    const sortChangeReverse = () => {
        if (tabIndex === 1)
        {
            document.getElementById('workExpCardList').style.flexDirection = 'column-reverse';
            setSortOldestFirst(true);
            closeSortDrop();
        }
        else if (tabIndex === 2)
        {
            document.getElementById('eduCardList').style.flexDirection = 'column-reverse';
            setSortOldestFirst(true);
            closeSortDrop();
        }
    }

    const sortChangeForward = () => {
        if (tabIndex === 1)
        {
            document.getElementById('workExpCardList').style.flexDirection = 'column';
            setSortOldestFirst(false);
            closeSortDrop();
        }
        else if (tabIndex === 2)
        {
            document.getElementById('eduCardList').style.flexDirection = 'column';
            setSortOldestFirst(false);
            closeSortDrop();
        }
    }

    const detectClickOutSort = (e) => {

        let aboutSort = document.getElementById('aboutWindowSortDiv');
        if (!aboutSort.contains(e.target))
        {
            closeSortDrop();
        }
    }

    /* ----------------------------------------------------------------------------------------------- */


    /* ---------------------------------- SHARE FUNCTIONALITY -------------------------------------- */

    const toggleShareDrop = () => {
        const shareDrop = document.getElementById('aboutShare');

        shareDrop.classList.toggle('toggled');

        document.addEventListener('click', detectClickOutShare);
        document.addEventListener('touchstart', detectClickOutShare);
    } 

    const closeShareDrop = () => {
        const shareDrop = document.getElementById('aboutShare');

        shareDrop.classList.remove('toggled');

        document.removeEventListener('click', detectClickOutShare);
        document.removeEventListener('touchstart', detectClickOutShare);
    }

    const openMessageComponenet = () => {
        props.WindowRequestFunction('Contact', 0);
        closeShareDrop();
    }

    const openLinkedInComponent = () => {
        props.WindowRequestFunction('Contact', 3);
        closeShareDrop();
    }

    const openTwitterComponent = () => {
        props.WindowRequestFunction('Contact', 2);
        closeShareDrop();
    }

    const downloadResumeMobile = () => {
        window.open(Resume, '_blank');
    }

    const detectClickOutShare = (e) => {

        let aboutShare = document.getElementById('aboutWindowShareDiv');
        if (!aboutShare.contains(e.target))
        {
            closeShareDrop();
        }
    }

    /* ----------------------------------------------------------------------------------------------- */


    useEffect(() => {
        if (!modalOpen)
        {
            document.documentElement.style.setProperty('--windowPosition_About', 'translate(0, 0)');
            resetWindow();
        }
        else
        {
            updateFocusedWindow();
            setTimeout(() => {
                setOpenAnim(false);
            }, 200) 
        }
    }, [modalOpen, props.OpenState])


    useEffect(() => {
        if (props.AboutTabRequest !== null)
        {
            console.log(props.AboutTabRequest)
            setTabIndex(props.AboutTabRequest);
            setVisitedTabs(prev => [...prev, tabIndex]);
        }
    }, [modalOpen, props.AboutTabRequest])



    return (
        <React.Fragment>
            {modalOpen ?
                <Draggable handle={".windowFunctions"} cancel={'[class*="MuiDialogContent-root"]'} disabled={aboutMaximized ? true : false} bounds='.mainBody'>
                    <div className={openAnim ? "window-openAnim" : "window"} id='aboutWindow' onClick={updateFocusedWindowOnClick}>
                        <div className='modalContent'>

                            <Tabs className='TabsContainer' selectedIndex={tabIndex}>

                                <div className={darkMode ? 'sidebarDark' : 'sidebar'}>

                                    <div className='windowPaneBtns' id='aboutWindowControlBtns'>
                                        <div className='windowCtrlBtnsContainer'>
                                            {closeBtnHover ? <ModalCloseHover onMouseLeave={handleMouseOverClose} onClick={closeWindow} /> : <ModalClose onMouseEnter={handleMouseOverClose} />}
                                            {/* {minimizeBtnHover ? <ModalMinimizeHover onMouseLeave={handleMouseOverMini} onClick={minimizeWindow} /> : <ModalMinimize onMouseEnter={handleMouseOverMini} />} */}
                                            <DisabledMinimize />
                                            {isMobile ? <DisabledMinimize /> : fullscreenBtnHover ? <ModalFullscreenHover onMouseLeave={handleMouseOverFull} onClick={fullscreenWindow} /> : <ModalFullscreen onMouseEnter={handleMouseOverFull} />}
                                        </div>
                                        
                                        <div className='windowAltMenu-Restricted'>
                                            <BiMenu id={darkMode ? 'altMenuIconDark' : 'altMenuIcon'} onClick={toggleWindowMenu} />
                                        </div>

                                    </div>

                                    <div className='sidebarName'>
                                        <h3 className={darkMode ? 'sideBarNameH3Dark' : 'sidebarNameH3'}>{windowTitle}</h3>
                                    </div>

                                    <div className='modalSidebarOptions' id='windowTabs'>
                                        <table id={darkMode ? 'sidebarOptionsTableDark' : 'sidebarOptionsTable'}>
                                            <TabList className='sidebar-tabs'>
                                                <tr id={tabIndex === 0 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={0} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><OverviewIcon />Overview</button></Tab>                                 
                                                    </td>
                                                </tr>
                                                <tr id={tabIndex === 1 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={1} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><WorkExpIcon />Work Experience</button></Tab>                
                                                    </td>
                                                </tr>
                                                <tr id={tabIndex === 2 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={2} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><EducationIcon />Education</button></Tab>                
                                                    </td>
                                                </tr>
                                                <tr id={tabIndex === 3 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={3} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><SkillsIcon />Skills</button></Tab>                
                                                    </td>
                                                </tr>
                                                <tr id={tabIndex === 4 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={4} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><HobbiesIcon />Hobbies & Interests</button></Tab>                
                                                    </td>
                                                </tr>
                                            </TabList>
                                        </table>
                                    </div>

                                </div>
                        

                                <div className={darkMode ? 'mainDark' : 'main'} id='main'>
                                    <div className='windowFunctions'>
                                        
                                        <div className='windowNav'>
                                            <div className={visitedTabs.length ? darkMode ? 'nav-back-dark' : 'nav-back' : 'nav-back-disabled'} id={darkMode ? 'navBackDark' : ''} onClick={handlePrevTab} onTouchStart={handlePrevTab}>
                                                {darkMode ? <NavBackDM /> : <NavBack />}
                                            </div>
                                            <div className={forwardTabs.length ? darkMode ? 'nav-forward-dark' : 'nav-forward' : 'nav-forward-disabled'} id={darkMode ? 'navForwardDark' : ''} onClick={handleForwardTab} onTouchStart={handleForwardTab}>
                                                {darkMode ? <NavForwardDM /> : <NavForward />}
                                            </div>
                                        </div>

                                        <div className='windowTitle'>
                                            <h3 className={darkMode ? 'windowTitleH3Dark' : 'windowTitleH3'}>{windowTitle}</h3>
                                        </div>

                                        <div className='windowSpacing'></div>

                                        <div className='windowSort' id='aboutWindowSortDiv'>
                                            <div className={darkMode ? 'nav-sort-dark' : 'nav-sort'} onClick={toggleSortDrop} onTouchStart={toggleSortDrop}>{darkMode ? <WindowSortDM /> : <WindowSort />}</div>
                                            
                                            <div className={darkMode ? 'windowSort-dropdown-dark' : 'windowSort-dropdown'} id='aboutSort'>
                                                <a className={tabIndex !== 1 && tabIndex !== 2 ? 'disabled' : ''} onClick={sortChangeForward} onTouchStart={sortChangeForward}>
                                                    {!sortOldestFirst ? <Check width={'15px'} height={'15px'} /> : ''} Sort By Recency
                                                </a>
                                                <a className={tabIndex !== 1 && tabIndex !== 2 ? 'disabled' : ''} onClick={sortChangeReverse} onTouchStart={sortChangeReverse}>
                                                    {sortOldestFirst ? <Check width={'15px'} height={'15px'} /> : ''} Sort Oldest First
                                                </a>
                                            </div>        
                                        </div>

                                        <div className='windowShare' id='aboutWindowShareDiv'>
                                            <div className={darkMode ? 'nav-share-dark' : 'nav-share'}>{darkMode ? <WindowShareDM onClick={toggleShareDrop} onTouchStart={toggleShareDrop} /> : <WindowShare onClick={toggleShareDrop} onTouchStart={toggleShareDrop} />}</div>

                                            <div className={darkMode ? 'windowShare-dropdown-dark' : 'windowShare-dropdown'} id='aboutShare'>
                                                <a onClick={openMessageComponenet} onTouchStart={openMessageComponenet}>Send a Message</a>
                                                <a onClick={openTwitterComponent} onTouchStart={openTwitterComponent}>Contact me on Twitter</a>
                                                <a onClick={openLinkedInComponent} onTouchStart={openLinkedInComponent}>Contact me on LinkedIn</a>
                                                <a id='downloadResume' href={Resume} download="DevJamil.PDF" onTouchStart={downloadResumeMobile}>Download my Resume</a>
                                            </div> 
                                        </div>

                                    </div>
                                
                                    
                                    <div className='content' id='aboutMainContent'>
                                        <TabPanel>
                                            <Overview />
                                        </TabPanel>

                                        <TabPanel>
                                            <WorkExperience />
                                        </TabPanel>

                                        <TabPanel>
                                            <Education />
                                        </TabPanel>

                                        <TabPanel>
                                            <Skills />
                                        </TabPanel>

                                        <TabPanel>
                                            <HobbiesInterests />
                                        </TabPanel>
                                        
                                    </div>
                                
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </Draggable> 
            : ''}
        </React.Fragment>
    )
}

export default AboutWindow;