import React from "react";
// import icons

import { FaMusic, FaTv, FaFilm, FaUser, FaHome, FaServicestack } from 'react-icons/fa'

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
            <FaHome />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <FaUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="tvshows"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <FaTv />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="films"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <FaFilm />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="music"
            className="cursor-pointer w-[60px] h-[60px] flex items-center"
          >
            <FaMusic />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
