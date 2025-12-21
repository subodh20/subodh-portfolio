import { type ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeContext from "../utility/themeContext";
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
