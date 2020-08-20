import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data, location }) => {
    const { allMarkdownRemark, site } = data;

    const html = allMarkdownRemark.edges[0].node.html;
    const { title } = site.siteMetadata;

    return (
        <Layout centerContent={true} pageTitle={"Home"} location={location} crumbLabel={"Home"}>
            <h1>{title}</h1>
            <main dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    );

}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark (
        filter: { fileAbsolutePath: {regex : "\/index/"} }
        ) {
            edges {
                node {
                    frontmatter {
                    title
                    date
                    }
                    html
                }
            }
        }
    }
`;
