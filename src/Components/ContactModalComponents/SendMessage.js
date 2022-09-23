import React, { useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import '../ContactModalComponents/SendMessage.css';
import { ReactComponent as MessageSent } from '../../assets/WindowIcons/ContactWindow/SendMessage/MessageSent.svg';

const SendMessage = () => {
    const [sentMessage, setSentMessage] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setSentMessage(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        
    };

    const closeMessageSuccess = () => {
        setSentMessage(false);
    }


    return (
        <React.Fragment>
            <div className='SendMessage'>
                
                <ul className='cards'>

                    <li>
                        
                        <div className='message-row' id='row1'>
                            
                            <div className='send-message-card' id='messageCard'>

                                <div className='innerCard'>

                                    <div className='message-name'>
                                        <h4>Say Hello!</h4>
                                    </div>    

                                    <form className='message-content' ref={form} onSubmit={sendEmail}>
                                        <label>Your Name</label>
                                        <input type="text" name="user_name" placeholder='Enter your name'/>

                                        <label>Email</label>
                                        <input type="email" name="user_email" placeholder='Enter your email address' />

                                        <label>Message</label>
                                        <textarea name="message" placeholder='Your message here...'/>

                                        <input id='messageSend' type="submit" value="Send"/>
                                    </form>

                                </div>

                                    {
                                        sentMessage ? 

                                        <div className='message-success'>
                                        
                                            <AiOutlineClose id='closeSuccessMessage' onClick={closeMessageSuccess}/>

                                            <div className='successTitle'>
                                                <MessageSent id='messageSent' />
                                                <h2>Message Successfully Sent!</h2>
                                            </div>
                                                

                                            <h4>Thank you for messaging me.</h4>
                                            <h4> I will contact you soon!</h4>
                                        </div>
                                        :
                                        ''
                                    }
                                    

                            </div>

                        </div>

                    </li>

                </ul>
    
            </div>
        </React.Fragment>
    )   
}

export default SendMessage;