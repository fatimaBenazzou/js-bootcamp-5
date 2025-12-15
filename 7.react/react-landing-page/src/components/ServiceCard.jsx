const ServiceCard = ({ title, text, iconUrl, imageUrl, isTop = false, className = "" }) => {
    return (
        <div
            className={`
            relative p-4 bg-n-6 border border-n-6 rounded-3xl 
            overflow-hidden lg:p-6 xl:h-[4rem]
            ${isTop ? "h-[39rem]" : "h-[24rem]"} 
            ${className}
        `}
        >
            <div className="absolute inset-0">
                <img src={imageUrl} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-white">{title}</h4>
                <p className="body-2 mb-[3rem] text-n-3">{text}</p>

                {iconUrl && (
                    <div className="flex items-center justify-center w-15 h-15 bg-white rounded-lg">
                        <img src={iconUrl} width={24} height={24} alt={title} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
