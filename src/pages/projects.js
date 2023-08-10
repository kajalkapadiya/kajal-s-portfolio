import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FeaturedProjects = ({ type, title, summary, vid, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
    border border-solid border-dark bg-light shadow-2xl p-3 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      {/* <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      > */}
      <video
        src={vid}
        controls
        muted
        width="500"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg h-auto lg:w-full"
      ></video>
      {/* </Link> */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:pl-0 lg:w-full lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        {/* <Link href={link} target="_blank"> */}
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
          {title}
        </h2>
        {/* </Link> */}
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light
            dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Kajal Kapadiya | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Dream Big, Learn Always!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title="Mail-Box"
                type="Project: 1"
                // link="/"
                github="https://github.com/kajalkapadiya/project-mail-box"
                vid="mailBox.mp4"
                summary="The Mail-Box web application is a feature-rich messaging platform that I developed using ReactJS as the front-end 
                framework and Firebase as the backend service. The application aims to provide users with an efficient and user-friendly way 
                to manage their emails by incorporating essential functionalities like a sent box, inbox, read mail, and unread mail."
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Expense tracker"
                type="Project: 2"
                // link="/"
                github="https://github.com/kajalkapadiya/expense-tracker"
                vid="expense.mp4"
                summary="The application focuses on providing users with a streamlined approach to monitor their expenses effectively. 
                It offers essential functionalities such as adding expenses, editing, and deleting records to help users maintain accurate 
                financial data. This web application is developed using ReactJS as the front-end framework and Firebase as the backend service"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Todo list using Next.js and MongoDB"
                type="Project: 3"
                // link="/"
                github="https://github.com/kajalkapadiya/Todo-app"
                vid="todo-final.mp4"
                summary="The Todo List app is a powerful task management tool developed using Next.js as the front-end framework and MongoDB 
                as the database system. The app empowers users to organize their daily tasks efficiently by enabling them to add new tasks, 
                mark them as done or undone, and delete completed tasks."
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="E-commerce web"
                type="Project: 4"
                // link="/"
                github="https://github.com/kajalkapadiya/e-commerce-project/commit/8940ba74114cb3596b26806f38343dbce6980336"
                vid="e-comm.mp4"
                summary="The E-commerce website is a dynamic online shopping platform that I developed using ReactJS as the front-end framework 
                and Firebase as the backend service. The website is designed to provide users with a personalized shopping experience through a 
                user-specific cart feature. Each user's cart is unique, allowing them to add, remove, and delete items according to 
                their preferences."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
