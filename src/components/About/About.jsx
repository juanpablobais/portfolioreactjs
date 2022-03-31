import { t } from 'i18next'
import React from 'react'
import "./about.css"
import { useTranslation } from "react-i18next"
import Aboutimg from "../../images/about.jpeg"
  

const About = () => {
  const [t, i18n,] = useTranslation("about");
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src= {Aboutimg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">{t("h1.a-title.about-me")}</h1>
        <p className="a-sub">
        </p>
        <p className="a-desc">
            {t("p.a-desc.description")}
        </p>
        </div>
    </div>
  )
}

export default About
