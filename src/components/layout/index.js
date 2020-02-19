import React, { Fragment } from 'react';

import Head from '../head/';
import NavBar from '../nav';
import Footer from '../footer';

import '../../styles/reset.scss';
import styles from './layout.module.scss';

export default ({ pageTitle, children }) => {
    return (
        <Fragment>
            <Head pageTitle={pageTitle} />
            <div className={styles.outerContainer}>
                <NavBar />
                <div className={styles.innerContainer}>
                    { children }
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}