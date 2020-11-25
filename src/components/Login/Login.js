import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    let history = useHistory();

    const handleSubmit = function() {
        console.log("Inside handleSubmit");
        document.getElementById("loginForm").addEventListener("submit", async function (e) {
            e.preventDefault();
            console.log("Inside loginForm");
            const user = {name, password};
            const response = fetch({
                method: 'post',
                url: "adg-project-manager.herokuapp.com/user/login",
                data: user
            })
            console.log(response);
            // setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/Board");
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
                        <label htmlFor="name" className={ LoginAppModule.loginLabel}>Username</label>
                        <input type="text"
                               name="name"
                               placeholder="Username" 
                               className={ LoginAppModule.loginInput }
                               onChange={ (e) => setName(e.target.value)}/>
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password"
                               name="password"
                               placeholder="Password"
                               className={ LoginAppModule.loginInput }
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {/* <Link to={`/Board`}> */}
                        <button type="submit"
                            className={ LoginAppModule.loginBtn }
                            onClick={ handleSubmit }>
                            Log-In!
                        </button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

export default Login;
