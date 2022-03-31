import React from 'react'
import "./contact.css"
import Whatsapp from '../../images/whatsapp.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from '../../context'
import { useContext } from 'react'
import { useTranslation } from "react-i18next"


const Contact = () => {
    const [t, i18n,] = useTranslation("contact");
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_z2oncgg', 'template_b7rccea', formRef.current, 'waaLFLAn6K_w4FzRg')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> {t("h1.c-title.title-contact")} </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Whatsapp} 
                        alt="" 
                        className="c-icon" 
                        />
                        <a href="https://wa.me/541122510118?text=hola%20c%C3%B3mo%20est%C3%A1s%20quiero%20comprar%20una%20website" target="_blank">+54 11 22510118</a>
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Github} 
                        alt="" 
                        className="c-icon" 
                        />
                        <a href="https://github.com/juanpablobais"> GitHub</a>
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Linkedin} 
                        alt="" 
                        className="c-icon" 
                        />
                        <a href="https://www.linkedin.com/in/juanpablobais/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    {t("p.c-desc.description")}
                   </p>
                   
                   <form ref={formRef} onSubmit={handleSubmit}>
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                       <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'></textarea>
                       <button className='b-submit'>{t("button.b-submit.send")}</button>
                       {done && "Thanks for your message!"}
                   </form>
            </div>
        </div>
    </div>
  )
}

export default Contact