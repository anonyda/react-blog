import React from 'react'
// import NavBar from '../../components/NavBar/NavBar'

import Banner from '../../components/Banner/Banner'
import Blogs from '../../components/Blogs/Blogs'
import styles from './Home.module.css';
// import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <div className={styles.home}>
            <Banner />
            <Blogs />
        </div>
    )
}
