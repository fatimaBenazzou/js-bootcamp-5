export default function CollabApp({ app, rotation }) {
    return (
        <li
            className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <div
                className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-bg border border-neutral/15 rounded-xl"
                style={{ transform: `rotate(-${rotation}deg)` }}
            >
                <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                />
            </div>
        </li>
    );
}
