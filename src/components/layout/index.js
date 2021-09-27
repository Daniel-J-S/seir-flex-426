import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import NavBar from '../responsiveNav';
import Footer from '../footer';
import Search from '../search';

import '../../styles/base.scss';

import * as styles from './layout.module.scss';
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css';

const Layout = ({ children  }) => {

        const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    navigationLinks {
                        title
                        slug
                    }
                    homeworkSubmissionLink {
                        title
                        href
                    }
                }
            }
        }
    `);

    return (
        <Fragment>
            <div className={styles.outerContainer}>
                <NavBar 
                    title={site.siteMetadata.title}
                    navigationLinks={site.siteMetadata.navigationLinks}
                    homeworkSubmissionLink={site.siteMetadata.homeworkSubmissionLink}
                />
                <div 
                    className={styles.innerContainer}>
                    <Search />
                    { children }
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Layout;