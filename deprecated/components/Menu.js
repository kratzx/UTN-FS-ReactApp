import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="Menu">
    <ul>
      <ol> <Link to={'/'}> Home </Link> </ol>
      <ol> <Link to={'/login'}> Login </Link> </ol>
      <ol> <Link to={'/register'}> Register </Link> </ol>
      <ol> <Link to={'/addproduct'}> Add Product </Link> </ol>
    </ul>
  </div>
)
export default Menu;