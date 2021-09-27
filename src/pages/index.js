import React from 'react';
import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Head from '../components/head';

const IndexPage = ({ data, location }) => {
    const { allMarkdownRemark } = data;

    const html = allMarkdownRemark.edges[0].node.html;

    return (
        <>
            <Head pageTitle="Home"/>
                <div style={{margin: '1rem 0 5rem 0'}}>
                    <Breadcrumb 
                        location={location} 
                        crumbLabel={' '}
                    />
                </div>
                <main dangerouslySetInnerHTML={{__html: html}} />
        </>
    );

};

export const query = graphql`
    query {
        allMarkdownRemark (
        filter: { fileAbsolutePath: {regex : "\/index/"} }
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

export default IndexPage;
