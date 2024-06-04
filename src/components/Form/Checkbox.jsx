function Checkbox({ className, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "border w-4 h-4 focus:outline-none focus:border-teal-700 px-2 py-0.5 rounded-none text-gray-600 text-sm accent-teal-700 focus:ring-teal-700 focus:ring-2 ring-offset-1 " +
                className
            }
        />
    );
}
export default Checkbox;
