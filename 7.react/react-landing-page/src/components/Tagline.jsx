const TagLine = ({ className, children }) => {
    return (
        <div className={`tagline flex items-center gap-4 ${className || ""}`}>
            <span className="bg-conic-gradient bg-clip-text text-transparent">[</span>
            <span className="tracking-widest">{children}</span>
            <span className="bg-conic-gradient bg-clip-text text-transparent">]</span>
        </div>
    );
};

export default TagLine;
