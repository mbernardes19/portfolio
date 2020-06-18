import React from "react"

import Layout from "./layout"
import theme from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import LanguageContext from '../content/language-context';
import lang from '../content/language';

const PageBase = ({ children }) => {
  
  return (
    <LanguageContext.Provider value={lang.ptBr}>
    <ThemeProvider theme={theme.default}>
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
    </LanguageContext.Provider>
  )

}

export default PageBase
