import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from './firebase';
import { useHistory } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    console.log(history);

    function login(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
          history.push("/");
        })
        .catch((error)=> alert(error));
    }

    function register(){
      createUserWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        history.push("/");
      })
      .catch((error)=> alert(error));
    }

    return (
        <div className="login">
           <Link to="/">
             <img 
             className="login__logo" 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
             alt="amazon-logo"/>
           </Link>
           <div className="login__container">
              <h1>Sign in</h1>
              <form>
                <h5>E-mail</h5>
                <input type="email" value={email} 
                onChange={(e)=> setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>

                <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
              </form>
              <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
              </p>
              <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
           </div>
        </div>
    );
}

export default Login;