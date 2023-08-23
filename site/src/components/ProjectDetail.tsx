import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "./NavBar";
import Description from "./Description";

export default function ProjectDetail() {
  return (
    <>
      <NavBar contact={false} homeButtonRedirect={true} />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageFadeIn}
      >
        <Description />
      </motion.div>
    </>
  );
}
