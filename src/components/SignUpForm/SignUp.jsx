import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { loginServerURL } from "../../utils/constants";
import { login } from '../../redux/features/user/userSlice';
import { setAppError } from "../../redux/features/appError/appErrorSlice";
import { checkError } from "../../utils/checkError";
import Modal from "../Modal/Modal";
import styles from '../LoginForm/Login.module.css';

export default function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const isAppError = useSelector((state) => state.error);


    const dispatch = useDispatch();
    const history = useHistory();

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const signUpURL = `${loginServerURL}/signup`;

    const validateForm = () => {
        return firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 4
    }

    const signUpUser = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch(signUpURL, {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    userEmail: email,
                    userPassword: password
                })
            });
            let data = await response.json()
            if(data.error){
                dispatch(setAppError({error: true, errorMessage: checkError(data.error)}));
                return;
            }
            dispatch(login(data.data));
            history.push('/');
        }catch(err){
            dispatch(setAppError({error: true, errorMessage: checkError(err)}));
        }
        
    }

    return(
        <>
            <div className={styles.login}>
                <h1>Sign Up For The Web Dev Blog</h1>
                <form onSubmit={signUpUser}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        autoFocus
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email"
                        required
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
                   <button disabled={!validateForm()}>Sign Up</button>
                   <p className={styles.cueText}>Already have an account? <Link to = '/login'>Log In.</Link></p>
                </form>
                {isAppError.isError ? <Modal> {JSON.stringify(isAppError.errorMessage)} </Modal> : ''}
            </div>
        </>
    )
}