import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 dark:text-light dark:border-light border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
        </div>
        <Link href="mailto:kajalkapadiya18@gmail.com" target="_blank" className="underline underline-offset-2">say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
