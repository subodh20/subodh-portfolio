import { type ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeContext from "../utility/themeContext";
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
