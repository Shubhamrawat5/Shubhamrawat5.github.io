import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Workdone from "./components/Workdone";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      <Header />
      <About />
      <Skills />
      <Workdone />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
