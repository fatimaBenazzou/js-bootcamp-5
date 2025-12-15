const Generating = ({ className }) => {
    return (
        <div
            className={`flex items-center mx-auto rounded-3xl h-[3.5rem] px-6 bg-bg/80 absolute left-4 right-4 bottom-4 shadow-2xl border border-neutral-2/20 ${
                className || ""
            } text-neutral`}
        >
            <img className="w-5 h-5 mr-4 animate-spin" src={"/loading.png"} alt="Loading" />
            AI is generating
        </div>
    );
};

export default Generating;
