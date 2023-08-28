import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Accordion from "./Accordion";
import { useEffect } from "react";
import { ProjectDetailProps } from "../pages/ProjectPage";

export default function ProjectDetail({
  title,
  images,
  description,
  link,
  linkIcon,
  accordionData,
  skills,
}: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderedSkills = skills.map((skill, index) => {
    return (
      <div key={index} className="column is-narrow has-text-right">
        {skill && skill.icon}
      </div>
    );
  });

  return (
    <>
      <NavBar contact={false} homeButtonRedirect={true} />
      <motion.section
        className="section has-background-primary"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageFadeIn}
      >
        <div className="container has-text-black">
          <div className="box has-background-grey-light">
            <div className="title">
              {title}
              <a href={link} target="_blank" className="has-text-black">
                <span className="pl-3">{linkIcon}</span>
              </a>
              <hr style={{ backgroundColor: "#444443" }} />
            </div>
            <div className="columns has-text-black is-multiline is-mobile pt-2">
              {renderedSkills}
            </div>
          </div>
          <div className="box has-background-grey-light has-text-centered">
            <img src={images} className="is-mobile" />
          </div>
          <div className="box has-background-grey-light subt">
            <p className="has-text-weight-bold is-size-4 pb-1">
              Description
            </p>
            {description}
          </div>
          <div className="box has-background-grey-light">
            <p className="has-text-weight-bold is-size-4 pb-2">
              What's in this app?
            </p>
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
