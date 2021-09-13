import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

export default function Aside({links}) {
    return (
        <div className={styles.aside}>            
            <h2>Related Links</h2>
            <hr />
            
            {links.map((link) => {
                return (
                    <div className={styles.link} key={link._id}>
                        <Link to={`/${link.href}`}>
                            {link.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
