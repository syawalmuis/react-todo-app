function ButtonSecondary({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={
                "text-sm flex items-center gap-1.5 text-dark-gray bg-light-gray px-2 py-0.5 rounded-sm hover:text-dark-gray transition-all " +
                className
            }
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
