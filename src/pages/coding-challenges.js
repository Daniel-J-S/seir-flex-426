import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

 const CodingChallenges = ({ data, location }) => {
    const { allMarkdownRemark } = data;

    const html = allMarkdownRemark.edges[0].node.html;

    return (
        <>
            <Head pageTitle="Coding Challenges"/>
            <div style={{margin: '1rem 0 5rem 0'}}>
                <Breadcrumb 
                    location={location} 
                    crumbLabel="Coding Challenges"
                />
            </div>
            <main dangerouslySetInnerHTML={{__html: html}} />
        </>
    );

}

export default CodingChallenges;

export const query = graphql`
    query {
        allMarkdownRemark (
        filter: { fileAbsolutePath: {regex : "\/coding-challenges/"} }
        ) {
            edges {
                node {
                    frontmatter {
                    title
                    }
                    html
                }
            }
        }
    }
`;

