import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const NavIcon = () => {
  return (
    <>
      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href="https://twitter.com/kajal_kapadiya7?t=Y5YVVuejo86G273Gz1VGeA&s=09"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/kajalkapadiya"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kajal-kapadiya/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3 sm:mx-1"
        >
          <LinkedInIcon />
        </motion.a>
        {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button> */}
      </nav>
      ;
    </>
  );
};

export default NavIcon;
