import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href="#"
                className="font-mono text-xl font-bold hover:text-var(--accent) transition-colors"
              >
                Subodh Tiwari
              </a>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                &copy; {new Date().getFullYear()} Subodh Tiwari. All right
                reserved
              </p>
            </div>
            <div className="flex flex-center gap-4">
              <a
                href="https://github.com/subodh20"
                target="_blank"
                className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-var(--accent) hover:border-var(--accent)/50 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/subodh-tiwari/"
                target="_blank"
                className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-var(--accent) hover:border-var(--accent)/50 transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/subodh20"
                target="_blank"
                className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-var(--accent) hover:border-var(--accent)/50 transition-all"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
