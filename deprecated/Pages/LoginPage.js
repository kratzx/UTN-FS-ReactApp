import React from 'react';
import Form from '../../src/components/Form';

const LoginPage = () => {
  const rows = [  
    { label: 'Email',     input:'email'},
    { label: 'Password',  input:'password'}];    
  return (
    <div key='login' className="Login">
      <h2> Formulario de Login </h2>
      <Form rows={rows} buttonText='Log In'/> 
    </div>
  );
}
export default LoginPage;