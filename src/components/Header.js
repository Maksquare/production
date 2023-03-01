import React from 'react';
// import logo
import Logo from '../assets/logo.png'

// import  icons
import phone from '../assets/icons/call.png'
import email from '../assets/icons/email.png'

const Header = () => {
  return <div className=' py-8'>
    <div className="container mx-auto ">
      <div className='flex justify-between '>
      {/* logo */}
        <a href="#">
          <img src={Logo} alt=""  className='w-[250px] '/>
        </a>
        {/* button */}
        <button className='work-btn btn btn-sm relative'>Work with us
        
        <div className='info absolute p-10 inset-0 gradient w-[200px]  rounded-md  flex flex-col items-start justify-center gap-y-2 '>
           
          <img  className='w-6' src={email} alt="" />
          <img  className='w-6' src={phone} alt="" />
        </div>
        </button>
      </div>
    </div>
  </div>;
};

export default Header;
