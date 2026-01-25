import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Card from "../components/Card";
const aboutItems = [
  {
    title: "Location",
    description: "Newcastle, NSW, Australia",
    Icon: FaMapMarkerAlt,
  },
  {
    title: "Experience",
    description: "3+ Years",
    Icon: FaBriefcase,
  },
  {
    title: "Education",
    description: "MIT @CSU",
    Icon: FaGraduationCap,
  },
];
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none relative">
                <div className="absolute inset-0 bg-gradient-to-br from-(--accent/20) to-var(--primary/20) rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-(--card) border border-var(--border/50) rounded-3xl overflow-hidden">
                  <img
                    src="/subodh-profile-photo.png"
                    alt="Subodh Tiwari"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                {/* Experience Badge */}
                <div className="absolute -right-5 top-1/4 bg-(--card/90) backdrop-blur-sm border border-(--border/50) rounded-xl p-4 shadow-2xl">
                  <p className="text-3xl font-bold text-accent"> 3+</p>
                  <p className="text-sm">Years Exp.</p>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
                  About Me
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Passionate about crafting
                  <span className="text-gradient">digital experiences</span>
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 3 years of
                  experience building modern web applications. I specialize in
                  React, TypeScript, and modern CSS frameworks.
                </p>
                <p>
                  My journey in tech began with a curiosity for how things work,
                  and it has evolved into a career where I get to solve problems
                  and create beautiful user interfaces.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {aboutItems.map((item, index) => (
                  <Card
                    key={index}
                    Icon={item.Icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
