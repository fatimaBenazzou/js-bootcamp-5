import React from "react";
import HeroDescription from "../components/HeroDescription";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container flex flex-col gap-12 relative">
        {/* description */}
        <HeroDescription />
        {/* figure */}
        {/* logos */}
      </div>
    </section>
  );
}
