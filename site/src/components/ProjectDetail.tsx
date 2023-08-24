import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Accordion from "./Accordion";

export default function ProjectDetail() {
  const accordionData = [
    {
      title: "What I did today, Aug. 24",
      body: "I did accordion work",
      id: 1,
    },
    {
      title: "What I did today, Aug. 25",
      body: "I did accordion work",
      id: 2,
    },
  ];

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
            <div className="columns">
              <div className="column">
                <div className="title">Project</div>
              </div>
              <div className="column">
                <div className="title has-text-right">Skill Icons</div>
              </div>
            </div>
            <div className="box has-background-grey-light has-text-centered">
              Maybe a carousel of images?
            </div>
            <div className="box has-background-grey-light ">
              Description of project blah blah blah Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Magni, porro repellat,
              omnis id libero itaque repudiandae eum fugiat quaerat impedit
              quis ipsam reprehenderit at quidem aliquid. Ut et impedit,
              ullam laborum corporis dolor animi! Error tenetur ea debitis
              consequatur? Quidem eos fuga, necessitatibus quaerat
              praesentium et obcaecati atque suscipit minus!
            </div>
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
