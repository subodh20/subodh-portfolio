import ThemeContext from "../utility/themeContext";
import { useContext } from "react";

const useThemeContext = () => {
  return useContext(ThemeContext);
};
export { useThemeContext };
