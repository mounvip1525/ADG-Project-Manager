import React from 'react';
import LoginAppModule from '../LoginApp/LoginApp.module.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            password2: "",
            errors: []
        };
    }

    showValidationError(element, message) {
        this.setState(
            (prevState) => (
                { errors: [...prevState.errors, {element, message}] }
            )
        );
    }

    clearValidationError(element) {
        this.setState(
            (prevState) => {
                let newArray = [];
                for(let err of prevState.errors) {
                    if(element !== err.element) {
                        newArray.push(err);
                    }
                }
                return newArray;
            }
        );
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
        this.clearValidationError("email");
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
        this.clearValidationError("name");
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
        this.clearValidationError("password");
    }

    onPassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
        this.clearValidationError("password2");
    }

    submitSignup(e) {

    }

    render() {
        return(
            <div className= { LoginAppModule.innerContainer }>
                <div className={ LoginAppModule.header }>
                    Signup
                </div>
                <div className={ LoginAppModule.box }>
                    <form action="/Signup" method="post">
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="email" className={ LoginAppModule.loginLabel}>E-mail id</label>
                        <input type="email" 
                               name="email" 
                               placeholder="E-mail" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onEmailChange.bind(this) }
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="username" className={ LoginAppModule.loginLabel}>Username</label>
                        <input type="text" 
                               name="name" 
                               placeholder="Username" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onNameChange.bind(this) } 
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password" 
                               name="password" 
                               placeholder="Password" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onPasswordChange.bind(this) } 
                        />
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Confirm Password</label>
                        <input type="password" 
                               name="password2" 
                               placeholder="Confirm Password" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onPassword2Change.bind(this) } 
                        />
                    </div>
                    <button type="button" className={ LoginAppModule.loginBtn } onClick={ this.submitSignup.bind(this) }>Sign-Up!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
