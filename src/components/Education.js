import React, { useRef } from "react";
import { useScroll,motion } from "framer-motion";

const Details = ({ education, clg, time, address }) => {
  return (
    <div className="my-8 ml-9 first:mt-0 last:mb-0 w-full mx-auto flex items-center justify-between md:w-[80%]">
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{education}&nbsp;</h3>
        <p className="font-medium text-dark dark:text-light md:text-sm">@{clg}</p>
        <span className="capitalize font-sm w-full text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
      </div>
    </div>
  );
};

const Education = () => {
    const ref = useRef(null)
    const {scrollYprogress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className="my-40 md:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYprogress}} className="absolute -inset-3 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            education="Full-Stack Developer course"
            clg="Sharpener Tech"
            address="Online course."
            time="6+ months"
          />
          <Details
            education="B.tech In electronics and communications"
            clg="Dharmsinh Desai University"
            address="Nadiad, Gujarat."
            time="2016-2019"
          />
          <Details
            education="Diploma In electronics and communications"
            clg="Government Polytechnic For Girls"
            address="Surat, Gujarat."
            time="2013-2016"
          />
          <Details
            education="School"
            clg="L. P. Savani Vidhyabhavan"
            address="Surat, Gujarat."
            time="2016-2019"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
