module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Desenvolvimento de sites, apps e peças de design gráfico`,
    author: `@mbernardes19`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#536CBD`,
        theme_color: `#536CBD`,
        display: `minimal-ui`,
        icon: `src/images/circle-cropped.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -35
      }
    },
    "gatsby-plugin-netlify-cms"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
