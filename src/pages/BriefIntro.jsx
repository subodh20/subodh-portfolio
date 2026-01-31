import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const BriefIntro = () => {
  const createDownloadLinkandDownloadFile = () => {
    const link = document.createElement("a");
    link.href = "/subodh-tiwari-resume.docx";
    link.download = "Subodh-Tiwari-Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Introduction Section */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in "
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-(--foreground)">Hi, I'm </span>
            <span className="text-gradient">Subodh Tiwari</span>
          </h1>
          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer
          </p>
          {/* Description */}
          <p
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            I build responsive and user-friendly web applications with modern
            technologies.
          </p>
          {/* Download resume button */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 group ">
              <button className="">View My Work</button>
              <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <button
              className="border border-(--border) hover:bg-(--accent) hover:text-(--accent-foreground) px-4 py-2 rounded-md transition-colors cursor-pointer"
              onClick={createDownloadLinkandDownloadFile}
            >
              Download Resume
            </button>
          </div>
          {/* My social links */}
          <div
            className="flex items-center justify-center gap-6 animate-fade-in cursor-pointer"
            style={{ animationDelay: "0.5s" }}
          >
            <FaGithub className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
            <IoIosMail className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BriefIntro;
