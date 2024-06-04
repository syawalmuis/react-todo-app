function Input({ className, ...props }) {
    return (
        <input
            {...props}
            className={
                "border bg-light-gray focus:outline-none shadow-custom  px-2 py-0.5 placeholder:text-primary rounded-none text-primary border-primary/30  " +
                className
            }
        />
    );
}
export default Input;
