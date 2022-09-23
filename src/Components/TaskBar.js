import React from 'react';
import '../Taskbar.css';
import { ReactComponent as Message } from '../assets/TaskbarIcons/contact-app.svg';
import { ReactComponent as Twitter } from '../assets/TaskbarIcons/twitter-app.svg';
import { ReactComponent as LinkedIn } from '../assets/TaskbarIcons/linkedin-app.svg';
import { ReactComponent as Projects } from '../assets/TaskbarIcons/Projects-app.svg';

function TaskBar(props)
{
  let darkMode = props.Style;

  /*const un_Minimize = (id) => {

    if (id === 'infoWindowContainer')
    {
      props.MinimizeFunction(props.InfoMinimized, props.InfoMinimizeStateSetter);
      console.log('infoWindowContainer unminimized');
    }
    else if (id === 'aboutWindowContainer')
    {
      props.MinimizeFunction(props.AboutMinimized, props.AboutMinimizeStateSetter);
      console.log('aboutWindowContainer unminimized');
    }
    else if (id === 'portfolioWindowContainer')
    {
      props.MinimizeFunction(props.PortfolioMinimized, props.PortfolioMinimizeStateSetter);
      console.log('portfolioWindowContainer unminimized');
    }
    else
    {
      props.MinimizeFunction(props.ContactMinimized, props.ContactMinimizeStateSetter);
      console.log('contactWindowContainer unminimized');
    }

  }*/

  /*const unMinimizeInfoWindow = () => {
    props.MinimizeFunction(props.InfoMinimized, props.InfoMinimizeStateSetter);
  }

  const unMinimizeAboutWindow = () => {
    props.MinimizeFunction(props.AboutMinimized, props.AboutMinimizeStateSetter);
  }*/

  const mouseHoverTaskIcon = (e) => {
      if (e.target.id === 'projects')
      {
        const projects = document.getElementById('taskbarProject');
        projects.classList.toggle('hover');
      }
      else if (e.target.id === 'message')
      {
        const message = document.getElementById('taskbarMessage');
        message.classList.toggle('hover');
      }
      else if (e.target.id === 'linkedin')
      {
        const linkedin = document.getElementById('taskbarLinkedIn');
        linkedin.classList.toggle('hover');
      }
      else if (e.target.id === 'twitter')
      {
        const twitter = document.getElementById('taskbarTwitter');
        twitter.classList.toggle('hover');
      }
  }

  const mouseLeaveTaskIcon = (e) => {
    if (e.target.id === 'projects')
    {
      const projects = document.getElementById('taskbarProject');
      projects.classList.remove('hover');
    }
    else if (e.target.id === 'message')
    {
      const message = document.getElementById('taskbarMessage');
      message.classList.remove('hover');
    }
    else if (e.target.id === 'linkedin')
    {
      const linkedin = document.getElementById('taskbarLinkedIn');
      linkedin.classList.remove('hover');
    }
    else if (e.target.id === 'twitter')
    {
      const twitter = document.getElementById('taskbarTwitter');
      twitter.classList.remove('hover');
    }
  }
  
  /*-------------------------------MINIMIZE FEATURE DISABLED!-----------------------------*/

  /*useEffect(() => {
    let infoWindow = document.getElementById('infoWindow');
    let taskBar = document.getElementById('taskBarNavBottom');

    if (!infoWindow) return;
    if (props.InfoMinimized)
    {
      let newTaskbarDiv = document.createElement('div');
      newTaskbarDiv.className = 'windowContainer';
      newTaskbarDiv.id = 'infoWindowContainer';
      newTaskbarDiv.onclick = () => unMinimizeInfoWindow();
      
      taskBar.appendChild(newTaskbarDiv)
      document.documentElement.style.setProperty('--currentWindow', '--windowPosition_Info: translate(0, 0)');
      document.documentElement.style.setProperty('--windowPosition_Info', infoWindow.style.transform);
      infoWindow.className = 'windowMinimized-info';

      setTimeout(() => {
        newTaskbarDiv.appendChild(infoWindow);
        infoWindow.className = 'windowMinimizedTaskBar-info';
      }, 400);
    }
    else if (!props.InfoMinimized)
    {
      infoWindow.className = 'informationWindow';
      
      document.getElementById('desktopContainer').appendChild(infoWindow);
      document.getElementById('infoWindowContainer').className = 'windowContainer-delete';

      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('infoWindowContainer'));
        taskBar.removeChild(document.getElementById('infoWindowContainer'));
      }, 400)
      
    }
  }, [props.InfoMinimized])


  useEffect(() => {
    let aboutWindow = document.getElementById('aboutWindow');
    let taskBar = document.getElementById('taskBarNavBottom');

    if (!aboutWindow) return;
    if (props.AboutMinimized)
    {
      let newTaskbarDiv = document.createElement('div');
      newTaskbarDiv.className = 'windowContainer';
      newTaskbarDiv.id = 'aboutWindowContainer';
      //newTaskbarDiv.addEventListener('click', () => un_Minimize('aboutWindowContainer'));
      newTaskbarDiv.onclick = () => unMinimizeAboutWindow();
      
      taskBar.appendChild(newTaskbarDiv)
      document.documentElement.style.setProperty('--currentWindow', '--windowPosition_About: translate(0, 0)');
      document.documentElement.style.setProperty('--windowPosition_About', aboutWindow.style.transform);
      aboutWindow.className = 'windowMinimized';

      setTimeout(() => {
        newTaskbarDiv.appendChild(aboutWindow);
        aboutWindow.className = 'windowMinimizedTaskBar';
      }, 400);
    }
    else if (!props.AboutMinimized)
    {
      aboutWindow.className = 'window';
      
      document.getElementById('desktopContainer').appendChild(aboutWindow);
      document.getElementById('aboutWindowContainer').className = 'windowContainer-delete';

      setTimeout(() => {
        taskBar.removeChild(document.getElementById('aboutWindowContainer'));
      }, 400)
      
    }
  }, [props.AboutMinimized])


  useEffect(() => {
    let portfolioWindow = document.getElementById('portfolioWindow');
    let taskBar = document.getElementById('taskBarNavBottom');

    if (!portfolioWindow) return;
    if (props.PortfolioMinimized)
    {
      let newTaskbarDiv = document.createElement('div');
      newTaskbarDiv.className = 'windowContainer';
      newTaskbarDiv.id = 'portfolioWindowContainer';
      newTaskbarDiv.addEventListener('click', () => un_Minimize('portfolioWindowContainer'));
      
      taskBar.appendChild(newTaskbarDiv);
      document.documentElement.style.setProperty('--currentWindow', '--windowPosition_Portfolio: translate(0, 0)');
      document.documentElement.style.setProperty('--windowPosition_Portfolio', portfolioWindow.style.transform);
      
      portfolioWindow.className = 'windowMinimized';

      setTimeout(() => {
        newTaskbarDiv.appendChild(portfolioWindow);
        portfolioWindow.className = 'windowMinimizedTaskBar';
      }, 400);
    }
    else if (!props.PortfolioMinimized)
    {
      portfolioWindow.className = 'window';
      
      document.getElementById('desktopContainer').appendChild(portfolioWindow);
      document.getElementById('portfolioWindowContainer').className = 'windowContainer-delete';

      setTimeout(() => {
        taskBar.removeChild(document.getElementById('portfolioWindowContainer'));
      }, 400)
      
    }
  }, [props.PortfolioMinimized])


  useEffect(() => {
    let contactWindow = document.getElementById('contactWindow');
    let taskBar = document.getElementById('taskBarNavBottom');

    if (!contactWindow) return;
    if (props.ContactMinimized)
    {
      let newTaskbarDiv = document.createElement('div');
      newTaskbarDiv.className = 'windowContainer';
      newTaskbarDiv.id = 'contactWindowContainer';
      newTaskbarDiv.addEventListener('click', () => un_Minimize('contactWindowContainer'));

      taskBar.appendChild(newTaskbarDiv);
      document.documentElement.style.setProperty('--currentWindow', '--windowPosition_Contact: translate(0, 0)');
      document.documentElement.style.setProperty('--windowPosition_Contact', contactWindow.style.transform);
      contactWindow.className = 'windowMinimized';

      setTimeout(() => {
        newTaskbarDiv.appendChild(contactWindow);
        contactWindow.className = 'windowMinimizedTaskBar';
      }, 400);
    }
    else if (!props.ContactMinimized)
    {
      contactWindow.className = 'window';
      
      document.getElementById('desktopContainer').appendChild(contactWindow);
      document.getElementById('contactWindowContainer').className = 'windowContainer-delete';

      setTimeout(() => {
        taskBar.removeChild(document.getElementById('contactWindowContainer'));
      }, 400)
      
    }
  }, [props.ContactMinimized])*/

  const requestWindow = (e) => {
    switch (e.target.id)
    {
      case 'projects':
        props.WindowRequestFunction('Portfolio', 0);
        break;
      case 'message':
        props.WindowRequestFunction('Contact', 0);
        break;
      case 'linkedin':
        props.WindowRequestFunction('Contact', 3);
        break;
      case 'twitter':
        props.WindowRequestFunction('Contact', 2);
        break;
    }
  }


  return (
    <React.Fragment>
      <div className='taskBarContainer' id='taskbarContainer'>
        <div className={darkMode ? 'taskBarNavDark' : 'taskBarNav'} id='taskBarNavBottom'>

          <div className='taskBarIcon' onMouseEnter={mouseHoverTaskIcon} onMouseLeave={mouseLeaveTaskIcon} value='projects' onClick={requestWindow} id="projects">
            <Projects className='taskbarSVG' />
            <div className={darkMode ? 'taskbarHoverIconNameDark' : 'taskbarHoverIconName'} id='taskbarProject'>
              <p>Projects</p>
            </div>
          </div>

          <div className='taskBarIcon' onMouseOver={mouseHoverTaskIcon} onMouseLeave={mouseLeaveTaskIcon} value='message' onClick={requestWindow} id="message">
            <Message className='taskbarSVG' />
            <div className={darkMode ? 'taskbarHoverIconNameDark' : 'taskbarHoverIconName'} id='taskbarMessage'>
              <p>Message</p>
            </div>
          </div>   

          <div className='taskBarIcon' onMouseOver={mouseHoverTaskIcon} onMouseLeave={mouseLeaveTaskIcon} value='linkedin' onClick={requestWindow} id="linkedin">
            <LinkedIn className='taskbarSVG' />
            <div className={darkMode ? 'taskbarHoverIconNameDark' : 'taskbarHoverIconName'} id='taskbarLinkedIn'>
              <p>LinkedIn</p>
            </div>
          </div>

          <div className='taskBarIcon' onMouseOver={mouseHoverTaskIcon} onMouseLeave={mouseLeaveTaskIcon} value='twitter' onClick={requestWindow} id="twitter">
            <Twitter className='taskbarSVG'/>
            <div className={darkMode ? 'taskbarHoverIconNameDark' : 'taskbarHoverIconName'} id='taskbarTwitter'>
              <p>Twitter</p>
            </div>
          </div>

          {/* {(props.InfoMinimized || props.AboutMinimized || props.PortfolioMinimized || props.ContactMinimized) ? <div className='taskbarDivide'></div> : ''} */}
          
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default TaskBar;