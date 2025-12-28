import ThemeContext from "../contexts/themeContext";
import { useContext } from "react";

const useThemeContext = () => {
  return useContext(ThemeContext);
};
export { useThemeContext };
