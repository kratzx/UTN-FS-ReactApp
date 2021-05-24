import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import EcommerceContext from '../context/EcommerceContext';

const Header = () => {

  const context = useContext(EcommerceContext);

  return (
    <div className="Header">
      <h1> TP React UTN </h1>
      {context.userLogin
        ? <h2> Logged in as: <UserInfo userData={context.userInfo}/> </h2>
        : <h2> Please log in </h2>
      }
    </div>
  );
}

export default Header;