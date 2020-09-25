import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import SkillsSection from "./components/SkillsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";
import Divider from "@material-ui/core/Divider/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <About />
        <Divider />
        <ProjectList />
        <SkillsSection />
        <ContactMeSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
