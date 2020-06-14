import React from "react"

import Layout from "../components/layout"
import theme from '../theme/theme';
import { ThemeProvider } from 'styled-components';

const PageBase = ({ children }) => (
  <ThemeProvider theme={theme.default}>
    <Layout>
      {children}
    </Layout>
  </ThemeProvider>
)

export default PageBase
