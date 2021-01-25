module.exports = {
  siteMetadata: {
    title: `Samuel Tonini - Praxis für Chinesische Medizin`,
    description: `Samuel Tonini - Praxis für Chinesiche Medizin in Bern. Akupunktur & Tuina`,
    author: `@gatsbyjs`,
    twitterUsername: `samueltonini`
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel`,
          `Lora\:300,400,400i,700`,
          `Ma Shan Zheng`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // googleAnalytics: {
        //   trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        //   // Setting this parameter is optional
        //   anonymize: true
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        environments: ['production', 'development']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
