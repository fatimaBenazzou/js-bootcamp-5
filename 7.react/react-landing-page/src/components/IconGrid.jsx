const IconGrid = ({ icons = [], className = "" }) => {
    if (!icons.length) return null;

    return (
        <ul className={`flex items-center justify-between ${className}`}>
            {icons.map((item, index) => (
                <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer ${
                        index === 2
                            ? "w-[3rem] h-[3rem] p-0.25 gradient-outer-border md:w-[4.5rem] md:h-[4.5rem] before:rounded-2xl hover:shadow-lg hover:shadow-accent-lavender/20"
                            : "flex w-10 h-10 bg-border md:w-15 md:h-15 hover:bg-accent-lavender/10 hover:shadow-md"
                    }`}
                    style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                >
                    <div
                        className={
                            index === 2
                                ? "flex items-center justify-center w-full bg-neutral-2/80 h-full rounded-2xl transition-colors duration-300 hover:bg-neutral-2/90"
                                : ""
                        }
                    >
                        <img
                            src={item}
                            width={24}
                            height={24}
                            alt={`Service icon ${index + 1}`}
                            className="transition-transform duration-300 hover:rotate-12"
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default IconGrid;
