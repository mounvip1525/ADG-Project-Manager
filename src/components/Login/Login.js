import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let history = useHistory();

    const handleSubmit = function() {
        document.getElementById("loginForm").addEventListener("submit", async function (e) {
            e.preventDefault();
            const user = {email, password};
            fetch("https://adg-project-manager.herokuapp.com/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(function(response) {
                if(response.status === 200)
                    return response.json();
                else
                    throw Error(response.statusText);
            })
            .then(function(data) {
                // console.log(data);
                // console.log("data", data.tokens[data.tokens.length - 1].token);
                sessionStorage.setItem("token", data.tokens[data.tokens.length - 1].token);
                history.push("/Board");
            })
            .catch(error => {
                alert("Invalid login credentials!", error);
            })
        })   
    }

    return(
        <div className= { LoginAppModule.innerContainer }>
            <div className={ LoginAppModule.header }>
                Login
            </div>
            <div className={ LoginAppModule.box }>
                <form method="post" id="loginForm">
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="name" className={ LoginAppModule.loginLabel}>E-mail</label>
                        <input type="email"
                               name="email"
                               placeholder="E-mail" 
                               className={ LoginAppModule.loginInput }
                               onChange={ (e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password"
                               name="password"
                               placeholder="Password"
                               className={ LoginAppModule.loginInput }
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit"
                        className={ LoginAppModule.loginBtn }
                        onClick={ handleSubmit }>
                        Log-In!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
