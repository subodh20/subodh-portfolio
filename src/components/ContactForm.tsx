import { LuSend } from "react-icons/lu";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeeeegzr");
  if (state.succeeded) {
    return (
      <p className="text-center text-green-500">
        Thanks for contacting me. I will get back to you soon!
      </p>
    );
  }
  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xeeeegzr"
      method="POST"
    >
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
            name="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
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
            name="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
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
          name="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
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
          name="message"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-var(--background)/50 border-var(--border)/50 focus:border-var(--accent)"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-var(--primary) text-var(--primary-foreground) hover:bg-var(--primary/90) h-11 rounded-md px-8"
        disabled={state.submitting}
        type="submit"
      >
        Send message <LuSend className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
};
export default ContactForm;
