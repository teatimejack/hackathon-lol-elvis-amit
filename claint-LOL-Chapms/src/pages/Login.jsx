import React ,{useEffect, useState} from 'react'

const Login = () => {

  const[user,setUser] = useState();

  useEffect(() => {
      const fetchAll = async () => {
        const res = await fetch(`http://localhost:5002/users/${inputUser}`);
        const data = await res.json();
        if(!data.length>0){
           return data.message;
        }
        if(data.password !== inputPassword){
          return "WRONG PASSWORD"
        }
      setUser(data[0])
    }, []);

  return (
    <div>
        <h1>Log In:</h1>
        <h4>Or <a href="./index.html">Register</a> if you Dont have an accunt.</h4>

        <form onsubmit="" />
            <label for="username"> UserName: </label>
            <input name="username" placeholder="UserName" />
            <br />
            <label for="password"> Password: </label>
            <input type="password" name="password" placeholder="Password" />
            <br />
            <br />
            <input type="submit" value="LogIn" />
        <form/>

    </div>
  )
}

export default Login