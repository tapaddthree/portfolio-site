import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { AnimatePresence } from "framer-motion";
import ProjectPage from "../pages/ProjectPage";
import {
  portfolioAccordion,
  portfolioSkills,
  portfolioDescription,
  portfolioIcon,
  portfolioImages,
  portfolioLink,
  tuneAccordion,
  tuneSkills,
  tuneImages,
  tuneDescription,
  tuneIcon,
  tuneLink,
  wizardAccordion,
  wizardSkills,
  wizardDescription,
  wizardImages,
  wizardLink,
  wizardIcon,
} from "../projectPageDetail";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/tune"
          element={
            <ProjectPage
              title="Tune Transfer"
              skills={tuneSkills}
              images={tuneImages}
              description={tuneDescription}
              accordionData={tuneAccordion}
              link={tuneLink}
              linkIcon={tuneIcon}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProjectPage
              title="Portfolio Page"
              skills={portfolioSkills}
              images={portfolioImages}
              description={portfolioDescription}
              accordionData={portfolioAccordion}
              link={portfolioLink}
              linkIcon={portfolioIcon}
            />
          }
        />
        <Route
          path="/wizard"
          element={
            <ProjectPage
              title="Wealth Wizard (Live site being fixed)"
              skills={wizardSkills}
              images={wizardImages}
              description={wizardDescription}
              accordionData={wizardAccordion}
              link={wizardLink}
              linkIcon={wizardIcon}
            />
          }
        />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}
