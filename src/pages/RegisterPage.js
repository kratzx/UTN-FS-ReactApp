import React, { useState } from 'react';
import registerUser from '../services/registerUser';
import RegisterForm from '../components/forms/RegisterForm';

const RegisterPage = () => {  
  
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event, form) => {
    event.preventDefault();
    setLoading(true);
    registerUser(form).then((success) => {
      setRegistered(success);
      setLoading(false);
    });
  }

  if (!registered && !loading) {
    return (
      <div key='register' className="Register">
        <h2> Formulario de Registro </h2>
        <RegisterForm 
          onSubmitForm={handleSubmit}/>
      </div>
    );
  }
  if (loading) {
    return (
      <div className='loadingRegister'>
        registering...
      </div>
    );
  }
  if (registered) {
    return (
      <div key='registersuccess' className="RegisterSuccess">
        <h2> Usuario registrado con exito! </h2>
      </div>
    );
  }
}
export default RegisterPage;