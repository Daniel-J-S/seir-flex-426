import React from 'react';
import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import Head from '../components/head';

const IndexPage = ({ data: { contentfulPage }, location }) => {
    const { body: { html } } = contentfulPage;

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
        contentfulPage(page: {eq: "Index"}) {
            page
            title
            body {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`;

export default IndexPage;
