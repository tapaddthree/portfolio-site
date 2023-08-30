import { MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";
import { scrollToBottom } from "../animations";
import HomeSwirl from "./HomeSwirl";
import resume from "../media/resume.pdf";

type NavBarProps = {
  contactRef?: MutableRefObject<HTMLDivElement>;
  returnToTopRef?: MutableRefObject<HTMLDivElement>;
  contact?: boolean;
  homeButtonRedirect?: boolean;
};

export default function NavBar({
  contactRef,
  returnToTopRef,
  contact,
  homeButtonRedirect,
}: NavBarProps) {
  const burgerIconRef = useRef() as MutableRefObject<HTMLAnchorElement>;
  const navBarMenuRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleBurgerClick = () => {
    burgerIconRef.current.classList.toggle("is-active");
    navBarMenuRef.current.classList.toggle("is-active");
  };

  const handleContactButtonClick = () => {
    handleBurgerClick();
    contactRef && scrollToBottom(contactRef);
  };

  return (
    <nav className="navbar is-transparent is-fixed-top has-background-grey-light">
      <div className="container">
        <div className="navbar-brand">
          <HomeSwirl
            returnToTopRef={returnToTopRef && returnToTopRef}
            homeButtonRedirect={homeButtonRedirect}
          />
          {contact && (
            <a
              className="navbar-burger"
              ref={burgerIconRef}
              onClick={handleBurgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          )}
        </div>
        <div
          className="navbar-menu is-shadowless has-background-grey-light"
          ref={navBarMenuRef}
        >
          {contact && (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons is-centered is-shadowless">
                  <a
                    href={resume}
                    download="Jakob Schweter Resume"
                    target="_blank"
                  >
                    <motion.button
                      onClick={handleBurgerClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className="button is-black is-outlined is-rounded has-text-weight-medium"
                    >
                      My Resume
                    </motion.button>
                  </a>
                  <motion.button
                    onClick={handleContactButtonClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="button is-black is-outlined is-rounded has-text-weight-medium"
                  >
                    Contact Me
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
