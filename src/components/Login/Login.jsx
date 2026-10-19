import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { signIn } from '../../utils/auth/signIn.js';
import { createAccount } from '../../utils/auth/createAccount.js';
import { getAccountDetails } from '../../utils/auth/getAccountDetails.js';
import { setUser } from '../../store/accountSlice.js';
import { validateEmail } from '../../utils/validators/validateEmail.js';
import { validatePassword } from '../../utils/validators/validatePassword.js';
import './login.css';

export function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    let confirmPasswordError = 'The passwords do not match';

    if (confirmPassword === password) {
        confirmPasswordError = true;
    }

    async function handleSubmit() {
        setEmailTouched(true);
        setPasswordTouched(true);
        if (!isSignIn) {
            setConfirmPasswordTouched(true);
        }

        if (emailError !== true) {
            return;
        }

        if (passwordError !== true) {
            return;
        }

        if (!isSignIn && confirmPasswordError !== true) {
            return;
        }

        setError('');
        setIsSubmitting(true);
        try {
            let user;

            if (isSignIn) {
                user = await signIn(email, password);
            } else {
                user = await createAccount(email, password);
            }

            dispatch(setUser(getAccountDetails(user)));
            navigate('/account');
        } catch (authError) {
            setError(authError.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    function toggleForm() {
        setIsSignIn((previousValue) => !previousValue);
        setConfirmPassword('');
        setConfirmPasswordTouched(false);
        setError('');
    }

    return (
        <div className='login_wrapper'>
            <button className='back' type='button' onClick={() => navigate(-1)}>
                ⭠ Go back
            </button>

            <form className='main' onSubmit={handleSubmit}>
                <h1 className='main__heading'>{isSignIn ? 'Sign in' : 'Sign up'}</h1>

                <div className='main__wrapper'>
                    <label htmlFor='user_email'>Enter your email:</label>
                    <input
                        id='user_email'
                        className='main__input_email main__input'
                        type='email'
                        name='email'
                        placeholder='react@gmail.com'
                        value={email}
                        onBlur={() => setEmailTouched(true)}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {emailTouched && emailError !== true && (
                        <p className='alarm'>{emailError}</p>
                    )}
                </div>

                <div className='main__wrapper'>
                    <label htmlFor='user_password'>Enter your password:</label>
                    <input
                        id='user_password'
                        className='main__input_password main__input'
                        type='password'
                        name='password'
                        value={password}
                        onBlur={() => setPasswordTouched(true)}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {passwordTouched && passwordError !== true && (
                        <p className='alarm'>{passwordError}</p>
                    )}
                </div>

                {!isSignIn && (
                    <div className='main__wrapper'>
                        <label htmlFor='confirm_password'>Confirm your password:</label>
                        <input
                            id='confirm_password'
                            className='main__input_password main__input'
                            type='password'
                            name='passwordConfirm'
                            value={confirmPassword}
                            onBlur={() => setConfirmPasswordTouched(true)}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        {confirmPasswordTouched && confirmPasswordError !== true && (
                            <p className='alarm'>{confirmPasswordError}</p>
                        )}
                    </div>
                )}

                {error && <p className='alarm main__error'>{error}</p>}

                <button
                    type='submit'
                    className='main__button'
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Please wait...' : isSignIn ? 'Sign in' : 'Sign up'}
                </button>

                <p className='main__description'>
                    {isSignIn ? "Don't have an account yet? " : 'Already have an account? '}
                    <button className='main__router' type='button' onClick={toggleForm}>
                        {isSignIn ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </form>
        </div>
    );
}