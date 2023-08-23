import { React, MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";
import { pageFadeIn } from "../animations";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import FooterFormSection from "../components/FooterFormSection";
import FooterOutro from "../components/FooterOutro";

export default function MainPage() {
  const contactRef = useRef() as MutableRefObject<HTMLDivElement>;
  const returnToTopRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <>
      <div ref={returnToTopRef} style={{ scrollMarginTop: "60px" }} />
      <NavBar
        contactRef={contactRef}
        returnToTopRef={returnToTopRef}
        contact={true}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageFadeIn}
      >
        <Intro />
        <Description />
        <Skills />
        <Projects />
        <div ref={contactRef} style={{ scrollMarginTop: "70px" }} />
        <FooterFormSection />
        <FooterOutro returnToTopRef={returnToTopRef} />
      </motion.div>
    </>
  );
}
