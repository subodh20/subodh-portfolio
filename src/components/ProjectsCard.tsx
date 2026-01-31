import type React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Pill from "./Pill";
type ProjectCardsProp = {
  index: number;
  project: {
    title: string;
    image: string;
    srcCode: string;
    liveLink: string;
    techStack: string[];
    description: string;
  };
};
const ProjectsCard = (props: ProjectCardsProp): React.JSX.Element => {
  const { index, project } = props;
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg-flex-row-reverse"
      } gap-8 lg:gap-12 items-center`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-3/5 group">
        <div className="relative overflow-hidden rounded-2xl border border-border/50">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            <div className="flex gap-3">
              <div className="flex justify-center items-center bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 ">
                <a
                  href={project.srcCode}
                  className="flex items-center justify-center"
                >
                  <FaGithub className="h-4 w-4 mr-2" />
                  Source code
                </a>
              </div>
              <div className="flex justify-center item-center bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 ">
                <a
                  href={project.liveLink}
                  className="flex items-center justify-center"
                >
                  <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Details */}
      <div className="w-full lg:w-2/5 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold group">
          <a
            href={project.liveLink}
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <FaExternalLinkAlt className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((item, index) => (
            <Pill key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
