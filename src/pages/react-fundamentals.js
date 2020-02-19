import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';


export default({ data }) => {

   const { allMarkdownRemark } = data;

   const lessons = allMarkdownRemark.edges.map(({ node }) => 
      <section key={node.id}>
          <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
          </Link>
              <p>{node.frontmatter.topics}</p>
      </section>
   );

    return (
        <Layout pageTitle="React Fundamentals">
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
            sort: {fields: frontmatter___day }
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
            slug
          }
        }
      }
    }
  }
`;
