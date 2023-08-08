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
  SiTypescript,
  SiGithub,
  SiGitlab,
  SiVite,
  SiBulma,
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
    { icon: <SiTypescript size={80} />, name: "TypeScript" },
    { icon: <SiMongodb size={80} />, name: "MongoDB" },
    { icon: <SiRedux size={80} />, name: "Redux" },
    { icon: <SiGithub size={80} />, name: "Github" },
    { icon: <SiGitlab size={80} />, name: "Gitlab" },
    { icon: <SiVite size={80} />, name: "Vite" },
    { icon: <SiBulma size={80} />, name: "Bulma" },
  ];

  const renderedSkills = skills.map((skill, index) => {
    return (
      <motion.div
        key={index}
        onMouseEnter={() => setSkillName(skill.name)}
        onMouseLeave={() => setSkillName("")}
        whileHover={{ scale: 1.25, transition: { duration: 0.25 } }}
        className="column is-narrow"
      >
        {skill.icon}
      </motion.div>
    );
  });

  return (
    <section className="section has-text-centered is-vcentered">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns is-centered is-multiline is-mobile mt-6">
          {renderedSkills}
        </div>
        <div
          className="has-text-weight-semibold is-size-5"
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div>{skillName}</div>
        </div>
      </div>
    </section>
  );
}
