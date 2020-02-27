import React from 'react';
import { Link } from 'gatsby';

import styles from './nav.module.scss';
import logo from '../../../static/ga-logo.svg';

export default () => (
    <nav className={styles.navWrapper}>
        <Link to="/">
            <img src={logo} alt="General Assembly" />
        </Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/course-details">Course Details</Link>
            </li>
            <li>
                <a href="https://forms.gle/ZhsdJF2JpgvAK41h6" target="_blank" rel="noopener noreferrer">Submit Homework</a>
            </li>
        </ul>
    </nav>
);