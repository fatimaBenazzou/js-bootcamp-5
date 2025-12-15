const Button = ({ className = "", href, onClick, children, white = false }) => {
    const baseClasses =
        "button relative items-center justify-center h-11 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-95";
    const variantClasses = white
        ? "text-bg flex hover:bg-accent-lavender hover:text-neutral bg-neutral hover:shadow-accent-lavender/20 focus:shadow-accent-lavender/20"
        : "gradient-outer-border before:rounded-xl text-neutral hover:text-accent-lavender hover:shadow-accent-lavender/10 focus:shadow-accent-lavender/10";

    const classes = `${baseClasses} ${variantClasses} ${className}`;

    const InnerContent = (
        <span
            className={`relative w-full flex justify-center rounded-xl px-6 py-3 font-bold tracking-wide transition-all duration-300 ease-out ${
                white
                    ? "hover:bg-gradient-to-r hover:from-accent-lavender/10 hover:to-transparent"
                    : "bg-bg hover:bg-gradient-to-r hover:from-accent-lavender/5 hover:to-transparent"
            }`}
        >
            {children}
        </span>
    );

    if (href) {
        return (
            <a href={href} className={classes}>
                {InnerContent}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {InnerContent}
        </button>
    );
};

export default Button;
