import React from "react";
import Button from "./Button";

export default function HeroDescription() {
  return (
    <div className="relative z-10 max-w-5xl text-center flex flex-col items-center mx-auto gap-6 animate-fadeInUp">
      <h1 className="h1 transition-all duration-300 hover:scale-105">
        Explore the Possibilities of AI Chatting with
        <span className="inline-block relative group cursor-pointer">
          <span>Brainwave</span>
          <img
            src={"/hero/curve.png"}
            className="absolute top-full left-0 w-full xl:-mt-2 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
            width={624}
            height={28}
            alt="Curve"
          />
        </span>
      </h1>
      <p></p>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}
