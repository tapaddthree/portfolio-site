import { scrollToTop } from "../animations";
import Spin from "./Spin";
import logo from "../media/homeSwirl.png";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

type HomeSwirlProps = {
  returnToTopRef?: RefObject<HTMLDivElement | null>;
  homeButtonRedirect?: boolean;
};

export default function HomeSwirl({
  returnToTopRef,
  homeButtonRedirect,
}: HomeSwirlProps) {
  const navigate = useNavigate();

  const handleSwirlClick = () => {
    if (homeButtonRedirect) {
      navigate("/");
      return;
    }

    if (returnToTopRef) {
      scrollToTop(returnToTopRef);
    }
  };

  return (
    <a
      onClick={handleSwirlClick}
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
  );
}
