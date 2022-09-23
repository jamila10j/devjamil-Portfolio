import React from 'react';
import '../ContactModalComponents/Twitter.css';
import { BsTwitter } from 'react-icons/bs'

const Twitter = () => {

    const twitterExt = () => {
        window.open("https://twitter.com/theRealDevJamil", "_blank");
    }

    return (
        <React.Fragment>
            <div className='Twitter'>
                
                <ul className='twitterCards'>

                    <li>
                        
                        <div className='twitter-row' id='row1'>
                            
                            <div className='twitter-card' id='twitterCard'>
 
                                <div className='twitter-name'>
                                    <h4>Twitter</h4>
                                    <BsTwitter id='contactTwitter'/>
                                </div>

                                <div className='twitter-external'>
                                    <h3>View my Twitter Page</h3>
                                    <ul className='twitter-options'>
                                        <li>
                                            <BsTwitter id='contactTwitter' />
                                            @theRealDevJamil
                                            <div className='arrow' onClick={twitterExt} />
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

export default Twitter;