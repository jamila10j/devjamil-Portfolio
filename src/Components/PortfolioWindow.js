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
import {ReactComponent as Check} from '../assets/WindowPane/Check.svg';

import {ReactComponent as ModalClose} from '../assets/WindowPane/ModalClose.svg';
import {ReactComponent as ModalCloseHover} from '../assets/WindowPane/ModalCloseHover.svg';
import {ReactComponent as DisabledMinimize} from '../assets/WindowPane/ModalFullscreenDisabled.svg';
import {ReactComponent as ModalFullscreen} from '../assets/WindowPane/ModalFullscreen.svg';
import {ReactComponent as ModalFullscreenHover} from '../assets/WindowPane/ModalFullscreenHover.svg';

import { ReactComponent as ProjectsIcon } from '../assets/WindowIcons/PortfolioWindow/Projects.svg';

import Projects from './PortfolioModalComponents/Projects';
import Resume from '../assets/FileDownloads/DevJamil-Resume2021.PDF';

import { BiMenu } from 'react-icons/bi';

function PortfolioWindow(props)
{
    const [closeBtnHover, setCloseBtnHover] = useState(false);
    // const [minimizeBtnHover, setMinimizeBtnHover] = useState(false);
    const [fullscreenBtnHover, setFullscreenBtnHover] = useState(false);
    
    const [visitedTabs, setVisitedTabs] = useState([]); 
    const [forwardTabs, setForwardTabs] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [openAnim, setOpenAnim] = useState(true);

    const [sortOldestFirst, setSortOldestFirst] = useState(false);

    const [portfolioMaximized, setPortfolioMaximized] = useState(false);

    let isMobile = window.innerWidth <= 900;

    let darkMode = props.DarkMode;
    let modalOpen = props.OpenState;
    const windowTitle = 'Portfolio';


    const resetWindow = () => {
        setCloseBtnHover(false);
        setFullscreenBtnHover(false);
        setPortfolioMaximized(false);
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
        const portfolioWindow = document.getElementById('portfolioWindow');

        document.documentElement.style.setProperty('--currentWindow', portfolioWindow.style.transform);

        if (!portfolioMaximized)
        {
            portfolioWindow.classList.toggle('maximizing'); 
            
            setTimeout(() => {
                portfolioWindow.classList.toggle('maximized');
                portfolioWindow.classList.remove('maximizing');
            }, 1000)   
             
            setPortfolioMaximized(true);
        }
        else
        {
            portfolioWindow.classList.remove('maximized');
            portfolioWindow.classList.toggle('window-UnMax'); 

            setTimeout(() => {
                portfolioWindow.className = 'window'
                portfolioWindow.classList.remove('window-UnMax'); 
            }, 1000)
            setPortfolioMaximized(false);

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
        props.UpdateFocusedWindow('Portfolio', 'portfolioWindow');
    }

    const updateFocusedWindowOnClick = (e) => {
        if (document.getElementById('portfolioWindowControlBtns').contains(e.target)) return;

        props.UpdateFocusedWindow('Portfolio', 'portfolioWindow');
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
            console.log(popTab);
            setTabIndex(popTab);
            setForwardTabs([...forwardTabs].filter(tab => tab !== popTab));
            
        }
        else return;
        
    }

    /* ----------------------------------------------------------------------------------------------- */


    /* ---------------------------------- SORT FUNCTIONALITY -------------------------------------- */

    const toggleSortDrop = () => {
        const sortDrop = document.getElementById('portfolioSort');

        sortDrop.classList.toggle('toggled');

        document.addEventListener('click', detectClickOutSort);
        document.addEventListener('touchstart', detectClickOutSort);
    }

    const closeSortDrop = () => {
        const sortDrop = document.getElementById('portfolioSort');

        sortDrop.classList.remove('toggled');

        document.removeEventListener('click', detectClickOutSort);
        document.removeEventListener('touchstart', detectClickOutSort);
    }


    const sortChangeReverse = () => {
        if (tabIndex === 0)
        {
            document.getElementById('projectCardList').style.flexDirection = 'column-reverse';
            setSortOldestFirst(true);
            closeSortDrop();
        }
        else return;
    }

    const sortChangeForward = () => {
        if (tabIndex === 0)
        {
            document.getElementById('projectCardList').style.flexDirection = 'column';
            setSortOldestFirst(false);
            closeSortDrop();
        }
        else return;
    }

    const detectClickOutSort = (e) => {

        let aboutSort = document.getElementById('portfolioWindowSortDiv');
        if (!aboutSort.contains(e.target))
        {
            console.log('clicked out');
            closeSortDrop();
        }
    }

    /* ----------------------------------------------------------------------------------------------- */


    /* ---------------------------------- SHARE FUNCTIONALITY -------------------------------------- */

    const toggleShareDrop = () => {
        const shareDrop = document.getElementById('portfolioShare');

        shareDrop.classList.toggle('toggled');

        document.addEventListener('click', detectClickOutShare);
        document.addEventListener('touchstart', detectClickOutShare);
    } 

    const closeShareDrop = () => {
        const shareDrop = document.getElementById('portfolioShare');

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

        let aboutShare = document.getElementById('portfolioWindowShareDiv');
        if (!aboutShare.contains(e.target))
        {
            console.log('clicked out');
            closeShareDrop();
        }
    }

    /* ----------------------------------------------------------------------------------------------- */

    /* ---------------------------------- COMPONENT FUNCTIONALITY -------------------------------------- */

    const requestWindowFromComponent = (window, tab) => {
        props.WindowRequestFunction(window, tab);
    }

    /* ----------------------------------------------------------------------------------------------- */

    useEffect(() => {
        if (!modalOpen)
        {
            document.documentElement.style.setProperty('--windowPosition_Portfolio', 'translate(0, 0)');
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
        if (props.PortfolioTabRequest !== null)
        {
            setTabIndex(props.PortfolioTabRequest);
            setVisitedTabs(prev => [...prev, tabIndex]);
        }
    }, [modalOpen, props.PortfolioTabRequest])


    return (
        <React.Fragment>
            {modalOpen ?
                <Draggable handle={".windowFunctions"} cancel={'[class*="MuiDialogContent-root"]'}  disabled={portfolioMaximized ? true : false} bounds='.mainBody'>
                        <div className={openAnim ? "window-openAnim" : "window"} id='portfolioWindow' onClick={updateFocusedWindowOnClick}>
                            <div className='modalContent'>

                                <Tabs className='TabsContainer' selectedIndex={tabIndex}>

                                    <div className={darkMode ? 'sidebarDark' : 'sidebar'}>

                                    <div className='windowPaneBtns'  id='portfolioWindowControlBtns'>
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
                                        <table id='sidebarOptionsTable'>
                                            <TabList className='sidebar-tabs'>
                                                <tr id={tabIndex === 0 ? darkMode ? 'selectedTabDark' : 'selectedTab' : ''}>
                                                    <td>
                                                        <Tab><button value={0} className={darkMode ? 'optionButtonDark' : 'optionButton'} onClick={updateTab}><ProjectsIcon />Projects</button></Tab>                                 
                                                    </td>
                                                </tr>
                                                {/* 
                                                 */}
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

                                            <div className='windowSort' id='portfolioWindowSortDiv'>
                                                <div className={darkMode ? 'nav-sort-dark' : 'nav-sort'} onClick={toggleSortDrop} onTouchStart={toggleSortDrop}>{darkMode ? <WindowSortDM /> : <WindowSort />}</div>
                                                
                                                <div className={darkMode ? 'windowSort-dropdown-dark' : 'windowSort-dropdown'} id='portfolioSort'>
                                                    <a onClick={sortChangeForward} onTouchStart={sortChangeForward}>
                                                        {!sortOldestFirst ? <Check width={'15px'} height={'15px'} /> : ''} Sort By Recency
                                                    </a>
                                                    <a onClick={sortChangeReverse} onTouchStart={sortChangeReverse}>
                                                        {sortOldestFirst ? <Check width={'15px'} height={'15px'} /> : ''} Sort Oldest First
                                                    </a>
                                                </div>                   
                                            </div>

                                            <div className='windowShare' id='portfolioWindowShareDiv'>
                                                <div className={darkMode ? 'nav-share-dark' : 'nav-share'}>{darkMode ? <WindowShareDM onClick={toggleShareDrop} onTouchStart={toggleShareDrop} /> : <WindowShare onClick={toggleShareDrop} onTouchStart={toggleShareDrop} />}</div>

                                                <div className={darkMode ? 'windowShare-dropdown-dark' : 'windowShare-dropdown'} id='portfolioShare'>
                                                    <a onClick={openMessageComponenet} onTouchStart={openMessageComponenet}>Send a Message</a>
                                                    <a onClick={openTwitterComponent} onTouchStart={openTwitterComponent}>Contact me on Twitter</a>
                                                    <a onClick={openLinkedInComponent} onTouchStart={openLinkedInComponent}>Contact me on LinkedIn</a>
                                                    <a href={Resume} download="DevJamil.PDF" onTouchStart={downloadResumeMobile}>Download my Resume</a>
                                                </div>
                                            </div>

                                        </div>
                                    
                                        
                                        <div className='content' id='portfolioMainContent'>
                                            <TabPanel>
                                                <Projects 
                                                    Requester={requestWindowFromComponent} />
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

export default PortfolioWindow;