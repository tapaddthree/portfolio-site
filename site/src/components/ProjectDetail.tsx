import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Accordion from "./Accordion";
import { ReactNode, useEffect } from "react";

interface Skills {
  icon: ReactNode;
  name: string;
}

interface AccordionData {
  title: string;
  body: string;
  gistId?: `${string}/${string}`;
  id: number;
}

type ProjectDetailProps = {
  title: string;
  skills: Skills[];
  images: string;
  description: string;
  accordionData: AccordionData[];
  link: string;
  linkIcon: ReactNode;
};

export default function ProjectDetail({
  title,
  skills,
  images,
  description,
  accordionData,
  link,
  linkIcon,
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
          <div className="box">
            <p className="has-text-weight-bold is-size-4 pb-2">
              Changelog
            </p>
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
