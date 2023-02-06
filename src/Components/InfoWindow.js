import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Window.css';
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {ReactComponent as ModalClose} from '../assets/WindowPane/ModalClose.svg';
import {ReactComponent as ModalCloseHover} from '../assets/WindowPane/ModalCloseHover.svg';
import {ReactComponent as DisabledFullscreen} from '../assets/WindowPane/ModalFullscreenDisabled.svg';
import {ReactComponent as DisabledMinimize} from '../assets/WindowPane/ModalFullscreenDisabled.svg';
import Logo from '../assets/Logo/logo.png';

import { RiInformationLine } from 'react-icons/ri'
import { RiHistoryLine } from 'react-icons/ri'


const InfoWindow = (props) => {
    const [closeBtnHover, setCloseBtnHover] = useState(false);
    // const [minimizeBtnHover, setMinimizeBtnHover] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    let darkMode = props.DarkMode;
    let modalOpen = props.OpenState;

    const handleMouseOverClose = (closeBtnHover) => {
        setCloseBtnHover(closeBtnHover => !closeBtnHover);
    }

    /*const handleMouseOverMini = (minimizeBtnHover) => {
        setMinimizeBtnHover(minimizeBtnHover => !minimizeBtnHover);
    }*/

    const closeWindow = () => {
        props.CloseFunction(props.OpenState, props.OpenStateSetter);
    }

    /*const minimizeWindow = () => {
        props.MinimizeFunction(props.MinimizedState, props.MinimizeStateSetter);
    }*/

    const updateTab = (e) => {
        let newTab = parseInt(e.target.value);

        if (newTab === tabIndex) return;
        setTabIndex(newTab);
    }

    const updateFocusedWindow = () => {
        props.UpdateFocusedWindow('Information', 'infoWindow');
    }

    const updateFocusedWindowOnClick = (e) => {
        if (document.getElementById('infoWindowControlBtns').contains(e.target)) return;

        props.UpdateFocusedWindow('Information', 'infoWindow');
    }

    useEffect(() => {
        if (!modalOpen)
        {
            document.documentElement.style.setProperty('--windowPosition_Info', 'translate(0, 0)');
            setTabIndex(0);
        }
        else
        {
            updateFocusedWindow();
        }
    }, [modalOpen])


    return (
        <React.Fragment>
            {modalOpen ?
                <Draggable handle={darkMode ? ".infoNavDark" : ".infoNav"} cancel={'[class*="MuiDialogContent-root"]'} disabled={props.MinimizedState ? true : false} bounds='.mainBody'>
                    <div className="informationWindow" id='infoWindow' onClick={updateFocusedWindowOnClick}>
                        <div className='modalContent'>

                            <Tabs className='infoTabsContainer' selectedIndex={tabIndex}>

                                <div className={darkMode ? 'infoNavDark' : 'infoNav'}>

                                    <div className='infoWindowPaneBtns' id='infoWindowControlBtns'>
                                        <div className='windowControl-Norm'>
                                            {closeBtnHover ? <ModalCloseHover onMouseLeave={handleMouseOverClose} onClick={closeWindow} /> : <ModalClose onMouseEnter={handleMouseOverClose} />}
                                            {/* {minimizeBtnHover ? <ModalMinimizeHover onMouseLeave={handleMouseOverMini} onClick={minimizeWindow} /> : <ModalMinimize onMouseEnter={handleMouseOverMini} />} */}
                                            <DisabledMinimize />
                                            <DisabledFullscreen />
                                        </div>
                                        <div className='windowControl-Restricted'>
                                            <ModalClose onClick={closeWindow} onTouchStart={closeWindow} />
                                            <DisabledMinimize />
                                            <DisabledFullscreen />
                                        </div>
                                    </div>

                                    <div className='infoWindowOptions'>
                                        <TabList className={darkMode ? 'info-tabs-dark' : 'info-tabs'}>
                                            <Tab value={0} selectedClassName={darkMode ? 'infoOptionButtonDark-selected' : 'infoOptionButton-selected'} className={darkMode ? 'infoOptionButtonDark' : 'infoOptionButton'} onClick={updateTab} onTouchStart={updateTab}>
                                                <div id='infoTabOverview-Norm'>
                                                    Overview
                                                </div>
                                                <div id='infoTabOverview-Restricted'>
                                                    <RiInformationLine className={darkMode ? 'infoTabs-Alt-Icon-dark' : 'infoTabs-Alt-Icon'} />
                                                </div>
                                            </Tab>                                  
                                            <Tab value={1} selectedClassName={darkMode ? 'infoOptionButtonDark-selected' : 'infoOptionButton-selected'} className={darkMode ? 'infoOptionButtonDark' : 'infoOptionButton'} onClick={updateTab} onTouchStart={updateTab}>
                                                <div id='infoTabOverview-Norm'>
                                                    Version History
                                                </div>
                                                <div id='infoTabOverview-Restricted'>
                                                    <RiHistoryLine className={darkMode ? 'infoTabs-Alt-Icon-dark' : 'infoTabs-Alt-Icon'} />
                                                </div>
                                            </Tab>                
                                        </TabList>
                                    </div>

                                </div>
                        

                                <div className={darkMode ? 'infoMainDark' : 'infoMain'} id='main'>
                                          
                                    <TabPanel>
                                        <div className='info-overview'>
                                            <div className='infoOverview-graphic'>
                                                <img id="infoImg" src={Logo} />
                                            </div>
                                            
                                            <div className='infoOverview-content'>
                                                <h1 className='infoWindow-Name'>DevJamil - Portfolio</h1>
                                                <p className='infoWindow-SubName'>Version 2.0</p>

                                                <h5>Release - September 2022</h5>
                                                <h5>Library - React V18.2.0</h5>
                                            </div>
                                            
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className='info-versionHistory'>
                                            <div className='infoVersionHistory-current'>
                                                <div className='vh-innerGraphic'>
                                                    <h2 className='infoWindow-Name'>Current Version</h2> 
                                                    <p className='infoWindow-SubName'>2.0</p>
                                                </div>
                                                <div className='infoVersionHistory-Graphic'>
                                                    <img id="navimg-VH" src={Logo} />
                                                </div>
                                            </div>
                                            
                                            <div className='infoVersionHistory-list'>
                                                <h1 className='infoVersionHistory-listName'>Version History</h1>
                                                
                                                <table className='versions'>

                                                    <tr>
                                                        <th>Release Date</th>
                                                        <th>Release Version</th>
                                                    </tr>

                                                    <tr>
                                                        <td>9/24/22</td>
                                                        <td>Version 2.0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>5/15/20</td>
                                                        <td>Version 1.0</td>
                                                    </tr>

                                                </table>
                                            </div>
                                            
                                        </div>
                                    </TabPanel>
                                                    
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </Draggable> 
            : ''}
        </React.Fragment>
    )
}

export default InfoWindow;