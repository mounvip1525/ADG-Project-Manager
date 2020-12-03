import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [user, setUser] = useState('');

    const history = useHistory();

    const handleSubmit = function() {
        // console.log("Inside handleSubmit");
        document.getElementById("signupForm").addEventListener("submit", async function (e) {
            e.preventDefault()
            // console.log("Inside signupForm");
            const user = {email, password, password2, name};
            await fetch('https://adg-project-manager.herokuapp.com/api/user/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(user)
            })
            .then(function (response) {
                // console.log(response);
                // console.log(response.message);
                // console.log(response.token);
                if(response.status == 200)
                    return response.json();
                else
                    throw Error(response.statusText);
            }).then(data => {
                // console.log(data);
                // console.log(data.token);
                sessionStorage.setItem("token", data.token);
                history.push("/Board");
            }).catch(error => console.log(error))
        })
    }

    return(
        <div className={ LoginAppModule.innerContainer }>
            <div className={ LoginAppModule.header }>
                Signup
            </div>
            <div className={ LoginAppModule.box }>
                <form method="post" id="signupForm">
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="email" className={ LoginAppModule.loginLabel}>E-mail id</label>
                        <input type="email" 
                                name="email" 
                                placeholder="E-mail" 
                                value={ email }
                                className={ LoginAppModule.loginInput } 
                                onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="username" className={ LoginAppModule.loginLabel}>Username</label>
                        <input type="text" 
                                name="name" 
                                placeholder="Username" 
                                value={ name }
                                className={ LoginAppModule.loginInput } 
                                onChange={ (e) => setName(e.target.value) } 
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password" 
                               name="password" 
                               placeholder="Password" 
                               value={ password }
                               className={ LoginAppModule.loginInput } 
                               onChange={ (e) => setPassword(e.target.value) }
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Confirm Password</label>
                        <input type="password" 
                               name="password2" 
                               placeholder="Confirm Password" 
                               value={ password2 }
                               className={ LoginAppModule.loginInput } 
                               onChange={ (e) => setPassword2(e.target.value) }
                        />
                    </div>
                    {/* <Link to={`/Board`}> */}
                        <button type="submit"
                                onClick={ handleSubmit } 
                                className={ LoginAppModule.loginBtn }>
                                    Sign-Up!
                        </button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

export default Signup;

