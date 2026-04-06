import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useThemeContext } from "../hooks/useThemeContext";
const ToggleButton = () => {
  const { theme, setTheme } = useThemeContext();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-9 w-9 flex items-center justify-center cursor-pointer"
    >
      {isDark ? (
        <IoMoonOutline className="h-4 w-4" />
      ) : (
        <IoSunnyOutline className="h-4 w-4" />
      )}
    </button>
  );
};
export default ToggleButton;
