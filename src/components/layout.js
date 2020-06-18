/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import ThemeContext from '../theme/theme-context'
import FeatureToggle from "./feature-toggle"

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.primaryColor }}>
      <FeatureToggle disabled>
        <Header />
      </FeatureToggle>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '960px',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>

        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
