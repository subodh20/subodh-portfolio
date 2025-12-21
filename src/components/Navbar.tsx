import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const detectIfWindowIsScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", detectIfWindowIsScrolled);

    return () => {
      window.removeEventListener("scroll", detectIfWindowIsScrolled);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#">logo</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--accent) transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <ToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
