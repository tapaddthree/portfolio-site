import logo from "../media/homeSwirl.png";
import { MutableRefObject, useRef } from "react";

export default function NavBar() {
  const burgerIconRef = useRef() as MutableRefObject<HTMLAnchorElement>;

  const navBarMenuRef = useRef() as MutableRefObject<HTMLDivElement>;

  const handleBurgerClick = () => {
    burgerIconRef.current.classList.toggle("is-active");
    navBarMenuRef.current.classList.toggle("is-active");
  };

  return (
    <nav className="navbar is-transparent">
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
                <a className="button is-primary is-outlined is-rounded has-text-weight-medium">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
