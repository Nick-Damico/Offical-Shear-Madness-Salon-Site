module.exports = {
  siteMetadata: {
    siteUrl: 'https://shearmadnessbeauty.com/',
    title: 'Shear Madness Beauty Salon',
    slogan: '"Where a Great Haircut is Priceless."',
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    `gatsby-plugin-polyfill-io`,
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-robots-txt'
  ],
}
