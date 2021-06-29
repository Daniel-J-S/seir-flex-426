import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ pageTitle }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                }
            }
        }
    `);

    const { title, description, keywords } = site.siteMetadata;

    return (
        <Helmet 
            title={`${pageTitle} | ${title}`}
            meta={[
                { name: 'description', content: description },
                { name: 'keywords', content: keywords }
            ]}
            link={[
                {  
                    rel: "stylesheet", 
                    href: "https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css",
                    integrity: "sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=", 
                    crossorigin: "anonymous" 
                }
            ]}
        />
    );
}