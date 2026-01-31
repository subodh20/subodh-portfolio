import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: "light" | "dark") => {},
});
export default ThemeContext;
