import Button from "../components/Button";
import Heading from "../components/Heading";
import { Gradient } from "../components/Roadmap";
import RoadmapItem from "../components/RoadmapItem";
import Section from "../components/Section";

const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: "/roadmap/image-1.png",
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: "/roadmap/image-2.png",
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: "/roadmap/image-3.png",
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: "/roadmap/image-4.png",
    },
];

export default function Roadmap() {
    return (
        <Section className="overflow-hidden" id="roadmap">
            <div className="container">
                <Heading tag="Ready to get started" title="What we’re working on" />

                <ul className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    {roadmap.map((item) => (
                        <RoadmapItem key={item.id} item={item} />
                    ))}

                    <Gradient />
                </ul>

                <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                    <Button href="/roadmap">Our roadmap</Button>
                </div>
            </div>
        </Section>
    );
}
