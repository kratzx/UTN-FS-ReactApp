import React, {useContext} from 'react';
import EcommerceContext from '../context/EcommerceContext'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const context = useContext(EcommerceContext);

  if (context.userLogin) {
    return (
      <div className="topnav">
        <div className="navitem"><Link to={'/'}> Home </Link> </div>
        <div className="navitem" onClick={context.logoutUser}><Link to={'/'}> Logout </Link></div>
        <div className="navitem"><Link to={'/addproduct'}> Add Product </Link> </div>
      </div> 
    );
    }
  return (
    <div className="topnav">
      <div className="navitem"><Link to={'/'}> Home </Link> </div>
      <div className="navitem"><Link to={'/login'}> Login </Link></div>
      <div className="navitem"><Link to={'/register'}> Register </Link> </div>
    </div> 
  );  
}
export default Navbar;