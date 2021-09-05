import Nav from "./components/Nav";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Workdone from "./components/Workdone";
import Contact from "./Views/Contact";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      <Header />
      <Aboutme />
      <Skills />
      <Workdone />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;