import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Skills from "./Skills";
import Navbar from "../components/Navbar";
import BriefIntro from "./BriefIntro";
import Projects from "./Projects";
import Footer from "./Footer";
const MainApp = () => {
  return (
    <div>
      <Navbar />
      <BriefIntro />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
export default MainApp;
