export default function VideoBar() {
    return (
        <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
            <img
                src={"/play.svg"}
                width={24}
                height={24}
                alt="Play"
                className="object-contain mr-3"
            />

            <div className="flex-1 bg-neutral">
                <div className="w-1/2 h-0.5 bg-accent-lavender"></div>
            </div>
        </div>
    );
}
