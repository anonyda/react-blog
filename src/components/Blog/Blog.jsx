import React from 'react'
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import styles from './Blog.module.css';

export default function Blog({blog}) {
    return (
        <Link to={`/${blog.blogId}`}>
            <div className={styles.blog}>
                {blog.blogImage && <img className={styles.blogImage} src={blog.blogImage} alt="Blog" />}
                <div className="blogTags">
                    {blog.tags.map((tag) => (
                        <span className={styles.blogTag} key={uniqid()}>{tag}</span>
                    ))}
                </div>
                <div className={styles.title}>
                    
                        <div className={styles.blogTitle}>
                            {blog.blogTitle}
                        </div>
                    
                </div>
                <div className={styles.blogContent}>
                    {blog.blogContent}
                </div>
            </div>
        </Link>
    )
}
