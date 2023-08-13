import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { inject } from "@vercel/analytics";
import "../sass/mystyles.css";

inject();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
