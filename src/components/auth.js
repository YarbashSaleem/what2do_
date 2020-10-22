import React, { useState, useEffect } from 'react'
import SignIn from '../pages/signin';
import Register from '../pages/register';
import { auth } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/home')
        })
    }, [history])

    return (
        <div className="auth_container">
            {authType === 'signIn' ?
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <SignIn/>
                    <p>New here? <span onClick={() => setAuthType('register')}>Create account.</span></p>
                </div>
                :
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <Register />
                    <p>Have an account? <span onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}
export default Auth;