import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { AnimatePresence } from "framer-motion";
import ProjectPage from "../pages/ProjectPage";
import {
  portfolioAccordion,
  portfolioSkills,
  portfolioDescription,
  portfolioImages,
  portfolioRepo,
  tuneAccordion,
  tuneSkills,
  tuneImages,
  tuneDescription,
  tuneRepo,
  wizardSkills,
  wizardDescription,
  wizardImages,
  wizardRepo,
  etlSkills,
  etlImages,
  etlDescription,
  etlRepo,
} from "../projectPageDetail";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/etl"
          element={
            <ProjectPage
              title="ETL Pipeline Automation"
              skills={etlSkills}
              description={etlDescription}
              repo={etlRepo}
            />
          }
        />
        <Route
          path="/tune"
          element={
            <ProjectPage
              title="Tune Transfer"
              skills={tuneSkills}
              images={tuneImages}
              description={tuneDescription}
              accordionData={tuneAccordion}
              repo={tuneRepo}
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
              repo={portfolioRepo}
              liveLink="https://www.jakobschweter.com"
            />
          }
        />
        <Route
          path="/wizard"
          element={
            <ProjectPage
              title="Wealth Wizard"
              skills={wizardSkills}
              images={wizardImages}
              description={wizardDescription}
              repo={wizardRepo}
            />
          }
        />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}
