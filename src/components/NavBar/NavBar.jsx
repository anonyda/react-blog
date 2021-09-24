import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/user/userSlice';

export default function NavBar() {
    const [navToggle, setNavToggle] = useState(false);
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    function navToggleFunc(){
        setNavToggle(!navToggle);
    }
    const logoutUser = () => {
        dispatch(logout());
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
                    {isUserLoggedIn ? 
                    <>
                        <li className={styles.navItem}>
                            <p className='link' onClick={logoutUser}>
                                Logout
                            </p>
                        </li>
                        <li className={styles.navItem}>
                            <p>
                                Hi, {user.firstName}
                            </p>
                        </li>
                    </>
                    :
                    <>
                        <li className={styles.navItem}>
                            <Link className='link' to='/signup'>
                                Sign Up
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link className='link' to='/login'>
                                Login
                            </Link>
                        </li>
                    </>}
                    
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
