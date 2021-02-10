import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutModule from './Logout.module.css';

const Logout = () => {
    const history = useHistory();

    const handleSubmit = function() {
        sessionStorage.clear();
        history.push("/");
    }

    return(
        <div className={ LogoutModule.logout }>
            <button className={ LogoutModule.logoutBtn } onClick={ handleSubmit }>Log-out!</button>
        </div>
    )
}

export default Logout;
