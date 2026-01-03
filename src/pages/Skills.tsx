import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaPallet,
  FaTerminal,
} from "react-icons/fa";
import SkillsCard from "../components/SkillsCard";
const skillList = [
  {
    Icon: FaCode,
    title: "Frontend",
    skills: "React, TypeScript, Tailwind css",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    Icon: FaDatabase,
    title: "Backend",
    skills: "Node.js, PostgreSQL",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    Icon: FaCloud,
    title: "Cloud & DevOps",
    skills: "AWS, Docker, CI/CD",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    Icon: FaPallet,
    title: "Design",
    skills: "Figma",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    Icon: FaTerminal,
    title: "Tools",
    skills: "Git, Linux, Vim, VS Code",
    color: "from-violet-500/20 to-purple-500/20",
  },
];
const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills and Expertise
          </h2>
          <p className="text-muted-background max-w-2xl mx-auto">
            A versatile toolkit for building modern, scalable applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillList.map((item, index) => (
            <SkillsCard key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
