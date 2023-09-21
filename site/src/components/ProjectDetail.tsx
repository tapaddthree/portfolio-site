import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Accordion from "./Accordion";
import { useEffect } from "react";
import { ProjectPageProps } from "../pages/ProjectPage";

export default function ProjectDetail({
  title,
  images,
  description,
  repo,
  liveLink,
  accordionData,
  skills,
}: ProjectPageProps) {
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
            <div className="title">{title}</div>
            <div className="columns has-text-black is-multiline is-mobile pt-4">
              {renderedSkills}
            </div>
          </div>
          <div className="box has-background-grey-light">
            <a href={repo} target="_blank" className="has-text-black">
              <span>View repository </span>
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" className="has-text-black">
                <span>| View live</span>
              </a>
            )}
          </div>
          {images && (
            <div className="box has-background-grey-light has-text-centered">
              <img src={images} className="is-mobile" />
            </div>
          )}
          <div className="box has-background-grey-light subt">
            <p className="has-text-weight-bold is-size-4 pb-1">Description</p>
            {description}
          </div>
          {accordionData && (
            <div className="box has-background-grey-light">
              <p className="has-text-weight-bold is-size-4 pb-2">
                What's in this app?
              </p>
              <Accordion accordionData={accordionData} />
            </div>
          )}
        </div>
      </motion.section>
    </>
  );
}
