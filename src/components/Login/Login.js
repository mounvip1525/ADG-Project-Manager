import React from 'react';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {

    }

    render() {
        return(
            <div className= { LoginAppModule.innerContainer }>
                <div className={ LoginAppModule.header }>
                    Login
                </div>
                <div className={ LoginAppModule.box }>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="username" className={ LoginAppModule.loginLabel}>Username</label>
                        <input type="text" name="username" placeholder="Username" className={ LoginAppModule.loginInput } />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password" name="password" placeholder="Password" className={ LoginAppModule.loginInput }/>
                    </div>
                    <button type="button" className={ LoginAppModule.loginBtn } onClick={ this.submitLogin.bind(this) }>Log-In!</button>
                </div>
            </div>
        );
    }
}

export default Login;
