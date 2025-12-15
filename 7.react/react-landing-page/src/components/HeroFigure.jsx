import Generating from "./Generating";
import Notification from "./Notification";

const heroIcons = ["/home-smile.svg", "/file-02.svg", "/search-md.svg", "/plus-square.svg"];

export default function HeroFigure() {
    return (
        <div className="relative max-w-sm mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-bg/30 rounded-xl">
                    <div className="h-6 bg-bg/50 rounded-t-xl" />

                    {/* big figure */}
                    <div className="aspect-[33/40] rounded-b-xl overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <img
                            src={"/hero/robot.jpg"}
                            className="w-full scale-[1.7] translate-y-[8%] md:scale-100 md:-translate-y-[10%] lg:-translate-y-[23%]"
                            width={1024}
                            height={490}
                            alt="AI"
                        />

                        <Generating className="md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                        <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1 bg-neutral-2/40 backdrop-blur border border-neutral/10 rounded-2xl xl:flex animate-bounce">
                            {heroIcons.map((icon, index) => (
                                <li className="p-5" key={index}>
                                    <img src={icon} width={24} height={25} alt={icon} />
                                </li>
                            ))}
                        </ul>

                        <Notification
                            className="hidden absolute -right-[5.5rem] bottom-44 w-72 xl:flex animate-bounce"
                            title="Code generation"
                        />
                    </div>
                </div>

                {/* Device shadows */}
                <div className="relative z-10 h-6 mx-2.5 bg-bg/95 shadow-xl rounded-b-2xl lg:mx-8" />
                <div className="relative z-10 h-6 mx-6 bg-bg/70 shadow-xl rounded-b-2xl lg:mx-20" />
            </div>

            {/* background image */}
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                <img
                    src={"/hero/hero-background.jpg"}
                    className="w-full"
                    width={1440}
                    height={1800}
                    alt="hero"
                />
            </div>

            {/* Background Circles */}
            <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-neutral-2/40 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
                {/* rings */}
                <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-neutral-2/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-neutral-2/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-neutral-2/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-neutral-2/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    );
}
