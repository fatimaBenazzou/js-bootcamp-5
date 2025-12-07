import Header from "./components/Header";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <main className="w-full font-sora bg-bg text-base min-h-screen overflow-hidden">
      {/* header */}
      <Header />

      {/* main content */}
      <Hero />
      {/* Footer */}
    </main>
  );
}
