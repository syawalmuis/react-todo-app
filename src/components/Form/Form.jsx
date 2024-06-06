import { useEffect, useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import ButtonPrimary from "./ButtonPrimary";
import Input from "./Input";

export default function Form({
    onSubmit,
    placeholder = "Type your To-Do here",
    todoErrorMessage,
    isCreate = true,
}) {
    const ref = useRef(null);
    return (
        <form
            onSubmit={onSubmit}
            className="flex items-start justify-center w-full gap-2 "
        >
            <div className="!w-full relative">
                <Input
                    id="submit"
                    className={"w-full [&~label]:placeholder-shown:inline"}
                    placeholder={placeholder}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            ref.current.classList.add("pressed");
                            setTimeout(() => {
                                ref.current.classList.remove("pressed");
                            }, 300);
                        }
                    }}
                />
                <label
                    htmlFor="search"
                    className="absolute hidden right-2 top-[0.6rem] z-10 text-gray-500 text-xs"
                >
                    Ctrl + E
                </label>
                {todoErrorMessage}
            </div>
            {isCreate && (
                <ButtonPrimary
                    ref={ref}
                    id="submit"
                    type="submit"
                    className="px-4"
                >
                    <MdFormatListBulletedAdd className="text-2xl font-bold" />
                </ButtonPrimary>
            )}
        </form>
    );
}
