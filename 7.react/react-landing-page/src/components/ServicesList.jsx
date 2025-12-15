const ServicesList = ({ services = [], className = "" }) => {
    if (!services.length) return null;

    return (
        <ul className={`body-2 ${className}`}>
            {services.map((item, index) => (
                <li key={index} className="flex py-4 border-t border-neutral-2">
                    <img width={24} height={24} src={"/check.svg"} />
                    <p className="ml-4 text-neutral">{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;
