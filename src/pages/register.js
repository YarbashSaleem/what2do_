import React, {useState, useEffect} from 'react';
import {auth} from '../firebaseConfig';
import {useHistory} from 'react-router-dom';


function Register(){

    const history = useHistory();
    const [failed,setFailed] = useState(false);
    const [err_message,seterr_message] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
           if (user) history.push('/home')
        })
     }, [history])

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password).then(res => {
            history.push('/home');
        }).catch(err =>{
            console.log(err)
            setFailed(true)
            seterr_message(err.message)
        })
    }

    return(
        <div className="signin_container">
            <h1>
                Register your account
            </h1>
            <input type='text' placeholder='Enter your email' value={email} onChange={e => {setEmail(e.currentTarget.value)}}/>
            <input type='password' placeholder='Enter your password' value={password} onChange={e => {setPassword(e.currentTarget.value)}}/>
            <button onClick={register}>Sign Up</button>
            {failed?
                <p>
                    {err_message}
                </p>
                :
                null
            }
        </div>
        
    )
}
export default Register;