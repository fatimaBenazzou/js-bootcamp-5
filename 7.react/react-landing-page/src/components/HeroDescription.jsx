import Button from "./Button";

export default function HeroDescription() {
    return (
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center mx-auto gap-6 animate-fadeInUp">
            <h1 className="h1 transition-all duration-300 hover:scale-105">
                Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
                <span className="inline-block relative group cursor-pointer">
                    <span className="">Brainwave</span>{" "}
                    <img
                        src={"/hero/curve.png"}
                        className="absolute top-full left-0 w-full xl:-mt-2 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                        width={624}
                        height={28}
                        alt="Curve"
                    />
                </span>
            </h1>
            <p className="body-1 max-w-3xl">
                Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave,
                the open AI chat app.
            </p>
            <div
                className="transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: "400ms" }}
            >
                <Button href="/pricing" white className="max-w-fit">
                    Get started
                </Button>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse">
                <img
                    src={"/pricing/stars.svg"}
                    className="w-full"
                    width={950}
                    height={400}
                    alt="Stars"
                />
            </div>
        </div>
    );
}
