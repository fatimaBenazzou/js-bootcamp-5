import CompanyLogos from "../components/CompanyLogos";
import HeroDescription from "../components/HeroDescription";
import HeroFigure from "../components/HeroFigure";
import Section from "../components/Section";

export default function Hero() {
  return (
    <Section id="hero" crosses>
      <div className="container flex flex-col gap-12 relative">
        {/* description */}
        <HeroDescription />
        {/* figure */}
        <HeroFigure />
        {/* logos */}
        <CompanyLogos className="hidden relative lg:block" />
      </div>
    </Section>
  );
}
