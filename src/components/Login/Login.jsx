import { useState } from 'react';
import './login.css';
import { validateEmail } from '../../utils/validators/validateEmail';
import { validatePassword } from '../../utils/validators/validatePassword';
import { createAccount } from '../../utils/auth/createAccount';
import { useNavigate } from 'react-router';


export function Login () {
    const [isHasAccount, setIsHasAccount] = useState(false);
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassTouched, setConfirmPassTouched] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const goBack = <button 
    className='back'
    onClick={() => navigate(-1)}
    >⭠ Go back</button>;


    if(isLoading) {
        return <div className='loader'><h1>Loading...</h1></div>
    }

    if (isHasAccount) {
        return (
            <div className='login_wrapper'>
                {goBack}

                <form className='main'>
                    <h1 className='main__heading'>Sign in</h1>

                    <div className='main__wrapper'>
                        <label htmlFor='user_email'>Enter your email:</label>

                        <input
                         id='user_email' 
                         className='main__input_email main__input' 
                         type='email' 
                         name='email' 
                         placeholder='react@gmail.com'
                         onBlur={() => setEmailTouched(true)}
                         onChange={(event) => {
                            setEmail(event.target.value);
                         }}
                         />
                         
                        {emailTouched && validateEmail(email) !== true && (
                            <p className='alarm'>{validateEmail(email)}</p>
                        )}
                    </div>

                    <div className='main__wrapper'>
                        <label htmlFor='user_password '>Enter your password:</label>

                        <input 
                         id='user_password' 
                         className='main__input_password main__input' 
                         type='password' 
                         name='password' 
                         onBlur={() => setPasswordTouched(true)}
                         onChange={(event) => {
                            setPassword(event.target.value);
                         }}
                         />

                        {passwordTouched && validatePassword(password) !== true && (
                            <p className='alarm'>{validatePassword(password)}</p>
                        )}
                    </div>

                    <button 
                    type='submit' 
                    className='main__button'
                    onClick={async () => {
                        isLoading(true);
                        try {
                            const status = await signIn(email, password);
                            navigate(-1);
                        }
                        catch (error) {
                            alert(error);
                        }
                        finally {
                            setIsLoading(false);
                        }
                    }}
                    >Sign in</button>

                    <p className='main__description'>Don't have an account yet?{' '}  
                        <span
                        className='main__router'
                        onClick={() => {setIsHasAccount(isHasAccount => !isHasAccount)}}>
                            Sign up</span>
                    </p>
                </form>
            </div>
        )
    }

    return (
            <div className='login_wrapper'>
                {goBack}
                
                <form className='main'>
                    {console.log(success)}
                    <h1 className='main__heading'>Sign up</h1>

                    <div className='main__wrapper'>
                        <label htmlFor='user_email'>Enter your email:</label>

                        <input
                         id='user_email' 
                         className='main__input_email main__input' 
                         type='email' 
                         name='email' 
                         placeholder='react@gmail.com'
                         onBlur={() => setEmailTouched(true)}
                         onChange={(event) => {
                            setEmail(event.target.value);
                         }}
                         />
                         
                        {emailTouched && validateEmail(email) !== true && (
                            <p className='alarm'>{validateEmail(email)}</p>
                        )}
                    </div>

                    <div className='main__wrapper'>
                        <label htmlFor='user_password'>Enter your password:</label>

                        <input 
                         id='user_password' 
                         className='main__input_password main__input' 
                         type='password' 
                         name='password' 
                         onBlur={() => setPasswordTouched(true)}
                         onChange={(event) => {
                            setPassword(event.target.value);
                         }}
                         />

                        {passwordTouched && validatePassword(password) !== true && (
                            <p className='alarm'>{validatePassword(password)}</p>
                        )}
                    </div>

                    <div className='main__wrapper'>
                        <label htmlFor='confirm_password'>Confirm your password:</label>

                        <input 
                        id='confirm_password' 
                        className='main__input_password main__input' 
                        type='password' 
                        name='passwordConfirm' 
                        onBlur={() => setConfirmPassTouched(true)}
                        onChange={(event) => setConfirmPass(event.target.value)}
                        />

                        {confirmPassTouched && confirmPass !== password && (
                            <p className='alarm'>The passwords don't match</p>
                        )}
                    </div>

                    <button 
                    type='submit' 
                    className='main__button'
                    onClick={async () => {
                        setIsLoading(true);
                        try {
                            const user = await createAccount(email, password);
                            navigate(-1);
                        }
                        catch (error) {
                            alert(error)
                        }
                        finally {
                            setIsLoading(false);
                        }
                    }}
                    >Sign up</button>

                    <p className='main__description'>Do already have an account?{' '}
                        <span
                         className='main__router'
                         onClick={() => {setIsHasAccount(isHasAccount => !isHasAccount)}}>
                            Sign in</span>
                    </p>
                </form>
            </div>
        )
}