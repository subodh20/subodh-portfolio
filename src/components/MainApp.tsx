import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Skills from "./Skills";
import Navbar from "./Navbar";
import BriefIntro from "./BriefIntro";
const MainApp = () => {
  return (
    <div>
      <Navbar />
      <BriefIntro />
      <About title="This is about page" />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};
export default MainApp;
