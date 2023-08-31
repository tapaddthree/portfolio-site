import logo from "../media/homeSwirl.png";
import { motion } from "framer-motion";
import { CgCopyright } from "react-icons/cg";
import { SiGithub, SiGitlab } from "react-icons/si";
import { scrollToTop } from "../animations";
import { MutableRefObject } from "react";

type FooterOutroProps = {
  returnToTopRef: MutableRefObject<HTMLDivElement>;
};

export default function FooterOutro({ returnToTopRef }: FooterOutroProps) {
  const icons = [
    { icon: <SiGithub size={25} />, link: "https://github.com/jako1001" },
    { icon: <SiGitlab size={25} />, link: "https://gitlab.com/jako1001" },
  ];

  const renderedIcons = icons.map((i, index) => {
    return (
      <a
        href={i.link}
        key={index}
        target="_blank"
        className="has-text-black"
      >
        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.5 }}
          className="column"
        >
          {i.icon}
        </motion.div>
      </a>
    );
  });

  return (
    <section className="section has-background-primary has-text-centered">
      <div className="container">
        <motion.img
          onClick={() => scrollToTop(returnToTopRef)}
          src={logo}
          whileTap={{ scale: 0.6 }}
          whileHover={{
            rotate: [null, 360],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ maxHeight: "55px" }}
          className="px-2 py-2 is-clickable"
        />

        <div className="content has-text-white">
          <div className="columns is-centered is-mobile mt-3">
            {renderedIcons}
          </div>
          <h1 className="is-size-6 has-text-weight-semibold pt-2 has-text-black">
            Jakob Schweter <CgCopyright /> 2023
          </h1>
        </div>
      </div>
    </section>
  );
}
