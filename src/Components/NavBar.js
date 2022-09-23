import React, { useState, useEffect } from 'react';
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import Logo from '../assets/Logo/logo.png';

function NavBar(props)
{
    const [dateTime, setDateTime] = useState(new Date());

    let darkMode = props.Style;
    let focusedWindow = props.FocusedWindow;

    const toggleTheme = () => {
        props.UpdateTheme(darkMode);
    }

    /* ---------------------------------------- DROPDOWN FUNCTIONALITY ---------------------------------------- */

    const closeAllWindows = () => {
      props.CloseAllWindows();
      closeHomeDrop();
      closeInfoDrop();
    }

    const openInfoWindow = () => {
      props.WindowRequester('Information');
      closeInfoDrop();
    }

    const openAboutWindow = () => {
      props.WindowRequester('About');
      closeAboutDrop();
      closeInfoDrop();
    }

    const openPortfolioWindow = () => {
      props.WindowRequester('Portfolio');
      closePortfolioDrop();
      closeInfoDrop();
    }

    const openContactWindow = () => {
      props.WindowRequester('Contact');
      closeContactDrop();
      closeInfoDrop();
    }


    /* -------------------------------------- DROPDOWN FUNCTIONS -------------------------------------- */

    const toggleInfoDropdown = () => {
      const infoDrop = document.getElementById('navbarInfoDrop');

      infoDrop.classList.toggle('toggled-navbar');
      document.addEventListener('click', detectClickOutInfo);
    }

    const closeInfoDrop = () => {
      const infoDrop = document.getElementById('navbarInfoDrop');

      infoDrop.classList.remove('toggled-navbar');

      document.removeEventListener('click', detectClickOutInfo);
    }

    const toggleHomeDropdown = () => {
      const homeDrop = document.getElementById('navbarHomeDrop');

      homeDrop.classList.toggle('toggled-navbar');
      document.addEventListener('click', detectClickOutHome);
    }

    const closeHomeDrop = () => {
      const homeDrop = document.getElementById('navbarHomeDrop');

      homeDrop.classList.remove('toggled-navbar');

      document.removeEventListener('click', detectClickOutHome);
    }

    const toggleAboutDropdown = () => {
      const aboutDrop = document.getElementById('navbarAboutDrop');

      aboutDrop.classList.toggle('toggled-navbar');
      document.addEventListener('click', detectClickOutAbout);
    }

    const closeAboutDrop = () => {
      const aboutDrop = document.getElementById('navbarAboutDrop');

      aboutDrop.classList.remove('toggled-navbar');

      document.removeEventListener('click', detectClickOutAbout);
    }

    const togglePortfolioDropdown = () => {
      const portfolioDrop = document.getElementById('navbarPortfolioDrop');

      portfolioDrop.classList.toggle('toggled-navbar');
      document.addEventListener('click', detectClickOutPortfolio);
    }

    const closePortfolioDrop = () => {
      const portfolioDrop = document.getElementById('navbarPortfolioDrop');

      portfolioDrop.classList.remove('toggled-navbar');

      document.removeEventListener('click', detectClickOutPortfolio);
    }

    const toggleContactDropdown = () => {
      const contactDrop = document.getElementById('navbarContactDrop');

      contactDrop.classList.toggle('toggled-navbar');
      document.addEventListener('click', detectClickOutContact);
    }

    const closeContactDrop = () => {
      const contactDrop = document.getElementById('navbarContactDrop');

      contactDrop.classList.remove('toggled-navbar');

      document.removeEventListener('click', detectClickOutContact);
    }

    /* -------------------------------------- AUXILIARY CLICK FUNCTIONS -------------------------------------- */

    const detectClickOutInfo = (e) => {

      let navbarInfoDiv = document.getElementById('navInfoDiv');
      if (!navbarInfoDiv.contains(e.target))
      {
        closeInfoDrop();
      }
    }

    const detectClickOutHome = (e) => {

      let navbarHomeDiv = document.getElementById('navHomeDiv');
      if (!navbarHomeDiv.contains(e.target))
      {
        closeHomeDrop();
      }
    }

    const detectClickOutAbout = (e) => {

      let navbarAboutDiv = document.getElementById('navAboutDiv');
      if (!navbarAboutDiv.contains(e.target))
      {
        closeAboutDrop();
      }
    }

    const detectClickOutPortfolio = (e) => {

      let navbarPortfolioDiv = document.getElementById('navPortfolioDiv');
      if (!navbarPortfolioDiv.contains(e.target))
      {
        closePortfolioDrop();
      }
    }

    const detectClickOutContact = (e) => {

      let navbarContactDiv = document.getElementById('navContactDiv');
      if (!navbarContactDiv.contains(e.target))
      {
        closeContactDrop();
      }
    }

    /*------------------------------------------------------------------------------------------------- */

    const darkTheme = {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      border: "2px rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(10px)",
      transition: "background 0.5s ease-out 0s"
    }

    const lightTheme = {
      backgroundColor: "rgba(255, 255, 255, .2)",
      border: "2px rgba(255, 255, 255, .2)",
      backdropFilter: "brightness(1.1) blur(10px)",
      transition: "background 0.5s ease-out"
    }


    useEffect(() => {
        let navBar = document.getElementById("navBarTop");
        let navBarBtn = Array.from(document.getElementsByClassName("navBarBtn"));
        let navBarCols = Array.from(document.getElementsByClassName("col"));
        if (darkMode)
        {
          Object.assign(navBar.style, darkTheme);
          navBarBtn.forEach(element => {
            element.style.color = "white";
          });
          navBarCols.forEach(element => {
            element.style.color = "white";
          });
        }
        else
        {
          Object.assign(navBar.style, lightTheme);
          navBarBtn.forEach(element => {
            element.style.color = "black";
          });
          navBarCols.forEach(element => {
            element.style.color = "black";
          });
        }       
      }, [darkMode])

      useEffect(() => {
        let timer = setInterval(() => setDateTime(new Date()), 1000);
    
        return function cleanup()
        {
          clearInterval(timer);
        }
      }, [])
      

      return (
        <React.Fragment>
          <div className="navBar" id='navBarTop'>
              <div className='col'>
                
                <div className='navbar-info' id='navInfoDiv'>
                  <div className='navbar-info-btn-container'><img id="navimg" src={Logo} onClick={toggleInfoDropdown} /></div>

                  <div className={darkMode ? 'navBarDropdownDark' : 'navBarDropdown'} id={'navbarInfoDrop'}>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} onClick={openInfoWindow}>About This Webpage</a>

                    {/* FOR MEDIA WITH SCREEN SIZE LESS THAN 650PX */}
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} id='navBtnSM' onClick={closeAllWindows} onTouchStart={closeAllWindows}>Close All Windows</a>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} id='navBtnSM' onClick={openAboutWindow} onTouchStart={openAboutWindow}>About Jamil</a>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} id='navBtnSM' onClick={openPortfolioWindow} onTouchStart={openPortfolioWindow}>View Portfolio</a>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} id='navBtnSM' onClick={openContactWindow} onTouchStart={openContactWindow}>Contact Jamil</a>

                  </div>
                </div>

                <div className='focused-window'>
                  <p>{focusedWindow}</p>
                </div>

                <div className='navbar-home' id='navHomeDiv'>
                  <div className='navbar-home-btn-container'><p onClick={toggleHomeDropdown}>Home</p></div>

                  <div className={darkMode ? 'navBarDropdownDark' : 'navBarDropdown'} id={'navbarHomeDrop'}>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} onClick={closeAllWindows}>Close All Windows</a>
                  </div>
                </div>

                <div className='navbar-about' id='navAboutDiv'>
                  <div className='navbar-about-btn-container'><p onClick={toggleAboutDropdown}>About</p></div>

                  <div className={darkMode ? 'navBarDropdownDark' : 'navBarDropdown'} id={'navbarAboutDrop'}>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} onClick={openAboutWindow}>About Jamil</a>
                  </div>
                </div>

                <div className='navbar-portfolio' id='navPortfolioDiv'>
                  <div className='navbar-portfolio-btn-container'><p onClick={togglePortfolioDropdown}>Portfolio</p></div>

                  <div className={darkMode ? 'navBarDropdownDark' : 'navBarDropdown'} id={'navbarPortfolioDrop'}>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} onClick={openPortfolioWindow}>View Portfolio</a>
                  </div>
                </div>

                <div className='navbar-contact' id='navContactDiv'>
                  <div className='navbar-contact-btn-container'><p onClick={toggleContactDropdown}>Contact</p></div>

                  <div className={darkMode ? 'navBarDropdownDark' : 'navBarDropdown'} id={'navbarContactDrop'}>
                    <a className={darkMode ? 'navBarDropdownBtnDark' : 'navBarDropdownBtn'} onClick={openContactWindow}>Contact Jamil</a>
                  </div>
                </div>




              </div>
              
              <div className='col'>
                <ul className='navBarExtras'>
                  <li><button id='darkModeToggle' onClick={toggleTheme}>{darkMode ? <FaMoon style={{color: "white"}}/> : <BsSunFill style={{color: "black"}}/>}</button></li>
                  <li>{dateTime.toLocaleString('default', { month: 'long' }) + ' ' + dateTime.getDate() + ' ' + dateTime.toLocaleTimeString()}</li>
                </ul>
              </div>
          </div>
        </React.Fragment>
      )
}

export default NavBar;