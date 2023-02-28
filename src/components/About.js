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
            <h2 className="h2 text-accent">About us</h2>
            <h3 className="h3 mb-4">
              We are  a production company with over 5 years of
              experience
            </h3>
            <p className="mb-6">

              We are independent production company that specializes in high-quality.
              We are always looking for new and innovative ways to produce  films, tv shows and music videos,
              and  we are always willing to take on new projects.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                  +
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                  +
                </div>

                <div className="font-secondary text-sm tracking-[2px]">
                  Tv <br />
                  Series
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                  +
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Featured <br />
                  Movies
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritiary text-gradient ">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  +
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Music <br />
                  Clips
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact us</button>
              <a href="#" className="text-gradient btn-link">
                Our Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
