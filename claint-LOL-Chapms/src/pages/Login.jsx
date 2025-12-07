import { createContext, useContext, useState } from 'react';
import { Link } from 'react-router';

import { useNavigate } from 'react-router';

import { useAuth } from '../context/AuthContext';
import Register from './Register';


const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const[userName,setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = async(e) => {
      e.preventDefault()
      console.log('something....')
      const res = await fetch('http://localhost:5002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: userName, userPassword: userPassword })
      });
      const data = await res.json();
      console.log(data)


      if (data.message === 'Log in Successful!') {
        console.log('HEY WE ARE HERE — WIN!', data);
        login(data.userInfo);
        navigate('/champs');
      } else {
        alert(data.message);
      }
    };

  return (
    <div>
        <h1>Log In:</h1>
        <h2>If you don't have an account: <Link to={'/register'}>Register</Link></h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username"> UserName: </label>
            <input name="username" placeholder="UserName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br />
            <label htmlFor="password"> Password: </label>
            <input type="password" name="password" placeholder="Password"  value={userPassword}  onChange={(e) => setUserPassword(e.target.value)}/>
            <br />
            <br />
            <button type="submit" value="LogIn">Submit</button>
        </form>
        <div style={{border:"3px, solid, purple", margin:"10px"}}>
          <h3>For Demo:</h3>
          <p>UserName: Amit</p>
          <p>Password: 1234</p>
        </div>
    </div>
  )
}

export default Login