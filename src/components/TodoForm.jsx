import ButtonPrimary from "./Form/ButtonPrimary";
import TodoItem from "./TodoItem";
import Input from "./Form/Input";
import { Fragment, useState } from "react";
import { filterTodos } from "../database/todos";

function TodoForm({ todos, createTodo }) {
    const [todoErrorMessage, setTodoErrorMessage] = useState(null);

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
        console.log(todoErrorMessage);

        createTodo({
            id: Date.now(),
            text,
            isCompleted: false,
            createdAt: Date.now(),
        });
        form.reset();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex w-full mb-5 px-2 items-start justify-center mt-4 gap-2"
            >
                <div className="w-full">
                    <Input className={"w-full"} placeholder="Masukkan todo" />
                    {todoErrorMessage}
                </div>
                <ButtonPrimary type="submit" />
            </form>

            <div className="px-2">
                <h4 className="font-medium leading-relaxed">
                    Todo completed{" "}
                    <span className="text-primary font-semibold">
                        {filterTodos("completed").length}
                    </span>
                </h4>
            </div>
            <ol className="space-y-2 overflow-auto max-h-[60vh] px-2 pb-5">
                {todos.map((todo, idx) => {
                    return (
                        <Fragment key={idx}>
                            <TodoItem {...{ todo }} />
                        </Fragment>
                    );
                })}
            </ol>
        </div>
    );
}

export default TodoForm;
