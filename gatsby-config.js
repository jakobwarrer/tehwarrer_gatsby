module.exports = {
  siteMetadata: {
    title: 'TehWarrer - Home of all things TehWarrer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'amekduggx72e',
        accessToken:
          '6150ba86d294703b2d675c0eaff99144f4d4a1c441ec2c067e3b06687ef8cf35'
      }
    }
  ]
};
