import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import styles from './Blogs.module.css';


export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    // const blogURL = 'https://blog-backend-express.herokuapp.com/blogs';
    const blogURL = `http://localhost:4000/blogs`

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(blogURL);
            const blogs = await response.json();
            console.log(blogs);
            setBlogs(blogs);
        }

        fetchBlogs();
    }, [blogURL])
    return (
        <div className={styles.blogs}>
            {blogs.map((blog) => {
                return <Blog blog={blog} key={blog.blogId}/>
            })}
        </div>
    )
}
