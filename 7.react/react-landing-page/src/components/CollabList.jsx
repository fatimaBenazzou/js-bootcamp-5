import Button from "./Button";
import CollabItem from "./CollabItem";

const collabContent = [
    {
        title: "Seamless Integration",
        text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    {
        title: "Smart Automation",
    },
    {
        title: "Top-notch Security",
    },
];

export default function CollabList() {
    return (
        <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>
            <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item, i) => (
                    <CollabItem key={"content" + i} item={item} />
                ))}
            </ul>

            <Button>Try it now</Button>
        </div>
    );
}
