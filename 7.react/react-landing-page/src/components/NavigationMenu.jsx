import Button from "./Button";

/**
 * NavigationMenu Component
 * Renders the main navigation with responsive behavior
 * Handles mobile menu state and navigation items
 */
const NavigationMenu = ({
    items = [],
    isOpen = false,
    onToggle = () => {},
    pathname = "",
    className = "",
}) => {
    return (
        <nav
            className={`
                ${isOpen ? "flex" : "hidden"} 
                fixed top-20 left-0 right-0 bottom-0 bg-bg lg:static lg:flex lg:mx-auto lg:bg-transparent
                ${className}
            `}
        >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                {items.map((item) => (
                    <a
                        key={item.title}
                        href={item.url}
                        onClick={onToggle}
                        className={`
                            block relative font-code text-2xl uppercase text-neutral transition-colors 
                            hover:text-color-1 
                            ${item.onlyMobile ? "lg:hidden" : ""} 
                            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
                            ${item.url === pathname ? "z-2 lg:text-color-1" : "lg:text-neutral/50"} 
                            lg:leading-5 lg:hover:text-color-1 xl:px-12
                        `}
                    >
                        {item.title}
                    </a>
                ))}
            </div>

            {/* Navigation Background */}
            <div className="absolute inset-0 pointer-events-none lg:hidden">
                <div className="absolute inset-0 opacity-0.1">
                    <img
                        className="w-full h-full object-cover"
                        src="/hero/hero-background.jpg"
                        width={688}
                        height={953}
                        alt="Background"
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavigationMenu;
