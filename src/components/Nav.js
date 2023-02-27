import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
// import links
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* Nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;