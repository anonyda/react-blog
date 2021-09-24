import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/Aside/Aside';
import SingleBlog from '../../components/SingleBlog/SingleBlog';
import { setAppError } from '../../redux/features/appError/appErrorSlice';
import { checkError } from '../../utils/checkError';
import styles from './Blog.module.css';
import Modal from '../../components/Modal/Modal';
import { localBlogServerURL } from '../../utils/constants';

export default function Blog() {
    const [blog, setBlog] = useState({}); 
    const { blogId } = useParams(); 
    const blogURL = `${localBlogServerURL}/${blogId}`;
    const appError = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBlog = async () => {
            try{
                let response = await fetch(blogURL);
                let blog = await response.json()
                setBlog(blog);
            }catch(err){
                console.log(err);
                dispatch(setAppError({error: true, errorMessage: checkError(err)}));
            }
        }

        fetchBlog();
    }, [blogId, blogURL, dispatch])
    return (
        <div>
            <div className={styles.mainContainer}>
                <SingleBlog blog={blog}/>
                { blog.relatedLinks && <Aside links={blog.relatedLinks} /> }
            </div>
            {appError.isError ? <Modal>{JSON.stringify(appError.errorMessage)}</Modal> : ''}
        </div>
    )
}
