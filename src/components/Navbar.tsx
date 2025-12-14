const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#">logo</a>
          <div className=" md-flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
