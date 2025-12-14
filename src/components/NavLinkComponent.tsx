import { NavLink } from "react-router-dom";
type NavLinkComponentProps = {
  to: string;
  title: string;
};
const NavLinkComponent = ({
  to,
  title,
}: NavLinkComponentProps): JSX.Element => {
  return <NavLink to={to}>{title}</NavLink>;
};
export default NavLinkComponent;
