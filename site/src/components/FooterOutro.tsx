import logo from "../media/homeSwirl.png";
import { motion } from "framer-motion";
import { CgCopyright } from "react-icons/cg";
import { SiGithub, SiGitlab } from "react-icons/si";
import madeWithBulma from "../media/madeWithBulma.png";
import { scrollToTop } from "../animations";
import { MutableRefObject } from "react";

type FooterOutroProps = {
  returnToTopRef: MutableRefObject<HTMLDivElement>;
};

export default function FooterOutro({ returnToTopRef }: FooterOutroProps) {
  const icons = [
    { icon: <SiGithub size={25} />, name: "Github" },
    { icon: <SiGitlab size={25} />, name: "Gitlab" },
  ];

  const renderedIcons = icons.map((i, index) => {
    return (
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.5 }}
        key={index}
        className="column is-one-fifth"
      >
        {i.icon}
      </motion.div>
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

        <div className="content has-text-black">
          <div className="columns is-centered is-mobile mt-3">
            {renderedIcons}
          </div>
          <h1 className="is-size-6 has-text-weight-semibold pt-2 has-text-black">
            Jakob Schweter <CgCopyright /> 2023
          </h1>
          <a href="https://bulma.io" target="_blank">
            <figure className="image">
              <img
                src={madeWithBulma}
                style={{ width: "128px", height: "24px" }}
              />
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
}
