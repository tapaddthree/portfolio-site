import logo from "../media/homeSwirl.png";
import { MutableRefObject, useRef } from "react";

type NavBarProps = {
  contactRef: MutableRefObject<HTMLDivElement>;
};

export default function NavBar({ contactRef }: NavBarProps) {
  const burgerIconRef = useRef() as MutableRefObject<HTMLAnchorElement>;
  const navBarMenuRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleBurgerClick = () => {
    burgerIconRef.current.classList.toggle("is-active");
    navBarMenuRef.current.classList.toggle("is-active");
  };

  const scrollToBottom = (e: MutableRefObject<HTMLDivElement>) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar is-transparent is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src={logo}
              style={{ maxHeight: "55px" }}
              className="px-2 py-2"
            />
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
        <div className="navbar-menu is-shadowless" ref={navBarMenuRef}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-centered is-shadowless">
                <button
                  onClick={() => scrollToBottom(contactRef)}
                  className="button is-primary is-outlined is-rounded has-text-weight-medium"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
