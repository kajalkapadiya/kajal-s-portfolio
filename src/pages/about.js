import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MyProfile from "../../public/images/profile/myPic.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skill";
import Education from "@/components/Education";
import Transition from "@/components/Transition";

// const AnimatedNumber = ({ value }) => {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const sringValue = useSpring(motionValue, { duration: 3000 });
//   const isInView = useInView({ ref });

//   useEffect(() => {
//     if (isInView.set(value));
//   }, [isInView, value, motionValue]);

//   useEffect(() => {
//     springValue.on("change", (latest) => {
//       console.log(latest);
//       if (ref.current && latest.toFixed(0) <= value) {
//         ref.current.value == latest.toFixed(0);
//       }
//     });
//   }, [springValue, value]);

//   return <span ref={ref}></span>;
// };

const about = () => {
  return (
    <>
      <Head>
        <title>Kajal Kapadiya | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Chasing Professional Dreams!"
            className="mb-16 !text-7xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-7 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:order-2 md:col-span-8 xl:col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Bio
              </h2>
              <p className="font-medium">
                {"Hey there, I'm Kajal Kapadiya, an enthusiastic front-end developer ready to embark on an exciting journey in the world of web development. With a keen interest in creating visually appealing and user-friendly digital experiences, I'm eager to contribute to creating more captivating experiences on the web."}
              </p>
              <p className="font-medium my-4">
                {"Though I'm new to the field, I bring a thirst for knowledge and a commitment to crafting seamless online interactions. To me, design is all about solving problems and making the user's journey enjoyable."}
              </p>
              <p className="font-medium">
                {"Bringing my love for design and focus on users into every project is my goal. Let's work together to turn ideas into amazing digital experiences!"}
              </p>
            </div>
            <div
              className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
            dark:border-light dark:bg-dark xl:col-span-3 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={MyProfile}
                alt="kajalkapadiya"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-center md:flex-row md:items-start justify-center md:justify-between xl:col-span-8 xl:flex-row xl:items-center xl:justify-between md:space-x-4 md:order-3">
              <div className="text-center md:text-left xl:text-left mb-4 md:mb-0 xl:mb-0">
                <span className="inline-block text-3xl md:text-3xl xl:text-4xl sm:text-xl xs:text-sm font-bold">
                  4+
                </span>
                <h2 className="text-lg md:text-base xl:text-lg">
                  Projects completed
                </h2>
              </div>
              <div className="hidden md:block w-6"></div>{" "}
              {/* Spacer for medium screens */}
              <div className="text-center md:text-left xl:text-left mb-4 md:mb-0 xl:mb-0">
                <span className="inline-block text-3xl md:text-3xl xl:text-4xl sm:text-xl xs:text-sm font-bold">
                  Developer
                </span>
                <h2 className="text-lg md:text-base xl:text-lg">
                  React-js Next-js
                </h2>
              </div>
              <div className="text-center md:text-left xl:text-left">
                <span className="inline-block text-3xl md:text-3xl xl:text-4xl sm:text-xl xs:text-sm font-bold">
                  B.tech
                </span>
                <h2 className="text-lg md:text-base xl:text-lg">
                  Electronics and communication
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
