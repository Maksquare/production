import React from "react";
// import images
import Image from "../assets/avatar.png";
// import Icons
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
// import  typeanimation
import { TypeAnimation } from "react-type-animation";
// import framer-mation
import { motion } from "framer-motion";
// import animation variant
import { fadeIn } from "../variants";

// import link
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              Sewmehon <span>Production</span>{" "}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">
                We produce{" "}
                <TypeAnimation
                  className="text-accent"
                  sequence={[
                    "Tv series",
                    4000,
                    "Featured films",
                    4000,
                    "Music clips",
                    4000,
                    "Advertisement",
                    4000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              We are independent production company that specializes in
              high-quality.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact us</button>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="tvshows"
                offset={30}
                className="text-gradient btn-link cursor-pointer"
              >
                Our Portfolio
              </Link>
            </motion.div>
            {/* socilas */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#" className="cursor-pointer">
                <FaFacebook />
              </a>
              <a href="#" className="cursor-pointer">
                <FaInstagram />
              </a>
              <a href="#" className="cursor-pointer">
                <FaTwitter />
              </a>
              <a href="#" className="cursor-pointer">
                <FaPhone />
              </a>
              <a href="#" className="cursor-pointer ">
                <FaLocationArrow />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
