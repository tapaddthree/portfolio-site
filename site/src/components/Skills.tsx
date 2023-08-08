import {
  SiDjango,
  SiSpotify,
  SiYoutube,
  SiPython,
  SiReact,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [skillName, setSkillName] = useState("");

  const skills = [
    { icon: <SiDjango size={80} />, name: "Django" },
    { icon: <SiSpotify size={80} />, name: "Spotify" },
    { icon: <SiYoutube size={80} />, name: "YouTube" },
    { icon: <SiPython size={80} />, name: "Python" },
    { icon: <SiReact size={80} />, name: "React" },
    { icon: <SiFastapi size={80} />, name: "FastAPI" },
    { icon: <SiJavascript size={80} />, name: "JavaScript" },
    { icon: <SiMongodb size={80} />, name: "MongoDB" },
    { icon: <SiRedux size={80} />, name: "Redux" },
  ];

  const renderedSkills = skills.map((skill, index) => {
    return (
      <motion.div
        key={index}
        onMouseEnter={() => setSkillName(skill.name)}
        onMouseLeave={() => setSkillName("")}
        whileHover={{ scale: 1.25, transition: { duration: 0.25 } }}
        className="column"
      >
        {skill.icon}
      </motion.div>
    );
  });

  return (
    <section className="section is-medium has-text-centered is-vcentered">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns is-centered is-multiline is-mobile mt-6">
          {renderedSkills}
        </div>
        <div className="has-text-weight-semibold is-size-5">
          <div>{skillName}</div>
        </div>
      </div>
    </section>
  );
}
