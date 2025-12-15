const companyLogos = [
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
    "/yourlogo.svg",
];

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-neutral/50 transition-colors duration-300 hover:text-accent-lavender">
                Helping people create beautiful content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        className="flex items-center justify-center flex-1 h-[8.5rem] group cursor-pointer transition-all duration-300 hover:scale-110"
                        key={index}
                        style={{
                            animationDelay: `${index * 200}ms`,
                            animation: "fadeInUp 0.8s ease-out forwards",
                        }}
                    >
                        <img
                            src={logo}
                            width={134}
                            height={28}
                            alt={`Company logo ${index + 1}`}
                            className="transition-all duration-300 group-hover:opacity-80 group-hover:scale-110 group-hover:filter group-hover:brightness-125"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyLogos;
