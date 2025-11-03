import React from 'react'

const login = () => {
  return (
    <div>
        <h1>Log In:</h1>
        <h4>Or <a href="./index.html">Register</a> if you Dont have an accunt.</h4>

        <form onsubmit="loginUser(event)" />
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

export default login