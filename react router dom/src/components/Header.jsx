import React from 'react';
import { logo_url } from '../assets/link';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex flex-row w-full'>
      <div className='w-1/5 h-20 flex justify-center items-center'>
        <Link to="/">
          <img
            src={logo_url}
            alt="LOGO"
            className='h-1/2 w-1/4 '
          />
        </Link>
      </div>
      <div className='w-2/4 h-20'>
        <ul className='flex flex-row justify-end'>
          <li className='p-4 transition duration-100 ease-in-out hover:underline hover:scale-110'>
            <NavLink to="/" className={ ({isActive}) => 
              `${isActive ? "text-black font-bold text-xl" : ""}`
            }>
              Home
            </NavLink>
          </li>
          <li className='p-4 transition duration-100 ease-in-out hover:underline hover:scale-110'>
            <NavLink to="/about " className={ ({isActive}) => 
              `${isActive ? "text-black font-bold text-xl" : ""}`
            }>
              About
            </NavLink>
          </li>
          <li className='p-4 transition duration-100 ease-in-out hover:underline hover:scale-110'>
            <NavLink to="/contact-us" className={ ({isActive}) => 
              `${isActive ? "text-black font-bold text-xl" : ""}`
            }>
              Contact
            </NavLink>
          </li>
          <li className='p-4 transition duration-100 ease-in-out hover:underline hover:scale-110'>
            <NavLink to="/github/1" className={ ({isActive}) => 
              `${isActive ? "text-black font-bold text-xl" : ""}`
              }>
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='p-2 mx-auto w-1/4 h-20'>
        <button className='ml-10 mr-0 p-2 my-auto bg-gray-500 rounded-lg text-white'>
          Log In
        </button>
        <button className='p-2 ml-3 my-auto bg-black rounded-lg text-white'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;