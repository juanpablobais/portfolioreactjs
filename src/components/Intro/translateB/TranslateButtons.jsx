import React from 'react'
import { useTranslation } from "react-i18next"
import TStyles from "../translateB/translateButtons.css"

const TranslateButtons = () => {
  const [t, i18n,] = useTranslation("translateButtons");
  return (
      <div className='t-buttons'>
                        <button className='t-b1' onClick={() => i18n.changeLanguage("en")}></button>
                        <button className='t-b2' onClick={()=> i18n.changeLanguage("es")}></button>
                    </div>
  )
}

export default TranslateButtons
