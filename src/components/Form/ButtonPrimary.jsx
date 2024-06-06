import { forwardRef } from "react";

export default forwardRef(function ButtonPrimary({ className, ...props }, ref) {
    return (
        <button
            {...props}
            ref={ref}
            className={
                "bg-light-gray border border-primary/30 text-primary shadow-custom flex items-center justify-center px-2 py-0.5  rounded-sm tracking-wide hover:text-priamry/90 transition-all focus:outline-none  focus:border-primary " +
                className
            }
        >
            {props.children}
        </button>
    );
});
