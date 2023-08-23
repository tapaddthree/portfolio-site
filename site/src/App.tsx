import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tune" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<ProjectDetail />} />
        <Route path="/wizard" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
