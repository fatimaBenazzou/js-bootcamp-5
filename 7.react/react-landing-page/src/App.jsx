import Footer from "./components/Footer";
import Header from "./components/Header";
import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";

export default function App() {
    return (
        <main className="overflow-hidden w-full font-sora bg-bg text-base pt-12 min-h-screen ">
            {/* header */}
            <Header />
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            <Footer />
        </main>
    );
}
