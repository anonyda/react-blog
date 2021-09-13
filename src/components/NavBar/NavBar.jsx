import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [navToggle, setNavToggle] = useState(false);
    function navToggleFunc(){
        console.log('nav clicked')
        setNavToggle(!navToggle);
    }
    return (
        <div className={styles.nav}>
            <Link to='/'><div className={styles.logo}>WDB</div></Link>
            <div className={styles.navLinks}>
                <ul className={navToggle? `${styles.navList} ${styles.active}` :styles.navList}>
                    <li className={styles.navItem}>
                        <Link className='link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className='link' to='/'>
                            About
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className='link' to='/'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div onClick={navToggleFunc} className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>

        </div>
    )
}
