import React from 'react';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.title}>
                <span>Web Dev Blog</span>
            </div>
            <img 
                className={styles.bannerImage}
                src="https://images.unsplash.com/photo-1591382696448-3809bb398c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80" 
                alt="Banner" 
            />
        </div>
    )
}
