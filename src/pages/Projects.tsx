const myProjects = [
  {
    title: "Old Portfolio",
    image: "",
    srcCode: "",
    liveLink: "https://subodh-portfolio.netlify.app",
    techStack: ["React", "Tailwind", "SCSS"],
    description:
      "This is the very first portfolio app developed while I was learning React",
  },
];
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsCard from "../components/ProjectsCard";
const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container  mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showscase my skills and passion for
            creating quality software applications
          </p>
        </div>
        <div className="space-y-24 max-w-6xl mx-auto">
          {myProjects.map((project, index) => (
            <ProjectsCard key={index} index={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center items-center  mt-16">
          <button className="flex flex-row items-center border border-input bg-background hover:bg-(--accent) hover:text-(--accent-foreground) h-11 rounded-md px-8 cursor-pointer transition-colors">
            View All Projects
            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Projects;
