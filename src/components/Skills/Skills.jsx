// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

   {/* Skill Categories */}
<div className="flex flex-wrap justify-center gap-4 py-8">
  {SkillsInfo.map((category) => (
    <div
      key={category.title}
      className="w-full sm:w-[48%] bg-gray-900 backdrop-blur-md px-4 sm:px-8 py-6 sm:py-8 
      rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
      transition-transform duration-300 hover:scale-[1.02]"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center">
        {category.title}
      </h3>

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={800}
        scale={1.03}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-2 w-[90%] mx-auto">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-transparent border border-gray-700 rounded-xl py-2 px-2 text-center"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-[10px] sm:text-xs text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  ))}
</div>


  </section>
);

export default Skills;
