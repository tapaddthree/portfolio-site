import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Accordion from "./Accordion";
import { ReactNode, useEffect } from "react";

type ProjectDetailProps = {
  title: string;
  skills: ReactNode[];
};

export default function ProjectDetail({
  title,
  skills,
  images,
  description,
  accordionData,
}: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderedSkills = skills.map((skill, index) => {
    return (
      <span key={index} className="column is-narrow">
        {skill && skill.icon}
      </span>
    );
  });

  return (
    <>
      <NavBar contact={false} homeButtonRedirect={true} />
      <motion.section
        className="section"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageFadeIn}
      >
        <div className="container has-text-black">
          <div className="box has-background-primary">
            <div className="columns has-text-black">
              <div className="column">
                <div className="title">{title}</div>
              </div>
              {renderedSkills}
            </div>
            <div className="box has-background-grey-light has-text-centered">
              <img src={images} className="is-mobile" />
            </div>
            <div className="box has-background-grey-light ">
              {description}
            </div>
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
