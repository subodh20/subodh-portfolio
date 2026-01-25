import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import NavItem from "./NavItem";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
          ? "bg-var(--background/80) backdrop-blur-lg border-b border-var(--border/50)"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" onClick={() => setActiveIndex(null)}>
            <svg
              className="h-30 w-30"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="ST logo"
            >
              <g fill="currentColor">
                <path d="m 602.30564,552.91667 v -15.34584 l 54.68059,-26.81113 q 3.3514,-1.5875 6.17362,-2.64584 2.99861,-1.23472 4.40973,-1.5875 -1.58751,-0.35277 -4.58612,-1.5875 -2.99861,-1.23472 -5.99723,-2.64583 L 602.30564,475.30551 V 459.4305 l 75.84728,37.92364 v 17.6389 z" />
                <path d="M 522.7541,564.38196 V 450.08188 h -35.2778 v -14.4639 h 86.43061 v 14.4639 h -35.2778 v 114.30008 z" />
                <path d="m 447.78883,566.14585 q -18.69723,0 -29.80974,-9.87779 -11.11251,-9.87778 -11.11251,-27.1639 h 15.87501 q 0,10.75973 6.87917,16.93334 6.87917,5.99723 18.16807,5.99723 10.93612,0 17.46251,-6.35001 6.5264,-6.35 6.5264,-16.58056 0,-7.76112 -4.23334,-13.40557 -4.05695,-5.82084 -11.81806,-7.9375 l -19.57918,-5.46806 q -12.17085,-3.52778 -19.22641,-12.52362 -6.87917,-9.17223 -6.87917,-21.51946 0,-10.23056 4.58612,-17.99168 4.58611,-7.76112 12.8764,-11.99445 8.29028,-4.40973 19.05001,-4.40973 10.93612,0 19.2264,4.40973 8.46667,4.23333 13.22918,11.99445 4.7625,7.58473 4.7625,17.6389 h -15.87501 q 0,-8.81945 -5.99723,-14.28751 -5.99722,-5.64445 -15.34584,-5.64445 -9.34862,0 -15.16946,5.64445 -5.82083,5.46806 -5.82083,14.28751 0,7.05556 3.70417,12.17084 3.88055,4.93889 10.75972,6.87917 l 20.10835,5.64445 q 12.8764,3.52778 19.93196,13.40557 7.23195,9.70139 7.23195,23.10696 0,16.93334 -10.75973,26.98751 -10.75973,10.05418 -28.75141,10.05418 z" />
                <path d="m 379.17344,552.91667 -75.84727,-37.92363 v -17.6389 l 75.84727,-37.92364 v 15.34584 l -54.68059,26.81113 q -3.3514,1.5875 -6.35001,2.82223 -2.82222,1.05833 -4.23333,1.41111 1.5875,0.35278 4.58611,1.5875 2.99861,1.05833 5.99723,2.64583 l 54.68059,26.98752 z" />
              </g>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                href={item.href}
                isActive={index === activeIndex}
                index={index}
                onNavItemClick={(index) => setActiveIndex(index)}
              />
            ))}
            <ToggleButton />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ToggleButton />
            <button
              className="p-2 cursor-pointer"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-lg text-muted-background hover:text-(--foreground) transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
