import CollabApp from "../components/CollabApp";

const collabApps = [
    {
        title: "Figma",
        icon: "/collaboration/figma.png",
        width: 26,
        height: 36,
    },
    {
        title: "Notion",
        icon: "/collaboration/notion.png",
        width: 34,
        height: 36,
    },
    {
        title: "Discord",
        icon: "/collaboration/discord.png",
        width: 36,
        height: 28,
    },
    {
        title: "Slack",
        icon: "/collaboration/slack.png",
        width: 34,
        height: 35,
    },
    {
        title: "Photoshop",
        icon: "/collaboration/photoshop.png",
        width: 34,
        height: 34,
    },
    {
        title: "Protopie",
        icon: "/collaboration/protopie.png",
        width: 34,
        height: 34,
    },
    {
        title: "Framer",
        icon: "/collaboration/framer.png",
        width: 26,
        height: 34,
    },
    {
        title: "Raindrop",
        icon: "/collaboration/raindrop.png",
        width: 38,
        height: 32,
    },
];

export default function CollabFigure() {
    return (
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-base md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center lg:text-start">
                With smart automation and top-notch security, it's the perfect solution for teams
                looking to work smarter.
            </p>

            {/* circles */}
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-neutral-2 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-neutral-2 rounded-full">
                    {/* gradient */}
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                        {/* logo */}
                        <div className="flex items-center justify-center w-full h-full bg-bg rounded-full">
                            <img
                                src={"/brainwave-symbol.svg"}
                                width={48}
                                height={48}
                                alt="brainwave"
                            />
                        </div>
                    </div>
                </div>

                {/* Collab Applicationa */}
                <ul>
                    {collabApps.map((app, index) => (
                        <CollabApp key={"app" + index} app={app} rotation={index * 45} />
                    ))}
                </ul>

                {/* <LeftCurve />
                        <RightCurve /> */}
            </div>
        </div>
    );
}
