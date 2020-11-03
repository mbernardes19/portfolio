import React, { useState } from "react"

import Layout from "./layout"
import theme from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import LanguageContext from '../content/language-context';
import lang from '../content/language';

const PageBase = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(lang.en);

  const value = {currentLang, setCurrentLang}
  
  return (
    <LanguageContext.Provider value={value}>
    <ThemeProvider theme={theme.default}>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
    </LanguageContext.Provider>
  )

}

export default PageBase
