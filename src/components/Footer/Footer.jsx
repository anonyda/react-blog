import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTitle}>
                The Web Dev Blog
            </div>
            <div className={styles.footerLinks}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
            </div>
            <div>
                2021 All Rights Reserved
            </div>
        </div>
    )
}
