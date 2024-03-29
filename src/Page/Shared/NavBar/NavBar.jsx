import { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Providers/Providers';


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
// const [cart]  = useCart()
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/about">About</Link> </li>
    <li> <Link to="/blogs">Blogs</Link> </li>
    <li> <Link to="/services">Services</Link> </li>
    {/* <li> <Link to="/blogs">Blogs</Link> </li> */}
    {
      user?.email ? <> 
      
      <li> <Link to="/booking">My Bookings </Link> </li>   
      
      </>
       :
        <li> <Link to='/register'>Appointment</Link> </li>
    }

  </>

  return (
    <div className="navbar bg-base-100 border-t-4 border-sky-200 h-28 mb-4 mr-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-xl rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
           <img src={logo} alt="" /> 
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl font-bold px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end font-bold">
        {
          user?.email ? <button onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button> :

            
            <Link to="/login" >  <button className="btn btn-outline btn-success font-bold">Login</button> </Link>
        }
      

      </div>
    </div>
  );
};


export default Navbar;