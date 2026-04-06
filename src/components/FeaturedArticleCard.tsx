import { FaExternalLinkAlt } from "react-icons/fa";
type FeaturedArticleCardProps = {
  article: {
    title: string;
    link: string;
    pubDate: string;
  };
};

const FeaturedArticleCard = ({
  article,
}: FeaturedArticleCardProps): React.JSX.Element => {
  const { title, link, pubDate } = article;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-(--border) bg-(--card) hover:border-(--primary)/50 transition-all duration-100 "
    >
      <div className="flex flex-col flex-1 justify-center items-start mb-3 md:mb-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-(--muted)/20 text-(--foreground)">
            {link.includes("medium")
              ? "Medium"
              : link.includes("linkedin")
                ? "LinkedIn"
                : "Dev.to"}
          </span>
          <span className="text-xs text-muted-foreground">{pubDate}</span>
        </div>
        <h4 className="text-lg font-semibold group-hover:text-(--primary) transition-colors">
          {title}
        </h4>
      </div>
      <div className="flex items-center ">
        <FaExternalLinkAlt className="h-5 w-5 text-muted-foreground group-hover:text-(--primary) transition-colors" />
      </div>
    </a>
  );
};
export default FeaturedArticleCard;
