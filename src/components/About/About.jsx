import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/shadav.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
  Hi, I am
</h1>

<motion.h2
  whileHover={{ scale: 1.05, rotate: -2 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-snug bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
>
  Mohd Shadav
</motion.h2>


          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Java Full Stack Developer",
                "Spring Boot & React Developer",
                "Backend Developer",
                "Frontend Developer",
                "App Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#ff69b4]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-6 mt-4 leading-relaxed">
            🚀 I am a{" "}
            <span className="text-purple-400 font-semibold">
              Java Full-Stack Developer
            </span>{" "}
            skilled in <span className="text-pink-400 font-semibold">Java</span>
            , <span className="text-green-400 font-semibold">MERN stack</span>,
            and modern web technologies. With a solid foundation in{" "}
            <span className="text-yellow-300 font-semibold">
              Data Structures & Algorithms
            </span>
            , I am currently gaining practical experience through an internship
            at{" "}
            <span className="text-blue-400 font-semibold">Cetpa Infotech</span>.
            I love building scalable, efficient, and creative applications ✨.
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1Z6srtRbgLn-sdXvWBSgy-T4mloSomcOG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-white py-2 px-6 rounded-full mt-3 text-base font-semibold transition duration-300 shadow-md hover:scale-105"
            style={{
             background: "linear-gradient(90deg, #6366F1, #A855F7, #EC4899, #F59E0B)",
              backgroundSize: "200% 200%",
              animation: "gradientMove 6s ease infinite",
            }}
          >
            📄 DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         <Tilt
  className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-purple-700 rounded-full mx-auto"
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
  gyroscope={true}
>
  <motion.img
    src={profileImage}
    alt="Mohd Shadav"
    className="w-full h-full rounded-full object-cover drop-shadow-[0_8px_16px_rgba(130,69,236,0.5)]"
    whileHover={{ scale: 1.05, rotate: 2 }}
  />
</Tilt>

        </motion.div>
        </div>
    </section>
  );
};

export default About;
