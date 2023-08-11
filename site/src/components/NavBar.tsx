import logo from "../media/homeSwirl.png";
import { MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";
import Spin from "./Spin";
import { scrollToBottom, scrollToTop } from "../animations";

type NavBarProps = {
  contactRef: MutableRefObject<HTMLDivElement>;
  returnToTopRef: MutableRefObject<HTMLDivElement>;
};

export default function NavBar({
  contactRef,
  returnToTopRef,
}: NavBarProps) {
  const burgerIconRef = useRef() as MutableRefObject<HTMLAnchorElement>;
  const navBarMenuRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleBurgerClick = () => {
    burgerIconRef.current.classList.toggle("is-active");
    navBarMenuRef.current.classList.toggle("is-active");
  };

  const handleContactButtonClick = () => {
    handleBurgerClick();
    scrollToBottom(contactRef);
  };

  return (
    <nav className="navbar is-transparent is-fixed-top has-background-grey-light">
      <div className="container">
        <div className="navbar-brand">
          <a
            onClick={() => scrollToTop(returnToTopRef)}
            className="navbar-item has-background-grey-light"
          >
            <Spin>
              <img
                src={logo}
                style={{ maxHeight: "55px" }}
                className="px-2 py-2"
              />
            </Spin>
          </a>
          <a
            className="navbar-burger"
            ref={burgerIconRef}
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className="navbar-menu is-shadowless has-background-grey-light"
          ref={navBarMenuRef}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-centered is-shadowless">
                <motion.button
                  onClick={handleContactButtonClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="button is-black is-outlined is-rounded has-text-weight-medium"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
