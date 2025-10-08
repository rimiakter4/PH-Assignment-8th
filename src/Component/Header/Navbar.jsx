import React from 'react';
import navimg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div >
        <div className="navbar bg-base-100 shadow-sm p-3.5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
         <a >Apps</a>
        </li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <Link to='/'>    <div className='flex items-center gap-1.5
    '>
      <img src={navimg} className='w-[50px] hidden lg:block' alt="" />
         <a className="  bg-linear-to-l from-[#9F62F2] to-[#632EE3]  bg-clip-text text-transparent font-bold">HERO.IO</a> </div></Link>


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><li><a>Home</a></li></Link>
      
      <li>
        <a >Apps</a>
      </li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a src="" className="btn bg-linear-to-l lg:w-[120px] w-[120px]   from-[#9F62F2] to-[#632EE3] text-white text-semibold"><FaGithub />Contribute</a>
  </div>
    
</div>
        </div>
    );
};

export default Navbar;