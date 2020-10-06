import React from 'react';
import GoogleLogin from 'react-google-login';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

class GoogleOAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitGoogleOAuth(e) {

    }

    responseGoogle = (res) => {
        console.log(res);
        console.log(res.profileObj);
    }

    render() {
        return(
            <div>
                <GoogleLogin
                    clientId = "http://861672875050-13djnn0pkqsovr4c4daijvu8vmntolg8.apps.googleusercontent.com/"
                    buttonText = "Authorize with Google!"
                    className = { LoginAppModule.loginBtn }
                    onSuccess = { this.responseGoogle }
                    onFailure = { this.responseGoogle }
                    cookiePolicy = { 'single_host_origin' }
                />
            </div>
        );
    }
}

export default GoogleOAuth;