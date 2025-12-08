import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-base-100 bg-no-repeat"
      style={{
        backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
        backgroundSize: "100vw 100vh",
        backgroundPosition: "top center",
      }}
    >
      <div className="container mx-auto px-4 pt-12 max-w-lg">
        <Header theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
