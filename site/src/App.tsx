import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import { AnimatePresence } from "framer-motion";
import TuneTransferDetail from "./components/projects/TuneTransferDetail";
import PortfolioDetail from "./components/projects/PortfolioDetail";
import WizardDetail from "./components/projects/WizardDetail";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/tune" element={<TuneTransferDetail />} />
        <Route path="/portfolio" element={<PortfolioDetail />} />
        <Route path="/wizard" element={<WizardDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
