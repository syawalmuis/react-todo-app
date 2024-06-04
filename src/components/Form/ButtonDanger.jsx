function ButtonDanger({ children, ...props }) {
    return (
        <button
            {...props}
            className="text-sm text-gray-100 bg-red-500 px-2 py-0.5 rounded-sm hover:bg-red-600 transition-all"
        >
            {children}
        </button>
    );
}

export default ButtonDanger;
