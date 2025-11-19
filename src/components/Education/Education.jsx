import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[8vw] lg:px-[12vw] font-sans bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(130,69,236,0.3),_transparent_70%)] pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-4xl font-extrabold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
          My education has been a journey of continuous learning and growth.
          Here’s a quick look at my academic milestones.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative z-10">
        {/* Vertical Line for Timeline */}
        <div className="hidden sm:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-gray-600 transform -translate-x-1/2"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* ✅ Timeline Dot moved to LEFT side for all entries
            <div className="hidden sm:flex absolute left-0 transform translate-x-[-50%] bg-gray-800 border-4 border-purple-500 w-14 h-14 rounded-full justify-center items-center shadow-[0_0_25px_4px_rgba(130,69,236,0.5)] z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div> */}


            {/* Education Card */}
            <div
              className={`relative w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 mt-8 sm:mt-0 rounded-2xl shadow-2xl border border-gray-800 bg-gray-900/90 backdrop-blur-md hover:shadow-[0_0_40px_4px_rgba(130,69,236,0.5)] transition-transform duration-300 hover:scale-[1.03] ${
                index % 2 === 0
                  ? "sm:ml-0 sm:mr-auto sm:pl-10"
                  : "sm:mr-0 sm:ml-auto sm:pr-10"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* Image / Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl overflow-hidden border border-gray-700">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-gray-300 text-sm md:text-base">
                    {edu.school}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 font-semibold">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>
              <p className="mt-3 text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
