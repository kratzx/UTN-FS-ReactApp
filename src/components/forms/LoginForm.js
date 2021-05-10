import React, { useState } from 'react';

const LoginForm = ({ onSubmitForm }) => {

  const [form, setForm] = useState({
    email:'',
    password:''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form, 
      [name]: value});
  }
  
  return(
    <form onSubmit={(e) => {onSubmitForm(e, form)}}>
      <div>
        <label>Email </label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Contraseña </label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required></input>
      </div>
      <button type="submit"> Logearse </button>
    </form>
  );
}

export default LoginForm;