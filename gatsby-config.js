require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});


module.exports = {
  siteMetadata: {
    title: 'GA Student Website',
    author: 'DanielJS',
    currentYear: new Date().getFullYear(),
    description: 'An interactive website for students currently enrolled in the General Assembly Software Engineering Program',
    keywords: 'software engineer, software engineering, coding, javascript, html, css',
    navigationLinks: [
      {title: 'Home', slug: '/'},
      {title: 'Course Details', slug: '/course-details'},
    ],
    homeworkSubmissionLink: {
      title: 'Submit Homework',
      href: 'https://forms.gle/ZhsdJF2JpgvAK41h6'
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
        name: `React Fundamentals`,
        path: `${__dirname}/src/course-materials/react-fundamentals`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
    }
  ]
};
