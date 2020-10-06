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
            errors: [],
            passwordStrength: null
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

        this.setState({
            passwordStrength: "weak"
        });

        if(e.target.value.length > 6) {
            this.setState({
                passwordStrength: "medium"
            });
        }
        else if(e.target.value.length > 10) {
            this.setState({
                passwordStrength: "strong"
            });
        }
    }

    onPassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
        this.clearValidationError("password2");
    }

    submitSignup(e) {
        if(this.state.email === "") {
            this.showValidationError("email", "Email cannot be empty!!!");
        }
        if(this.state.name === "") {
            this.showValidationError("name", "Username cannot be empty!!!");
        }
        if(this.state.password === "") {
            this.showValidationError("password", "Password cannot be empty!!!");
        }
        if(this.state.password2 === "") {
            this.showValidationError("password2", "Conform Password cannot be empty!!!");
        }
    }

    render() {
        let emailError = null, nameError = null, passwordError = null, password2Error = null;
        for(let err of this.state.errors) {
            if(err.element === "email") {
                emailError = err.message;
            }
            if(err.element === "name") {
                nameError = err.message;
            }
            if(err.element === "password") {
                passwordError = err.message;
            }
            if(err.element === "password2") {
                password2Error = err.message;
            }
        }

        let passwordWeak = false, passwordMedium = false, passwordStrong = false;
        if(this.state.passwordStrength === "weak") {
            passwordWeak = true;
        }
        if(this.state.passwordStrength === "medium") {
            passwordWeak = true;
            passwordMedium = true;
        }
        if(this.state.passwordStrength === "strong") {
            passwordWeak = true;
            passwordMedium = true;
            passwordStrong = true;
        }

        return(
            <div className= { LoginAppModule.innerContainer }>
                <div className={ LoginAppModule.header }>
                    Signup
                </div>
                <div className={ LoginAppModule.box }>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="email" className={ LoginAppModule.loginLabel}>E-mail id</label>
                        <input type="email" 
                               name="email" 
                               placeholder="E-mail" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onEmailChange.bind(this) }
                        />
                        <small className={LoginAppModule.dangerError}>{emailError ? emailError : null}</small>
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="username" className={ LoginAppModule.loginLabel}>Username</label>
                        <input type="text" 
                               name="name" 
                               placeholder="Username" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onNameChange.bind(this) } 
                        />
                        <small className={LoginAppModule.dangerError}>{nameError ? nameError : null}</small>
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Password</label>
                        <input type="password" 
                               name="password" 
                               placeholder="Password" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onPasswordChange.bind(this) } 
                        />
                        <small className={LoginAppModule.dangerError}>{passwordError ? passwordError : null}</small>
                        {this.state.password && <div className={LoginAppModule.passwordState}>
                                <div className={LoginAppModule.pwd + LoginAppModule.pwdWeak + (passwordWeak ? LoginAppModule.show : null)}></div>
                                <div className={LoginAppModule.pwd + LoginAppModule.pwdMedium + (passwordMedium ? LoginAppModule.show : null)}></div>
                                <div className={LoginAppModule.pwd + LoginAppModule.pwdStrong + (passwordStrong ? LoginAppModule.show : null)}></div>
                            </div>
                        }
                    </div>
                    <div className={ LoginAppModule.inputGroup }>
                        <label htmlFor="password" className={ LoginAppModule.loginLabel}>Confirm Password</label>
                        <input type="password" 
                               name="password2" 
                               placeholder="Confirm Password" 
                               className={ LoginAppModule.loginInput } 
                               onChange={ this.onPassword2Change.bind(this) } 
                        />
                        <small className={LoginAppModule.dangerError}>{password2Error ? password2Error : null}</small>
                    </div>
                    <button type="button" className={ LoginAppModule.loginBtn } onClick={ this.submitSignup.bind(this) }>Sign-Up!</button>
                </div>
            </div>
        );
    }
}

export default Signup;
