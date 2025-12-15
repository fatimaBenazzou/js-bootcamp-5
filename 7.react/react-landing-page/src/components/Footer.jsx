import Section from "./Section";

const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: "/socials/discord.svg",
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: "/socials/twitter.svg",
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: "/socials/instagram.svg",
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: "/socials/telegram.svg",
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: "/socials/facebook.svg",
        url: "#",
    },
];
export default function Footer() {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-base lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-neutral-2/10 rounded-full transition-colors hover:bg-neutral-2/80"
                        >
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
