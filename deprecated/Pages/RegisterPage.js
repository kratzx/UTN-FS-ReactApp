import React from 'react';
import Form from '../../src/components/Form';
import Menu from '../../src/components/Menu';

const RegisterPage = () => {
  const rows = [  
    { label: 'First Name',       input:'first_name'}, 
    { label: 'Last Name',        input:'last_name'},
    { label: 'Email',            input:'email'},
    { label: 'Phone',            input:'phone'},
    { label: 'Password',         input:'password'},
    { label: 'Confirm password', input:'password'}
  ];      
  return (
    <div key='register' className="Register">
      <Menu />
      <h2> Formulario de registro </h2>
      <Form rows={rows} buttonText='Register'/> 
    </div>
  );
}
export default RegisterPage;