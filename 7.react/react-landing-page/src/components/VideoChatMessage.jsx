export default function VideoChatMessage() {
    return (
        <div className="absolute top-8 left-12 w-full max-w-56 p-4 pb-7 bg-border rounded-xl font-code text-base md:max-w-72">
            Video generated!
            <div className="absolute left-5 -bottom-4 flex items-center justify-center size-9 bg-accent-lavender rounded-xl">
                <img src={"/brainwave-symbol-white.svg"} width={26} height={26} alt="Brainwave" />
            </div>
            <p className="tagline absolute right-2.5 bottom-1 text-xs uppercase">just now</p>
        </div>
    );
}
