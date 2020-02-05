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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page-content`,
        path: `${__dirname}/src/page-content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `course-materials`,
        path: `${__dirname}/src/course-materials`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`
  ]
};
