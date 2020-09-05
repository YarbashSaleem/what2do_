import React from 'react';
import {Link} from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <div className='login_screen'>
                <div className='login_container'>
                    <h1>
                        Login
                    </h1>
                    <div>
                        <Link className='link' to='/home'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login