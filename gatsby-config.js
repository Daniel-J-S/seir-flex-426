require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});


module.exports = {
  siteMetadata: {
    title: 'SEIR Flex 04/07 Cyberpunk 2020',
    author: 'DanielJS',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for students currently enrolled in the General Assembly Software Engineering Program',
    keywords: 'software engineer, software engineering, coding, javascript, html, css',
    navigationLinks: [
      {title: 'Home', slug: '/'},
      {title: 'Course Details', slug: '/course-details'},
      /*
        Removing access to coding challenges for the time being
      {title: 'Coding Challenges', slug: '/coding-challenges'},
      
      */
    ],
    homeworkSubmissionLink: {
      title: 'Submit Homework',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSdA1y0h8XSKzYEfnFmADOh7aJU0UoT6DVIX69SwBeGI-qkg0A/viewform'
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: true
      }
    },
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
        name: `Course Materials`,
        path: `${__dirname}/src/course-materials`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            pathname: "/"
          },
          crumbLabel: "/",
          crumbSeperator: " / ",
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `General Assembly - SEIR Flex 04/07 Cyberpunk 2020`,
        short_name: `GA`,
        description: `Our Student-Facing website expressed as a progressive web app!`,
        lang: `en`,
        display: `standalone`,
        icon: `static/ga-logo.svg`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#dc143c`,
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachedPages: [`/`]
      }
    }
  ]
};
