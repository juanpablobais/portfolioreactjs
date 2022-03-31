import React from 'react';
import "./Intro.css";
import Profile from '../../images/profile3.png'
import { useTranslation } from "react-i18next"
import TranslateButtons from './translateB/TranslateButtons';

const Intro = () => {
    const [t, i18n,] = useTranslation("intro");

  return (
    <div>
        
        <div className='i'>
        <TranslateButtons/>
            <div className="i-left">
            
                <div className="i-left-wrapper">
                    
                    <h2 className='i-intro'>{t("h2.intro.welcome-to")} </h2>
                    <h1 className='i-name'>Who&Pablo</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">{t("div.i-title-item.web-developer")}</div>
                            <div className="i-title-item">Freelancer</div>
                            <div className="i-title-item">{t("div.i-title-item.self-taught-person")}</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        {t("p.i-desc.presentation")}
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                
                <img src= {Profile} alt={""} className="i-img" />
            </div>
        </div>
    </div>
  )
}

export default Intro