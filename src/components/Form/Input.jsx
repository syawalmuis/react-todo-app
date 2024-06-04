function Input({ className, ...props }) {
    return (
        <input
            {...props}
            className={
                "border focus:outline-none focus:border-teal-700 px-2 py-0.5 rounded-none text-gray-600 text-sm accent-teal-700 " +
                className
            }
        />
    );
}
export default Input;
