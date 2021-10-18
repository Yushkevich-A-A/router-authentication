import React, { useState, useContext } from 'react';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/Header';
import SocialLogo from '../../Components/SocialLogo/SocialLogo';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

import './AuthPage.css';

function AuthPage(props) {
    const { handlerLogin, handlerDisableError, error, token } = useContext(AuthContext);
    
    return (
            <div className='auth-page'>
                <Header>
                    <AuthForm handlerLogin={handlerLogin} handlerDisableError={handlerDisableError}>
                    { error && <div className="error">{error}</div>}
                    </AuthForm>
                </Header>
                <SocialLogo /> 
                {token && <Redirect to='/news' />}
            </div>
    )
}

export default AuthPage;

