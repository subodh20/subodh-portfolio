import portfoliImage from "@sub/assets/portfolio-image.png";
const myProjects = [
  {
    title: "Portfolio Website",
    image: portfoliImage,
    srcCode: "https://github.com/subodh20/subodh-portfolio",
    liveLink: "https://subwritescode.com",
    techStack: ["React", "TypeScript", "Tailwind", "CSS"],
    description:
      "This is my personal portfolio website. Through this portfolio, I aim to showcase my skills, projects and experiences in the field of software development. Along with my skills and projects, I also share my journey as a developer, Including the challenges I have faced and the lessons I have learned along the way through blog posts and articles.",
  },
];
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsCard from "../components/ProjectsCard";
const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container  mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase p-0 m-0">
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
        <a
          className="flex justify-center items-center  mt-16"
          href="https://github.com/subodh20?tab=repositories&q=&type=source&language=&sort="
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex flex-row items-center border border-input bg-background hover:bg-(--accent) hover:text-(--accent-foreground) h-11 rounded-md px-8 cursor-pointer transition-colors">
            View All Projects
            <FaExternalLinkAlt className="ml-2 h-4 w-4" />
          </button>
        </a>
      </div>
    </section>
  );
};
export default Projects;
