import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

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
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
