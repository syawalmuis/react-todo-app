function ButtonPrimary({ className, ...props }) {
    return (
        <button
            {...props}
            className={
                "bg-teal-700 flex items-center justify-center px-2 py-0.5 text-sm text-gray-100 rounded-sm tracking-wide hover:bg-teal-600 hover:text-gray-50 transition-all " +
                className
            }
        >
            Tambah
        </button>
    );
}

export default ButtonPrimary;
