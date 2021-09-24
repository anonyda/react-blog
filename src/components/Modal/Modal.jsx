import React from 'react'
import { useDispatch } from 'react-redux'
import { setAppError } from '../../redux/features/appError/appErrorSlice';

import styles from './Modal.module.css'

export default function Modal({children}) {

    const dispatch = useDispatch();

    const dismissError = (e) => {
        dispatch(setAppError(false));
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h3 className={styles.modalTitle}>Oops! There's some error.</h3>
                <p>{children}</p>
                <button onClick={dismissError}>Dismiss</button>
            </div>
        </div>
    )
}
