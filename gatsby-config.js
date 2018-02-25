require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'TehWarrer - Home of all things TehWarrer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          '.scss': { syntax: `postcss-scss` }
        }
      }
    }
  ]
};
