import BenefitCard from "../components/BenefitCard";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { BENEFITS } from "../constants";

export default function Benefits() {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with Brainwave"
                />

                {/* benefits list */}
                <ul className="flex flex-wrap gap-10 mb-10">
                    {BENEFITS.map((item, i) => (
                        <BenefitCard key={item.id || i} item={item} />
                    ))}
                </ul>
            </div>
        </Section>
    );
}
