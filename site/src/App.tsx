import { MutableRefObject, useRef } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Description from "./components/Description";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./components/Skills";
import FooterForm from "./components/FooterForm";
import FooterOutro from "./components/FooterOutro";

function App() {
  const contactRef = useRef() as MutableRefObject<HTMLDivElement>;
  const returnToTopRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <>
      <div ref={returnToTopRef} style={{ scrollMarginTop: "60px" }} />
      <NavBar contactRef={contactRef} returnToTopRef={returnToTopRef} />
      <Intro />
      <Description />
      <Skills />
      <ProjectsPage />
      <div ref={contactRef} style={{ scrollMarginTop: "70px" }} />
      <FooterForm />
      <FooterOutro returnToTopRef={returnToTopRef} />
    </>
  );
}

export default App;
