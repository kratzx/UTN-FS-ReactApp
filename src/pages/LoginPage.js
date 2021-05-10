import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import loginUser from '../services/loginUser';

const LoginPage = () => {

  const [logedin, setLogedin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event, form) => {
    event.preventDefault();
    setLoading(true);
    loginUser(form).then((success) => {
      setLogedin(success);
      setLoading(false);
    });
  }

  if (!logedin && !loading) {
    return (
      <div key='register' className="Register">
        <h2> Formulario de Logeo </h2>
        <LoginForm 
          onSubmitForm={handleSubmit}/>
      </div>
    );
  }
  if (loading) {
    return (
      <div className='loadingRegister'>
        logging in...
      </div>
    );
  }
  if (logedin) {
    return (
      <Redirect 
        to={{pathname: "/"}}/>
    );
  }
}
export default LoginPage;