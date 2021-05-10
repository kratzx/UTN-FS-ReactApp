import React, { useState } from 'react';

const RegisterPage = ({ onSubmitForm }) => {

  const [form, setForm] = useState({
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    passwordConfirm:''
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
        <label>Nombre </label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Apellido </label>
        <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Email </label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Contraseña </label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Confirmar contraseña </label>
        <input type="passwordConfirmation" name="passwordConfirm" value={form.passwordConfirm} onChange={handleChange} required></input>
      </div>
      <button type="submit"> Registrarse </button>
    </form>
  );
}

export default RegisterPage;