import { useState, useEffect } from "react";
const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    let selectedTheme = theme;
    if (savedTheme === "light" || savedTheme === "dark") {
      selectedTheme = savedTheme;
    } else {
      const preferedScheme = window.matchMedia(
        "prefers-color-scheme:dark"
      ).matches;
      selectedTheme = preferedScheme ? "dark" : "light";
    }
    setTheme(selectedTheme);
    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, setTheme]);

  return { theme, setTheme };
};
export { useTheme };
