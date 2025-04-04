import React from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () =>{ 
        localStorage.setItem("authToken" , "1234");
        navigate('/dashboard');
    }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login