import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config.js';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './accountPage.css';

export function AccountPage() {
    const user = useSelector((state) => state.account.user);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to='/auth' replace />;
    }

    async function handleSignOut() {
        setError('');
        try {
            await signOut(auth);
            navigate('/');
        } catch {
            setError('Could not sign out. Please try again.');
        }
    }

    let memberSince = 'Not available';

    if (user.createdAt) {
        memberSince = new Date(user.createdAt).toLocaleDateString();
    }

    return (
        <div className='account_page'>
            <Header />

            <main className='account_page__main'>
                <section className='account_card'>
                    <h1 className='account_card__heading'>My account</h1>
                    <p className='account_card__text'>
                        <strong>Email:</strong> {user.email || 'Not provided'}
                    </p>
                    <p className='account_card__text'>
                        <strong>Member since:</strong> {memberSince}
                    </p>

                    {error && <p className='account_card__error'>{error}</p>}

                    <button
                        className='account_card__button'
                        type='button'
                        onClick={handleSignOut}
                    >
                        Sign out
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}
