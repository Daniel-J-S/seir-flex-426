require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});


module.exports = {
  siteMetadata: {
    title: 'GA Student Website',
    author: 'DanielJS',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for GA Students by Instructors',
    keywords: 'sofware engineer, software engineering, coding, javascript, html, css'
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
};
