import { FaExternalLinkAlt } from "react-icons/fa";
type blogPlatformCardProps = {
  platform: {
    name: string;
    description: string;
    url: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    articlesCount: number;
    color: string;
    borderColor: string;
    iconColor: string;
  };
};
const BlogPlatformCard = ({
  platform,
}: blogPlatformCardProps): React.JSX.Element => {
  const {
    name,
    description,
    url,
    Icon,
    articlesCount,
    color,
    borderColor,
    iconColor,
  } = platform;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-6 rounded-2xl border ${borderColor} br-background-to-br ${color} hover:scale[1.02] transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-background/50 ${iconColor}`}>
          <Icon className="h-6 w-6" />
        </div>
        <FaExternalLinkAlt className="h-5 w-5 muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
          {description}
        </p>
        <p className="text-sm font-mono text-var(--accent)">
          {articlesCount}+ articles
        </p>
      </div>
    </a>
  );
};
export default BlogPlatformCard;
