/**
 * FeatureList Component
 * Renders a list of features with check icons
 * Used in pricing cards and benefit sections
 */
const FeatureList = ({ features = [], className = "" }) => {
    if (!features.length) return null;

    return (
        <ul className={className}>
            {features.map((feature, index) => (
                <li
                    key={`feature-${index}`}
                    className="flex items-start py-5 border-t border-stroke rounded-lg"
                    style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                >
                    <img src="/check.svg" width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4 ">{feature}</p>
                </li>
            ))}
        </ul>
    );
};

export default FeatureList;
