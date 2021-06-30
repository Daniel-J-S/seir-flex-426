import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import LectureCard from '../components/lecture-card';

import styles from '../styles/course-content-display.module.scss';


export default({ data, location }) => {
    
   const { allMarkdownRemark } = data;

   const lessons = allMarkdownRemark.edges.map(({ node }) => 
      <LectureCard 
        key={node.id}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        topics={node.frontmatter.topics} 
      />
   );

    return (
        <Layout
           
          pageTitle="Frontend Fundamentals" 
          location={location} 
          crumbLabel={"Frontend Fundamentals"}>
            <h1>Frontend Fundamentals</h1>
            <main className={styles.main}>  
              {lessons}
            </main>
        </Layout>
    );
}

export const query = graphql`
query {
    allMarkdownRemark (
          filter: {frontmatter: {track: {eq: "Frontend Fundamentals"}, 
          type: {eq: "homepage"}}}
            sort: {fields:  [frontmatter___week, frontmatter___day]}
        ){
      edges {
        node {
          id
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
