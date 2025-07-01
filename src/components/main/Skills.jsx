import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  // Skill_data,
} from "../../constants/index"; // Update path as per your Vite alias config
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }} // fixed typo: missing closing )
    >
      <SkillText />

      {[ Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
        (skillGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
          >
            {skillGroup.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        )
      )}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
