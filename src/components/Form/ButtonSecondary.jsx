function ButtonSecondary({ children, ...props }) {
    return (
        <button
            {...props}
            className="text-sm border border-primary/30 shadow-custom text-dark-gray bg-light-gray px-2 py-0.5 rounded-sm hover:text-dark-gray transition-all"
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
