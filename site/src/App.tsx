import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetail from "./components/ProjectDetail";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/tune" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<ProjectDetail />} />
        <Route path="/wizard" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
