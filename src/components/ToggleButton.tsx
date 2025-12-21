import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-9 w-9 flex items-center justify-center"
    >
      {isDark ? (
        <IoMoonOutline className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <IoSunnyOutline className="h-4 w-4" />
      )}
    </button>
  );
};
export default ToggleButton;
