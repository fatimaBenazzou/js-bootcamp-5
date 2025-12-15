import TagLine from "./Tagline";

export default function RoadmapItem({ item }) {
    const status = item.status === "done" ? "Done" : "In progress";

    return (
        <li className="md:flex gradient-outer-border before:rounded-3xl even:md:translate-y-28 p-px z-20">
            <div className="relative p-8 bg-bg rounded-3xl overflow-hidden xl:p-16">
                {/* grids */}
                <div className="absolute top-0 left-0 max-w-full">
                    <img className="w-full" src={"/grid.png"} width={550} height={550} alt="Grid" />
                </div>
                <div className="flex flex-col gap-8">
                    {/* header */}
                    <div className="flex items-center justify-between">
                        <TagLine>{item.date}</TagLine>

                        <div className="flex items-center px-4 py-1 rounded-lg bg-neutral">
                            <img
                                className="mr-2.5"
                                src={item.status === "done" ? "/check-02.svg" : "/loading-01.svg"}
                                width={16}
                                height={16}
                                alt={status}
                            />
                            <div className="tagline">{status}</div>
                        </div>
                    </div>

                    {/* main content */}
                    <div className="-mx-16">
                        <img
                            className="w-full"
                            src={item.imageUrl}
                            width={628}
                            height={426}
                            alt={item.title}
                        />
                    </div>

                    {/* footer */}
                    <h4 className="h4">{item.title}</h4>
                    <p className="body-2">{item.text}</p>
                </div>
            </div>
        </li>
    );
}
