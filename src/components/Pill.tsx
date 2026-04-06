import type React from "react";
type PillProps = {
  item: string;
};
const Pill = (props: PillProps): React.JSX.Element => {
  const { item } = props;
  return (
    <span className="px-3 py-1 text-sm font-mono bg-accent/10 text-accent rounded-full border border-accent/20 ">
      {item}
    </span>
  );
};
export default Pill;
