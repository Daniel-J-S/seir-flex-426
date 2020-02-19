# GA Classroom Website

|Last Updated | Author |
|:-----------:|:-----------:|
|Feb 18, 2020 | Daniel Scott |

## Technologies
- JavaScript
- React.js
- Gatsby JS
- SCSS
- React CSS Modules
- Netlify



## Struggles

So far one of the biggest breakthroughs I've had with this project is learning and implementing graphQL

Here's a couple queries I recently perfected


```graphql
query {
  allMarkdownRemark (
    	filter: {frontmatter: {track: {eq: "React Fundamentals"}, week: {eq: 1}}}
  		sort: {fields: frontmatter___day }
  	){
    edges {
      node {
    		frontmatter {
          track
          title
          week
          day
          type
        }
      }
    }
  }
}
```


```graphql
query {
  allMarkdownRemark (
    	filter: {frontmatter: {track: {eq: "React Fundamentals"}, day: {eq: 2}}}
  		sort: {fields: frontmatter___day }
  	){
    edges {
      node {
    		frontmatter {
          track
          title
          week
          day
          type
        }
      }
    }
  }
}
```

