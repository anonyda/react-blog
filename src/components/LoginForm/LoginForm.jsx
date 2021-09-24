import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { login } from '../../redux/features/user/userSlice';
import { loginServerURL } from '../../utils/constants';
import styles from './Login.module.css';
import { setAppError } from '../../redux/features/appError/appErrorSlice';
import Modal from '../Modal/Modal';
import { checkError } from '../../utils/checkError';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const isAppError = useSelector((state) => state.error);

    const dispatch = useDispatch();
    const history = useHistory();

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const loginURL = `${loginServerURL}/login`
    const validateForm = () => {
        return email.length > 0 && password.length > 4
    }

    const loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch(loginURL, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userEmail: email,
                userPassword: password
            })
        });
        let data = await response.json()
        if(data.error){
            dispatch(setAppError({error: true, errorMessage: checkError(data.error)}));
            return;
        }
        dispatch(login(data.user));
        history.push('/');

    }
    return (
        <>
            <div className={styles.login}>
            <h1>Log In To Web Dev Blog</h1>

                <form onSubmit={loginUser}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        name="email" 
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <div className={styles.passWrapper}>
                        <input 
                            type={passwordShown ? 'text' : 'password'}
                            name="email"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i onClick={togglePasswordVisiblity}><FontAwesomeIcon icon={faEye} /></i>
                    </div>
                    <button disabled={!validateForm()}>Login</button>
                    <p className={styles.cueText}>Don't have an account? <Link to = '/signup'>Sign Up.</Link></p>
                </form>
                {isAppError.isError ? <Modal> {JSON.stringify(isAppError.errorMessage)} </Modal> : ''}
            </div>
        </>
    )
}
