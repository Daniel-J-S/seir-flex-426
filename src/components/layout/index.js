import React, { Fragment } from 'react';

import Head from '../head/';
import NavBar from '../nav';
import Footer from '../footer';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import '../../styles/reset.scss';
import styles from './layout.module.scss';

export default ({ 
        pageTitle, 
        children, 
        location, 
        crumbLabel }) => {
    return (
        <Fragment>
            <Head pageTitle={pageTitle} />
            <div className={styles.outerContainer}>
                <NavBar />
                <div className={styles.innerContainer}>
                    <div className={styles.breadContainer}>
                        <Breadcrumb 
                            location={location} 
                            crumbLabel={crumbLabel}
                            crumbStyle={{ color: "#000" }}
                            crumbActiveStyle={{ color: "crimson" }} 
                        />
                    </div>
                    { children }
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}