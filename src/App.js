import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle"; // ако имаш такъв компонент
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
