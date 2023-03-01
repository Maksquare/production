import React from "react";
// import logo
import Logo from "../assets/logo.png";

// import  icons
import phone from "../assets/icons/call.png";
import email from "../assets/icons/email.png";

const Header = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto ">
        <div className="flex justify-between ">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" className="w-[250px] " />
          </a>
          {/* button */}
          <button className="work-btn btn btn-sm relative">
            Work with us
            <div className="info absolute p-2 inset-0 gradient w-[240px] rounded-md  flex flex-col items-start justify-center gap-y-5 ">
              <div className="info-txt flex gap-x-4">
                <img className="w-7 " src={email} alt="" />
                <span className="text-[16px]"> somickk@gmail.com</span>
              </div>
              <div className="info-txt flex gap-x-4">
                <img className="w-7 " src={phone} alt="" />
                <span className="text-[16px]"> +251-911261954</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
