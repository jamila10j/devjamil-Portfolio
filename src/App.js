import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import BodyTheme from './Components/BodyTheme';
import Desktop from './Components/Desktop';
import Logo from './assets/Logo/logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  const [darkMode, toggleDarkMode] = useState(false);
  const [focusedWindow, setFocusedWindow] = useState('Desktop');
  const [extWindowRequest, setExtWindowRequest] = useState('')
  const [windowScrub, setWindowScrub] = useState(null);


  const updateTheme = darkMode => {
    toggleDarkMode(darkMode => !darkMode);
  }

  const UpdateFocusedWindow = (windowTitle) => {
    setFocusedWindow(windowTitle);
  }

  const externWindowRequest = (window) => {
    setExtWindowRequest(window);
    setTimeout(() => {
      setExtWindowRequest('');
    }, 200)
  }

  const closeAllWindows = () => {
    setWindowScrub(true);
    setTimeout(() => {
      setWindowScrub(null);
    }, 200)
  }

  useEffect(() => {
    const infoWindow = document.getElementById('infoWindow');
    const aboutWindow = document.getElementById('aboutWindow');
    const portfolioWindow = document.getElementById('portfolioWindow');
    const contactWindow = document.getElementById('contactWindow');

    if (focusedWindow === 'Information')
    {
      infoWindow.style.zIndex = 1301;
      if (aboutWindow !== null) aboutWindow.style.zIndex--;
      if (portfolioWindow !== null) portfolioWindow.style.zIndex--;
      if (contactWindow !== null) contactWindow.style.zIndex--;

    }
    else if (focusedWindow === 'About')
    {
      aboutWindow.style.zIndex = 1301;
      if (infoWindow !== null) infoWindow.style.zIndex--;
      if (portfolioWindow !== null) portfolioWindow.style.zIndex--;
      if (contactWindow !== null) contactWindow.style.zIndex--;

    }
    else if (focusedWindow === 'Portfolio')
    {
      portfolioWindow.style.zIndex = 1301;
      if (infoWindow !== null) infoWindow.style.zIndex--;
      if (aboutWindow !== null) aboutWindow.style.zIndex--;
      if (contactWindow !== null) contactWindow.style.zIndex--;

    }
    else if (focusedWindow === 'Contact')
    {
      contactWindow.style.zIndex = 1301;
      if (infoWindow !== null) infoWindow.style.zIndex--;
      if (aboutWindow !== null) aboutWindow.style.zIndex--;
      if (portfolioWindow !== null) portfolioWindow.style.zIndex--;

    }
    else return;
  }, [focusedWindow])

  useEffect(() => {
    if (loading)
    {
      setTimeout(() => {
        setLoading(false);
      }, 3050);
    
    }
  }, [loading])

  return (
    <React.Fragment>
      {loading ? 
        <div className='boot'>
          <img id='bootImg' src={Logo} />
          <div className='bootLoadBar'>
            <div className='bootProgress' />
          </div>
        </div>

        :

        <div className="App">
          <BodyTheme Style={darkMode}/>
          
          <NavBar 
            UpdateTheme={updateTheme} 
            FocusedWindow={focusedWindow} 
            Style={darkMode} 
            WindowRequester={externWindowRequest} 
            CloseAllWindows={closeAllWindows} />

          <Desktop 
            Style={darkMode}
            UpdateFocusedWindow={UpdateFocusedWindow} 
            ExternalWindowRequest={extWindowRequest} 
            WindowScrub={windowScrub} />

        </div>

      }
    </React.Fragment>
  );
}

export default App;
