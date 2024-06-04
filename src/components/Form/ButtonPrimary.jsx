function ButtonPrimary({ className, ...props }) {
    return (
        <button
            {...props}
            className={
                "bg-light-gray border border-primary/30 text-primary shadow-custom flex items-center justify-center px-2 py-0.5  rounded-sm tracking-wide hover:text-priamry/90 transition-all " +
                className
            }
        >
            Tambah
        </button>
    );
}

export default ButtonPrimary;
