import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAppError } from '../../redux/features/appError/appErrorSlice';
import { localBlogServerURL, SERVER_ERROR } from '../../utils/constants';
import Blog from '../Blog/Blog';
import Modal from '../Modal/Modal';
import styles from './Blogs.module.css';


export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const blogURL = `${localBlogServerURL}`
    const dispatch = useDispatch();
    const appError = useSelector((state) => state.error)

    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                const response = await fetch(blogURL);
                const blogs = await response.json();
                if(!blogs){
                    dispatch(setAppError({error: true, errorMessage: SERVER_ERROR}))
                }
                setBlogs(blogs);   
            }catch(err){
                console.log(err);
                dispatch(setAppError({error: true, errorMessage: SERVER_ERROR}))
                
            }
        }

        fetchBlogs();
    }, [blogURL, dispatch])
    return (
        <div className={styles.blogs}>
            {blogs.map((blog) => {
                return <Blog blog={blog} key={blog.blogId}/>
            })}
            {appError.isError ? <Modal>{JSON.stringify(appError.errorMessage)}</Modal> : ''}
        </div>
        
    )
}
