export default function BenefitCard({ item }) {
    return (
        <li className="relative md:max-w-[24rem] gradient-outer-border before:rounded-3xl group cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-lavender/10">
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 transition-colors duration-300 group-hover:text-accent-lavender">
                    {item.title}
                </h5>
                <p className="body-2 mb-6 text-base transition-colors duration-300 group-hover:text-neutral/80">
                    {item.text}
                </p>
                <div className="flex items-center mt-auto">
                    <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                    />
                    <p className="ml-auto font-code text-xs font-bold text-neutral uppercase tracking-wider transition-all duration-300 group-hover:text-accent-lavender group-hover:translate-x-1">
                        Explore more
                        <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </p>
                </div>
            </div>

            <div className="absolute inset-0.5 bg-bg rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110">
                    {item.imageUrl && (
                        <img
                            src={item.imageUrl}
                            width={380}
                            height={362}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-lavender/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
        </li>
    );
}
