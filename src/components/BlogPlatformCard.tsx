type blogPlatformCardProps = {
  platform: {
    name: string;
    description: string;
    url: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    articlesCount: number;
    color: string;
    borderColor: string;
    iconColor: string;
  };
};
const BlogPlatformCard = (props: blogPlatformCardProps): React.JSX.Element => {
  const { name, description, url, icon, articlesCount, color, borderColor, iconColor } = props;
  return <a></a>;
};
export default BlogPlatformCard;
