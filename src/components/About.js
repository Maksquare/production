import React from "react";
// import countup
import CountUp from "react-countup";
// import intersection observer hook
import { useInView } from "react-intersection-observer";
// import framer motion
import { motion } from "framer-motion";
// animation variant for framer motion
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          ></motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a Freelancer Frontend developer with over 5 years of
              experience
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              recusandae repellendus doloremque id esse ipsa saepe quisquam.
              Quaerat, minus
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={11} duration={3} /> : null}
                  k+
                </div>

                <div className="font-secondary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  k+
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;