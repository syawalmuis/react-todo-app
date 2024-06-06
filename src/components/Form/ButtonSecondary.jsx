function ButtonSecondary({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={
                "text-sm border flex items-center gap-1.5 border-primary/30 shadow-custom text-dark-gray bg-light-gray px-2 py-0.5 rounded-sm hover:text-dark-gray transition-all " +
                className
            }
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
