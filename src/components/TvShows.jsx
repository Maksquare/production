import React from "react";
// import framer motion
import { motion } from "framer-motion";
// import animation varient
import { fadeIn } from "../variants";
// import p images
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
// import LInk
import {Link} from 'react-scroll'
const TvShows = () => {
  return (
    <section className="section" id="tvshows">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-[150px] mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
             
                TvShows
              </h2>
              <p className="max-w-sm mb-16">
              Here are some of Tv series that are produced by our production.
              </p>
             
              <button className="btn btn-sm">View all Tv shows</button>
         
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-fll h-full absolute z-40 transition-all duration-300 inset-0 "></div>
              {/* image */}

              <img src={Img2} alt=""  className=" group-hover:scale-125 transition-all duration-500 "/>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">   <span className="text-4xl font-addis  text-gradient"> አደይ </span>  </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">   
                <span className="text-4xl text-white font-dire">   Addey </span>
              </div>
            </div>
          </motion.div>
          <motion.div 
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-[72px]">

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-fll h-full absolute z-40 transition-all duration-300 inset-0 "></div>
              {/* image */}

              <img src={Img3} alt=""  className=" group-hover:scale-125 transition-all duration-500 "/>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">   <span className="text-4xl font-addis  text-gradient">  አደይ </span>  </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">   
                <span className="text-4xl text-white font-dire">  Addey </span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-fll h-full absolute z-40 transition-all duration-300 inset-0 "></div>
              {/* image */}

              <img src={Img1} alt=""  className=" group-hover:scale-125 transition-all duration-500 "/>
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">   <span className="text-4xl font-addis  text-gradient"> ፍቅር እስከ መቃብር </span>  </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">   
                <span className="text-4xl text-white font-dire">Comming Soon </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TvShows;
