import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import SingleBlog from '../../components/SingleBlog/SingleBlog';
import styles from './Blog.module.css';

export default function Blog() {
    const [blog, setBlog] = useState({}); 
    const { blogId } = useParams(); 
    const blogURL = `https://blog-backend-express.herokuapp.com/blogs/${blogId}`;
    useEffect(() => {
        const fetchBlog = async () => {
            console.log(blogId);
            let response = await fetch(blogURL);
            let blog = await response.json()
            setBlog(blog);
            console.log(blog);
        }

        fetchBlog();
    }, [blogId, blogURL])
    return (
        <div>
            <NavBar />
            <div className={styles.mainContainer}>
                <SingleBlog blog={blog}/>
                { blog.relatedLinks && <Aside links={blog.relatedLinks} /> }
            </div>
            <Footer />
        </div>
    )
}
