import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoWindow from './InfoWindow';
import AboutWindow from './AboutWindow';
import PortfolioWindow from './PortfolioWindow';
import ContactWindow from './ContactWindow';
import TaskBar from './TaskBar';
import {ReactComponent as AboutSVG} from '../assets/DesktopIcons/About.svg';
import {ReactComponent as PortfolioSVG} from '../assets/DesktopIcons/Portfolio.svg';
import {ReactComponent as ContactSVG} from '../assets/DesktopIcons/Contact.svg';

function Desktop(props)
{
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showPortfolioModal, setShowPortfolioModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const [infoMinimized, setInfoMinimized] = useState(false);
    const [aboutMinimized, setAboutMinimized] = useState(false);
    const [portfolioMinimized, setPortfolioMinimized] = useState(false);
    const [contactMinimized, setContactMinimized] = useState(false);

    const [aboutMaximized, setAboutMaximized] = useState(false);
    const [portfolioMaximized, setPortfolioMaximized] = useState(false);
    const [contactMaximized, setContactMaximized] = useState(false);

    const [aboutTabRequest, setAboutTabRequest] = useState(null);
    const [portfolioTabRequest, setPortfolioTabRequest] = useState(null);
    const [contactTabRequest, setContactTabRequest] = useState(null);

    
    const closeFunction = (currentState, setCurrentState) => {
        setCurrentState(currentState => !currentState);
        setTimeout(() => updateWindowByClose(), 0);
    }
    const minimizeFunction = (currentState, setCurrentState) => {
        setCurrentState(currentState => !currentState);
    }
    const maximizeFunction = (currentState, setCurrentState) => {
        setCurrentState(currentState => !currentState);
    }

    const updateFocusedWindow = (windowTitle, id = null) => {
        props.UpdateFocusedWindow(windowTitle);
    }


    const openAboutWindow = () => {
        setAboutMinimized(false);
        setShowAboutModal(true);
    }

    const openPortfolioWindow = () => {
        setPortfolioMinimized(false);
        setShowPortfolioModal(true);
    }

    const openContactWindow = () => {
        setContactMinimized(false);
        setShowContactModal(true);
    }

    const windowRequest = (window, tabIndex = 0) => {

        if (window === 'Information')
        {
            setInfoMinimized(false);

            if (showInfoModal)
            {
                document.getElementById('infoWindow').style.zIndex = 1301;
                updateFocusedWindow('Information');
            }
            else
            {
                setShowInfoModal(true); 
            }
            
        }
        else if (window === 'About')
        {
            setAboutTabRequest(tabIndex);
            console.log(tabIndex)
            setAboutMinimized(false);

            if (showAboutModal)
            {
                document.getElementById('aboutWindow').style.zIndex = 1301;
                updateFocusedWindow('About');
            }
            else
            {
                setShowAboutModal(true);  
            }  

            setTimeout(() => {setAboutTabRequest(null)}, 200)
        }
        else if (window === 'Portfolio')
        {
            setPortfolioTabRequest(tabIndex);
            setPortfolioMinimized(false);

            if (showPortfolioModal)
            {
                document.getElementById('portfolioWindow').style.zIndex = 1301;
                updateFocusedWindow('Portfolio');
            }
            else
            {
                setShowPortfolioModal(true); 
            }  
            

            setTimeout(() => {setPortfolioTabRequest(null)}, 200)
        }
        else
        {
            setContactTabRequest(tabIndex);
            setContactMinimized(false);

            if (showContactModal)
            {
                document.getElementById('contactWindow').style.zIndex = 1301;
                updateFocusedWindow('Contact');
            }
            else
            {
                setShowContactModal(true);
            }
            

            setTimeout(() => {setContactTabRequest(null)}, 200)
        }

    }

    useEffect(() => {
        if (!showInfoModal && !showPortfolioModal && !showContactModal && !showAboutModal)
        {
            updateFocusedWindow('Desktop');
        }
    }, [showAboutModal, showPortfolioModal, showContactModal, showInfoModal])


    const updateWindowByClose = () => {
        const infoWindowZ = (document.getElementById('infoWindow') === null) ? 0 : parseInt(document.getElementById('infoWindow').style.zIndex);
        const aboutWindowZ = (document.getElementById('aboutWindow') === null) ? 0 : parseInt(document.getElementById('aboutWindow').style.zIndex);
        const portfolioWindowZ = (document.getElementById('portfolioWindow') === null) ? 0 : parseInt(document.getElementById('portfolioWindow').style.zIndex);
        const contactWindowZ = (document.getElementById('contactWindow') === null) ? 0 : parseInt(document.getElementById('contactWindow').style.zIndex);

        if (infoWindowZ > aboutWindowZ && infoWindowZ > portfolioWindowZ && infoWindowZ > contactWindowZ)
        {
            updateFocusedWindow('Information');
        }
        else if (aboutWindowZ > infoWindowZ && aboutWindowZ > portfolioWindowZ && aboutWindowZ > contactWindowZ)
        {
            updateFocusedWindow('About');
        }
        else if (portfolioWindowZ > infoWindowZ && portfolioWindowZ > aboutWindowZ && portfolioWindowZ > contactWindowZ)
        {
            updateFocusedWindow('Portfolio');
        }
        else if (contactWindowZ > infoWindowZ && contactWindowZ > aboutWindowZ && contactWindowZ > portfolioWindowZ)
        {
            updateFocusedWindow('Contact');
        }
    }

    useEffect(() => {
        let externWindowReq = props.ExternalWindowRequest;
        
        if (externWindowReq)
        {
            windowRequest(externWindowReq);
        }
        else return;
    }, [props.ExternalWindowRequest])

    useEffect(() => {
        if (props.WindowScrub)
        {
            setShowInfoModal(false);
            setShowAboutModal(false);
            setShowPortfolioModal(false);
            setShowContactModal(false);
        }
        else return;
    }, [props.WindowScrub])



    return (
        <React.Fragment>
            <div className='mainBody'>

                    <div className='desktop' id='desktopContainer'>

                        <div className='desktopIconContainer'>
                            <ul className='mainBodyIconList'>
                                <li>
                                    <span onClick={openAboutWindow}><AboutSVG />
                                    </span>About
                                </li>
                                <li>
                                    <span onClick={openPortfolioWindow}><PortfolioSVG ShowModal={showPortfolioModal} />
                                    </span>Portfolio
                                </li>
                                <li>
                                    <span onClick={openContactWindow}><ContactSVG ShowModal={showContactModal} />
                                    </span>Contact
                                </li>
                            </ul>
                        </div>

                        <InfoWindow
                            DarkMode={props.Style} 
                            UpdateFocusedWindow={updateFocusedWindow}
                            OpenState={showInfoModal}
                            OpenStateSetter={setShowInfoModal}
                            MinimizedState={infoMinimized}
                            MinimizeStateSetter={setInfoMinimized}
                            CloseFunction={closeFunction} 
                            MinimizeFunction={minimizeFunction} />

                        <AboutWindow
                            DarkMode={props.Style} 
                            UpdateFocusedWindow={updateFocusedWindow} 
                            OpenStateSetter={setShowAboutModal} 
                            MinimizeStateSetter={setAboutMinimized}
                            MaximizeStateSetter={setAboutMaximized}
                            OpenState={showAboutModal} 
                            MinimizedState={aboutMinimized}
                            MaximizedState={aboutMaximized}
                            CloseFunction={closeFunction} 
                            MinimizeFunction={minimizeFunction} 
                            MaximizeFunction={maximizeFunction} 
                            WindowRequestFunction={windowRequest}
                            AboutTabRequest={aboutTabRequest} />

                        <PortfolioWindow
                            DarkMode={props.Style} 
                            UpdateFocusedWindow={updateFocusedWindow} 
                            OpenStateSetter={setShowPortfolioModal} 
                            MinimizeStateSetter={setPortfolioMinimized}
                            MaximizeStateSetter={setPortfolioMaximized}
                            OpenState={showPortfolioModal} 
                            MinimizedState={portfolioMinimized}
                            MaximizedState={portfolioMaximized}
                            CloseFunction={closeFunction} 
                            MinimizeFunction={minimizeFunction} 
                            MaximizeFunction={maximizeFunction}
                            WindowRequestFunction={windowRequest}
                            PortfolioTabRequest={portfolioTabRequest} />

                        <ContactWindow 
                            DarkMode={props.Style} 
                            UpdateFocusedWindow={updateFocusedWindow} 
                            OpenStateSetter={setShowContactModal} 
                            MinimizeStateSetter={setContactMinimized}
                            MaximizeStateSetter={setContactMaximized}
                            OpenState={showContactModal} 
                            MinimizedState={contactMinimized}
                            MaximizedState={contactMaximized}
                            CloseFunction={closeFunction} 
                            MinimizeFunction={minimizeFunction} 
                            MaximizeFunction={maximizeFunction}
                            WindowRequestFunction={windowRequest}
                            ContactTabRequest={contactTabRequest} />

                    </div>

                <TaskBar 
                    Style={props.Style}
                    InfoModalIsOpen={showInfoModal}
                    AboutModalIsOpen={showAboutModal} 
                    PorfolioModalIsOpen={showPortfolioModal} 
                    ContactModalIsOpen={showContactModal} 
                    MinimizeFunction={minimizeFunction}
                    InfoMinimized={infoMinimized}
                    InfoMinimizeStateSetter={setInfoMinimized}
                    AboutMinimized={aboutMinimized}
                    AboutMinimizeStateSetter={setAboutMinimized}
                    PortfolioMinimized={portfolioMinimized}
                    PortfolioMinimizeStateSetter={setPortfolioMinimized}
                    ContactMinimized={contactMinimized}
                    ContactMinimizeStateSetter={setContactMinimized} 
                    WindowRequestFunction={windowRequest} />

            </div>
        </React.Fragment>
    )
}

export default Desktop;