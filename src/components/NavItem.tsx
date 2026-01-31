type NavItemPropsType = {
  label: string;
  href: string;
  index: number;
  isActive: boolean;
  onNavItemClick: (index: number) => void;
};
const NavItem = ({
  label,
  href,
  index,
  isActive,
  onNavItemClick,
}: NavItemPropsType) => {
  return (
    <a
      key={label}
      href={href}
      onClick={() => onNavItemClick(index)}
      className="text-sm text-muted-foreground hover:text-var(--foreground) transition-colors relative group"
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-(--foreground) transition-all duration-300 group-hover:w-full ${isActive && "w-full bg-purple-500"}`}
      />
    </a>
  );
};
export default NavItem;
