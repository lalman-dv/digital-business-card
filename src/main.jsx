import { createRoot } from "react-dom/client";
import Info from "./info";
import About from "./about";
import Interest from "./interest";
import Contact from "./Contact";
const root = createRoot(document.getElementById("root"));
import "./index.css";
root.render(
  <>
    <Info />
    <About />
    <Interest />
    <Contact />
  </>
);
