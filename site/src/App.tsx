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

  return (
    <>
      <NavBar contactRef={contactRef} />
      <Intro />
      <Description />
      <Skills />
      <ProjectsPage />
      <div ref={contactRef} className="pt-4"></div>
      <FooterForm />
      <FooterOutro />
    </>
  );
}

export default App;
