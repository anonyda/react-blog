import React from 'react';
import uniqid from 'uniqid';
import styles from './SingleBlog.module.css';

export default function SingleBlog({blog}) {

    return (
        <div className={styles.singleBlog}>
            <img 
                src={blog.blogImage} 
                alt="Blog" 
                className={styles.blogImage}
            />
            <h1 className={styles.blogTitle}>
                {blog.blogTitle}
            </h1>
            <div className={styles.tags}>
                Tags: &nbsp;
                {blog.tags && blog.tags.map((tag) => (
                    <span className={styles.blogTag} key={uniqid()}>{tag},</span>
                ))}
            </div>
            <div className={styles.blogInfo}>
                <div>
                    {blog.author}
                </div>
                <div>
                    {new Date(blog.createdAt).toLocaleString()}
                </div>
            </div>
            
            <p className={styles.blogContent}>
                {blog.blogContent}  
            </p>
            
        </div>
    )
}
// {
//     "blogId": "2qqggl1tkssvw697",
//     "author": "Falak Shaikh",
//     "createdAt": "2021-08-26T12:09:45.630Z",
//     "tags": [
//         "node.js",
//         "image upload"
//     ],
//     "blogTitle": "Node.js Image Uploading",
//     "blogContent": "This blog post explains how to upload images via Node JS",
//     "blogImage": "http://res.cloudinary.com/dovryupcr/image/upload/v1629979808/k1ipkhdcxlmdlgo9mpoe.png",
//     "relatedLinks": [],
//     "__v": 0
// }
