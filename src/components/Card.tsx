type CardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};
const Card = ({ Icon, title, description }: CardProps): JSX.Element => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
      <Icon className="h-5 w-5 text-accent" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
};
export default Card;
