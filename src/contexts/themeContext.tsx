import { createContext, type Dispatch, type SetStateAction } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (() => {}) as Dispatch<SetStateAction<"light" | "dark">>,
});
export default ThemeContext;
