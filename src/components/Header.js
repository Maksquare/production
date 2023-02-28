import React from 'react';
// import logo
import Logo from '../assets/logo.png'

const Header = () => {
  return <div className=' py-8'>
    <div className="container mx-auto ">
      <div className='flex justify-between '>
      {/* logo */}
        <a href="#">
          <img src={Logo} alt=""  className='w-[250px] '/>
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with us</button>
      </div>
    </div>
  </div>;
};

export default Header;
