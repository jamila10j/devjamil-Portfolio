import React from 'react';
import '../ContactModalComponents/LinkedIn.css';
import { BsLinkedin } from 'react-icons/bs'

const LinkedIn = () => {

    const linkedInExt = () => {
        window.open("https://www.linkedin.com/in/jamilabram", "_blank");
    }

    return (
        <React.Fragment>
            <div className='LinkedIn'>
                
                <ul className='cards'>

                    <li>
                        
                        <div className='linkedin-row' id='row1'>
                            
                            <div className='linkedin-card' id='linkedinCard'>
 
                                <div className='linkedin-name'>
                                    <h4>LinkedIn</h4>
                                    <BsLinkedin id='linkedInContact' />
                                </div>

                                <div className='linkedin-external'>
                                    <h3>View my LinkedIn Page</h3>
                                    <ul className='linkedin-options'>
                                        <li>
                                            <BsLinkedin id='linkedInContact' />
                                            Jamil Abram
                                            <div className='arrow' onClick={linkedInExt} />
                                        </li>
                                     </ul>
                                </div>

                            </div>

                        </div>

                    </li>

                </ul>
    
            </div>
        </React.Fragment>
    )   
}

export default LinkedIn;