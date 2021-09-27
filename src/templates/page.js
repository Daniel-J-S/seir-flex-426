import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const Page = ({ data, location }) => {
    const { markdownRemark } = data;
    return (
        <>
        <Head pageTitle={markdownRemark.frontmatter.title} />
        <div style={{margin: '1rem 0 5rem 0'}}>
            <Breadcrumb 
                location={location} 
                crumbLabel={markdownRemark.frontmatter.title} 
            />
        </div>
            <main dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
        </>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug }}) {
            html 
            frontmatter {
                title
            }
        }
    }
`;

export default Page;