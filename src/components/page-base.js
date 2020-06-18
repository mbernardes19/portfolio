import React, { useState } from "react"

import Layout from "./layout"
import theme from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import LanguageContext from '../content/language-context';
import lang from '../content/language';
import LanguageToggle from './language-toggle';

const PageBase = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(lang.ptBr);
  
  return (
    <LanguageContext.Provider value={currentLang}>
    <ThemeProvider theme={theme.default}>
      <Layout>
<<<<<<< HEAD
        <LanguageToggle setCurrentLanguage={setCurrentLang}/>
=======
        <LanguageToggle setCurrentLanguage={(lang) => setCurrentLang(lang)}/>
>>>>>>> eb6ca70200a615bcf4665d1f4e7505223aba03a7
        {children}
      </Layout>
    </ThemeProvider>
    </LanguageContext.Provider>
  )

}

export default PageBase
