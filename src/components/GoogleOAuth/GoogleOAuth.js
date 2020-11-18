import React from 'react';
import GoogleLogin from 'react-google-login';
import LoginAppModule from '../LoginApp/LoginApp.module.css';
import axios from 'axios';

class GoogleOAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signup (res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            providerId: 'Google'
        };
        // debugger;
        axios.post('http://adg-project-manager.herokuapp.com/api/user/google', googleresponse)
            .then(result => {
                sessionStorage.setItem("userData", JSON.stringify(result));
                this.props.history.push('/Board');
            })
            .catch(error => {
                console.log(error);
            });
    };

    responseGoogle = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
        // debugger;
        this.signup(response);
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
