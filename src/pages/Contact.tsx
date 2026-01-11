import { LuSend } from "react-icons/lu";
const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-var(--accent) font-mono text-sm mb-4 tracking-wider uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's build something{" "}
              <span className="text-gradient"> useful and amazing</span>{" "}
              together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have you got any project in mind? I'd love to hear about the
              project. Drop me a message and let's discuss how we can
              collaborate ro bring your ideas to life!
            </p>
          </div>
          {/* contact form */}
          <div className="p-8 rounded-3xl border border-var(--border)/50 bg-var(--card)/30 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-var(--primary) text-var(--primary-foreground) hover:bg-var(--primary/90) h-11 rounded-md px-8">
                Send message <LuSend className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
