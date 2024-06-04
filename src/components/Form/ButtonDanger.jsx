function ButtonDanger({ children, ...props }) {
    return (
        <button
            {...props}
            className="text-sm border border-primary/30 shadow-custom bg-light-gray text-red-500 px-2 py-0.5 rounded-sm hover:text-red-600 transition-all"
        >
            {children}
        </button>
    );
}

export default ButtonDanger;
