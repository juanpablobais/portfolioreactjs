import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import intro_en from "./translations/en/intro.json"
import intro_es from "./translations/es/intro.json"
import about_en from "./translations/en/about.json"
import about_es from "./translations/es/about.json"
import productList_en from "./translations/en/productList.json"
import productList_es from "./translations/es/productList.json"
import contact_en from "./translations/en/contact.json"
import contact_es from "./translations/es/contact.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es:{
      intro: intro_es,
      about: about_es,
      productList: productList_es,
      contact: contact_es,
    },
    en:{
      intro: intro_en,
      about: about_en,
      productList: productList_en,
      contact: contact_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);