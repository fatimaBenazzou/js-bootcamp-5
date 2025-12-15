import Button from "./Button";
import FeatureList from "./FeatureList";
import { PRICING_PLANS } from "../constants";

const PricingList = () => {
    return (
        <ul className="flex gap-4 max-lg:flex-wrap">
            {PRICING_PLANS.map((item, i) => (
                <li
                    key={item.id || `pricing-${i}`}
                    className="w-80 max-lg:w-full h-full px-6 bg-bg border border-neutral-2 rounded-2xl lg:w-auto even:py-14 odd:py-8 odd:my-4 group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent-lavender/10 hover:border-accent-lavender/30 relative overflow-hidden"
                >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-lavender/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"></div>

                    <div className="relative z-10 flex flex-col gap-4">
                        <h4 className="h4 transition-colors duration-300 group-hover:text-accent-lavender">
                            {item.title}
                        </h4>

                        <p className="body-2 min-h-16 text-neutral/50 transition-colors duration-300 group-hover:text-neutral/70">
                            {item.description}
                        </p>

                        <div className="flex items-center h-24 ">
                            {item.price && (
                                <>
                                    <div className="h3 ">$</div>
                                    <div className="text-8xl leading-none font-bold ">
                                        {item.price}
                                    </div>
                                </>
                            )}
                        </div>

                        <Button
                            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
                            white={!!item.price}
                        >
                            {item.price ? "Get started" : "Contact us"}
                        </Button>

                        <FeatureList features={item.features} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PricingList;
