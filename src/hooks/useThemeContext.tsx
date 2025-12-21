import ThemeContext from "../utility/themeContext";
import { useContext } from "react";

const useThemeContext = () => {
  console.log(useContext(ThemeContext));
  return useContext(ThemeContext);
};
export { useThemeContext };
