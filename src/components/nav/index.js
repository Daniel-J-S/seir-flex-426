import React from 'react';
import { Link } from 'gatsby';

import styles from './nav.module.scss';
import logo from '../../../static/ga-logo.svg';

export default () => (
    <nav className={styles.navWrapper}>
        <img src={logo} alt="General Assembly" />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <a href="https://forms.gle/ZhsdJF2JpgvAK41h6">Submit Homework</a>
            </li>
        </ul>
    </nav>
);