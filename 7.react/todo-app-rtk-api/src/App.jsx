import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Routers from "./Routers";

export default function App() {
  const { theme } = useTheme();

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
      <Routers />
    </div>
  );
}
