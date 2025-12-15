import Header from "./components/Header";
import MainApp from "./components/MainApp";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();
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
        <Header />
        <MainApp />
      </div>
    </div>
  );
}
