import React from 'react';
import GoogleLogin from '../GoogleOAuth/GoogleOAuth';
import LoginAppModule from './LoginApp.module.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: true,
            isSignupActive: false
        };
    }

    showLoginBox() {
        this.setState({
            isLoginActive: true,
            isSignupActive: false
        });
    }

    showSignupBox() {
        this.setState({
            isLoginActive: false,
            isSignupActive: true
        });
    }

    render() {
        return(
            <div className={ LoginAppModule.rootContainer }>
                <div className={ LoginAppModule.boxController }>
                    <div className={ LoginAppModule.controller } onClick={this.showLoginBox.bind(this)}>
                        <div className={ (this.state.isLoginActive ? LoginAppModule.selectedController : "") }>
                            Log-In
                        </div>
                    </div>
                    <div className={ LoginAppModule.controller } onClick={this.showSignupBox.bind(this)}>
                        <div className={ (this.state.isSignupActive ? LoginAppModule.selectedController : "") }>
                            Sign-Up
                        </div>
                    </div>
                </div>
                <div className={ LoginAppModule.boxContainer}>
                    {this.state.isLoginActive && <Login />}
                    {/* {this.state.isLoginActive && <GoogleLogin />} */}
                    {this.state.isSignupActive && <Signup />}
                    {/* {this.state.isSignupActive && <GoogleLogin />} */}
                </div>
            </div>

        );
    }
}

export default LoginApp;
