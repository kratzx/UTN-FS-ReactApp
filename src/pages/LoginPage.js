import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import loginUser from '../services/loginUser';
import EcommerceContext from '../context/EcommerceContext';

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const context = useContext(EcommerceContext);

  const handleSubmit = (event, form) => {
    event.preventDefault();
    setLoading(true);
    loginUser(form).then((user) => {
      context.loginUser(user);
      setLoading(false);
    });
  }

  if (loading) {
    return (
      <div className='loadingRegister'>
        logging in...
      </div>
    );
  }
  if (context.userLogin) {
    return (
      <Redirect 
      to={{pathname: "/"}}/>
    );
  }
  return (
    <div key='register' className="Register">
      <h2> Formulario de Logeo </h2>
      <LoginForm 
        onSubmitForm={handleSubmit}/>
    </div>
  );
}
export default LoginPage;