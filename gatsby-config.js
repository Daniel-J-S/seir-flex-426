module.exports = {
  siteMetadata: {
    title: 'GA Student Website',
    author: 'DanielJS',
    currentYear: new Date.getFullYear(),
    description: 'An interactive website for GA Students by Instructors'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
}
