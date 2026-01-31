type SkillCardProps = {
  index: number;
  item: {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    skills: string;
    color: string;
  };
};
const SkillsCard = (props: SkillCardProps): React.JSX.Element => {
  const { index, item } = props;
  return (
    <div
      className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br bg-${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <item.Icon className="h-6 w-6 text-accent" />
        </div>
        <div className="flex flex-col text-start px-1.5">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm font-mono">
            {item.skills}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SkillsCard;
