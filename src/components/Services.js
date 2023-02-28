import React from "react";
// import icons
import { BsArrowUpRight } from "react-icons/bs";
import { FaCameraRetro, FaTv, FaFilm, FaUser, FaHome } from 'react-icons/fa'
// import framer-motion
import { motion } from "framer-motion";
// import varient for animation
import { fadeIn } from "../variants";
const Services = () => {
  const services = [
    {
      name: "TV SHOWS",
      description: `We produce tv shows with high quality and low budget`,
      link: "learn more",
    },
    {
      name: "FEATURED MOVIES",
      description: `We produce featured movies with high quality and low budget`,
      link: "learn more",
    },
    {
      name: "MUSIC CLIPS",
      description: `We produce music clips with high quality and low budget`,
      link: "learn more",
    },
    {
      name: "ADVERTISEMENT",
      description: `We produce adverstisment with high quality and low budget`,
      link: "learn more",
    },
  ];
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What We do </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              We are  a production company with over 5 years of
              experience
            </h3>
            <button className="btn btn-sm">See our work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div>
              {services.map((service, idx) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={idx}
                  >
                    {/* services name */}
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}{" "}
                      </p>
                    </div>
                    {/* links */}
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <FaCameraRetro />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
