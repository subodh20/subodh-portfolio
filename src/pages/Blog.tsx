import BlogPlatformCard from "../components/BlogPlatformCard";
import { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import FeaturedArticleCard from "../components/FeaturedArticleCard";

let blogPlateforms = [
  {
    name: "Medium",
    description: "Read all of my articles on Medium",
    url: "https://subodhtiwari360.medium.com/",
    Icon: FaBookOpen,
    articlesCount: 0,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500",
  },
];
const Blog = () => {
  const [blogArticles, setBlogArticles] = useState([]);

  const updateArticleCount = (count: number) => {
    blogPlateforms = blogPlateforms.map((platform) => {
      return platform.name === "Medium"
        ? { ...platform, articlesCount: count }
        : platform;
    });
  };

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@subodhtiwari360",
        );
        const data = await res.json();
        updateArticleCount(data.items.length);
        setBlogArticles(data.items);
      } catch (error) {
        reportError(error);
      }
    };
    getArticles();
  }, []);
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-left">
            I recently started writing articles to share my knowledge and
            experiences in software development. I write abouth various topics
            including web development, programming languages, and best
            practices. My goal is to provide valuable insights in core software
            development conceps and help other developers on their learning
            journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl max-auto mb-16">
          {blogPlateforms.map((item, index) => (
            <BlogPlatformCard key={index} platform={item} />
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Featured Articles
          </h3>
          <div className="space-y-4">
            {blogArticles.slice(0, 3).map((article, index) => (
              <FeaturedArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
