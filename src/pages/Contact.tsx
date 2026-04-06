import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.15]">
              Let's build something{" "}
              <span className="text-gradient"> useful and amazing</span>{" "}
              together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have you got any project in mind? I'd love to hear about the
              project. Drop me a message and let's discuss how we can
              collaborate or bring your ideas to life!
            </p>
          </div>
          {/* contact form */}
          <div className="p-8 rounded-3xl border border-(--border) bg-(--card) backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
