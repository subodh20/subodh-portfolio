import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Skills from "./Skills";
const MainApp = () => {
  return (
    <div>
      <About title="This is about page" />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};
export default MainApp;
