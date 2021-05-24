import React from 'react';

const UserInfo = ({userData}) => (

  <ul>
    <ol> Nombre: {userData.nombre} </ol>
    <ol> Apellido: {userData.apellido} </ol>
    <ol> Email: {userData.email} </ol>
  </ul>

);

export default UserInfo;