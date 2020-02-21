import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.scss';

export default () => (
    <footer className={styles.footer}>
        <p>Copyright &copy; General Assembly {new Date().getFullYear()}</p>
        <section>
            <a href="https://www.facebook.com/generalassembly/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" rel="noopener noreferrer"/>
            </a>
            <a href="https://www.linkedin.com/school/general-assemb-ly/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" rel="noopener noreferrer"/>
            </a>
            <a href="https://twitter.com/GA" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="lg" rel="noopener noreferrer"/>
            </a>
        </section>
    </footer>
);