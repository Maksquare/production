import React from 'react';
// import logo
import Logo from '../assets/logo.svg'

const Header = () => {
  return <div className=' py-8'>
    <div className="container mx-auto ">
      <div className='flex justify-between justify-center'>
      {/* logo */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work With Me</button>
      </div>
    </div>
  </div>;
};

export default Header;
