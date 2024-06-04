function ButtonSecondary({ children, ...props }) {
    return (
        <button
            {...props}
            className="text-sm text-gray-100 bg-sky-500 px-2 py-0.5 rounded-sm hover:bg-sky-600 transition-all"
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
