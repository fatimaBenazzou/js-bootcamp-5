import SectionSvg from "../assets/svg/SectionSvg";

export default function Section({ className, id, crosses, children }) {
    return (
        <section
            id={id}
            className={`relative py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
                className || ""
            }`}
        >
            {children}

            <div className="hidden absolute top-0 left-5 w-px h-full bg-stroke pointer-events-none md:block lg:left-7.5 xl:left-10" />
            <div className="hidden absolute top-0 right-5 w-px h-full bg-stroke pointer-events-none md:block lg:right-7.5 xl:right-10" />

            {crosses && (
                <>
                    <div className="hidden absolute top-0 left-7.5 h-px bg-stroke pointer-events-none lg:block xl:left-10 right-10" />
                    <SectionSvg />
                </>
            )}
        </section>
    );
}
