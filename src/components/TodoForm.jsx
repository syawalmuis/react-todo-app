import ButtonPrimary from "./Form/ButtonPrimary";
import TodoItem from "./TodoItem";
import Input from "./Form/Input";
import { Fragment, useEffect, useRef, useState } from "react";
import Select from "./Form/Select";
import { filterTodos as filterTd, getTodos } from "../database/todos";

function TodoForm({
    todos,
    createTodo,
    filterTodos,
    setFilterSelected,
    filterSelected,
}) {
    const [todoErrorMessage, setTodoErrorMessage] = useState(null);
    const submitButtonRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { value: text } = form.querySelector("input");
        const isEmpty = text.trim() === "";
        if (isEmpty) {
            setTodoErrorMessage(
                <span className="font-semibold ms-0.5 text-xs text-red-600">
                    Todo tidak boleh kosong!
                </span>
            );
            setTimeout(() => setTodoErrorMessage(null), 1000);
            return;
        } else {
            setTodoErrorMessage(null);
        }

        createTodo({
            id: Date.now(),
            text,
            isCompleted: false,
            createdAt: Date.now(),
        });
        form.reset();
    };

    const options = [
        { id: 1, text: "All" },
        { id: 2, text: "Completed" },
        { id: 3, text: "Uncompleted" },
    ];

    const onChange = (option) => {
        setFilterSelected(option);
        filterTodos(String(option.text).toLowerCase());
    };

    useEffect(() => {
        setFilterSelected(options[0]);
    }, []);

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex w-full mb-5 px-2 items-start justify-center mt-4 gap-2"
            >
                <div className="w-full">
                    <Input
                        id="submit"
                        className={"w-full"}
                        placeholder="Masukkan todo"
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                submitButtonRef.current.classList.add(
                                    "pressed"
                                );
                                setTimeout(() => {
                                    submitButtonRef.current.classList.remove(
                                        "pressed"
                                    );
                                }, 300);
                            }
                        }}
                    />
                    {todoErrorMessage}
                </div>
                <ButtonPrimary
                    ref={submitButtonRef}
                    id="submit"
                    type="submit"
                />
            </form>

            <div className="px-2 flex items-center text-sm max-sm:text-sm justify-between gap-2 mb-2">
                <h4 className="font-medium leading-relaxed text-dark-gray">
                    Todo completed{" "}
                    <span className="text-primary font-semibold">
                        {filterTd("completed").length}
                        <span className="text-dark-gray">
                            /{getTodos().length}
                        </span>
                    </span>
                </h4>
                <div className="max-w-40 w-full ">
                    {filterSelected && (
                        <Select
                            onChange={onChange}
                            options={options}
                            selected={filterSelected}
                        />
                    )}
                </div>
            </div>
            <ol className="space-y-2 overflow-auto h-[60vh] px-2 pb-5 relative">
                {todos.length > 0 ? (
                    todos.map((todo, idx) => {
                        return (
                            <Fragment key={idx}>
                                <TodoItem {...{ todo }} />
                            </Fragment>
                        );
                    })
                ) : (
                    <li className="text-primary/60 select-none font-bold left-1/2 -translate-x-1/2 uppercase tracking-widest absolute top-1/3">
                        Belum ada todo
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TodoForm;
