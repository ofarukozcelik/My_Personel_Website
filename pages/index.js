import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import GithubIcon from "../components/icons/Github.js";
import TwitterIcon from "../components/icons/Twitter.js";
import LinkedinIcon from "../components/icons/Linkedin.js";

const TypingAnimation = () => {
  return (
    <Typewriter
      words={[
        "Frontend Developer",
        "Backend Developer",
        "React Developer",
        "React Native Developer",
      ]}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-35 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 135, transition: { duration: 0.5 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 135, transition: { duration: 0.5 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello, </span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Ömer Faruk ÖZÇELİK
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <Link
                  href="https://github.com/ofarukozcelik"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                >
                  <GithubIcon className={"w-8 h-8 fill-current"} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <Link
                  href="https://x.com/ofarukozcelik"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                >
                  <TwitterIcon className={"w-8 h-8 fill-current"} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <Link
                  href="https://www.linkedin.com/in/omer-faruk-ozcelik/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                >
                  <LinkedinIcon className={"w-8 h-8 fill-current"} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js</span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons 🎈🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/me.png"
                      alt="Me"
                      className="w-16 h-16 rounded-full"
                    />

                    <div>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">>"} </span> const
                        mySkills1 = ["JavaScript", "Typescript", "React", "React
                        Native"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">>"} </span> const
                        mySkills2 = ["Expressjs", "Nodejs", "Mongodb",
                        "Nextjs"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects" className="no-underline font-bold">
                      <span className="transition duration-300">
                        My Projects {">>"}
                      </span>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
