import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';


export default({ data, location }) => {
    
   const { allMarkdownRemark } = data;

   const lessons = allMarkdownRemark.edges.map(({ node }, idx) => 
      idx !== allMarkdownRemark.edges.length - 1
      ? <Fragment>
          <section key={node.id}>
              <Link to={node.fields.slug}>
                  <h2>{node.frontmatter.title}</h2>
              </Link>
                  <p>{node.frontmatter.topics}</p>
          </section>
          <hr />
        </Fragment>
      : <section key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.topics}</p>
        </section>
   );

    return (
        <Layout pageTitle="React Fundamentals" location={location} crumbLabel={"React Fundamentals"}>
            <h1>React Fundamentals</h1>
            {lessons}
        </Layout>
    );
}

export const query = graphql`
query {
    allMarkdownRemark (
          filter: {frontmatter: {track: {eq: "React Fundamentals"}, 
          type: {eq: "homepage"}}}
            sort: {fields:  [frontmatter___week, frontmatter___day]}
        ){
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            track
            title
            week
            day
            type
            topics
          }
        }
      }
    }
  }
`;
