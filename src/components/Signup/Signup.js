import React from 'react';
import LoginAppModule from '../LoginApp/LoginApp.module.css';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            password2: ''
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        // console.log(this.state);
        const userProfile = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2
        }
        axios.post("https://adg-project-manager.herokuapp.com", userProfile)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { email, name, password, password2 } = this.state;
        return(
            <div className= { LoginAppModule.innerContainer }>
                <div className={ LoginAppModule.header }>
                    Signup
                </div>
                <div className={ LoginAppModule.box }>
                    <form action="/Signup" method="post" onSubmit={ this.submitHandler }>
                        <div className={ LoginAppModule.inputGroup }>
                            <label htmlFor="email" className={ LoginAppModule.loginLabel}>E-mail id</label>
                            <input type="email" 
                                   name="email" 
                                   placeholder="E-mail" 
                                   value={ email }
                                   className={ LoginAppModule.loginInput } 
                                   onChange={ this.changeHandler }
                            />
                        </div>
                        <div className={ LoginAppModule.inputGroup }>
                            <label htmlFor="username" className={ LoginAppModule.loginLabel}>Username</label>
                            <input type="text" 
                                   name="name" 
                                   placeholder="Username" 
                                   value={ name }
                                   className={ LoginAppModule.loginInput } 
                                   onChange={ this.changeHandler } 
                            />
                        </div>
                        <div className={ LoginAppModule.inputGroup }>
                            <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                            <input type="password" 
                                   name="password" 
                                   placeholder="Password" 
                                   value={ password }
                                   className={ LoginAppModule.loginInput } 
                                   onChange={ this.changeHandler } 
                            />
                        </div>
                        <div className={ LoginAppModule.inputGroup }>
                            <label htmlFor="password" className={ LoginAppModule.loginLabel}>Confirm Password</label>
                            <input type="password" 
                                   name="password2" 
                                   placeholder="Confirm Password" 
                                   value={ password2 }
                                   className={ LoginAppModule.loginInput } 
                                   onChange={ this.changeHandler } 
                            />
                        </div>
                        <button type="button" 
                                className={ LoginAppModule.loginBtn }>
                                    Sign-Up!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
