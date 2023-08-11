import { motion } from "framer-motion";
import { useState } from "react";
import { sentence, letter } from "../animations";
import { skills } from "../skillIcons";

export default function Skills() {
  const [skillName, setSkillName] = useState("");

  const renderedSkills = skills.map((skill, index) => {
    return (
      <motion.div
        key={index}
        onMouseEnter={() => setSkillName(skill.name)}
        onMouseLeave={() => setSkillName("")}
        whileHover={{ scale: 1.25, transition: { duration: 0.25 } }}
        variants={letter}
        className="column is-narrow"
      >
        {skill.icon}
      </motion.div>
    );
  });

  return (
    <section className="section has-text-centered has-text-black is-vcentered">
      <div className="container">
        <h1 className="title">Skills</h1>
        <motion.div
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns is-centered is-multiline is-mobile mt-6"
        >
          {renderedSkills}
        </motion.div>
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
