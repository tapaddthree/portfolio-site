import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Description from "./components/Description";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Description />
      <Skills />
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default App;
