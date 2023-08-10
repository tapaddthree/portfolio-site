import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { letter, sentence } from "../animations";

export default function Description() {
  const [descText, setDescText] = useState("Software Engineer");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    const alternateText = async () => {
      if (descText === "Software Engineer") {
        await sleep(3000);
        setDescText("Gamer");
      }
      if (descText === "Gamer") {
        setDescText("MTG Nerd");
      }
      if (descText === "MTG Nerd") {
        setDescText("Software Engineer");
      }
    };

    setTimeout(alternateText, 4000);
  }, [descText]);

  return (
    <section className="section is-medium has-text-black has-text-centered has-background-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5">
            <h1 className="title has-text-black">About Me</h1>
            <span className="subtitle has-text-black">I'm a </span>
            <motion.div
              initial="hidden"
              animate="visible"
              whileInView={{ scale: 1 }}
              variants={sentence}
              key={descText}
              className="subtitle has-text-black has-text-weight-semibold is-italic"
            >
              {descText.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
            <p className="pt-3">
              Hi, I'm Jakob, a software engineer and graduate of Hack
              Reactor. My passion for programming has grown into a deep
              love for crafting elegant applications that solve real-world
              problems or meet specific needs. I thrive on the creative
              challenge of building user-friendly interfaces and efficient
              backend systems. Let's collaborate and create impactful
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
