import BlogPlatformCard from "../components/BlogPlatformCard";
import { FaBookOpen } from "react-icons/fa";
const blogPlateforms = [
  {
    name: "Medium",
    description: "",
    url: "",
    icon: FaBookOpen,
    articlesCount: 1,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
  },
];
const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Thoughts & Writings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I recently started writing articles in software development
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl max-auto mb-16">
          {blogPlateforms.map((item, index) => (
            <BlogPlatformCard key={index} platform={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
