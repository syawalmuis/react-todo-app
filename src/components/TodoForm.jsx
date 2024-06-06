import TodoItem from "./TodoItem";
import { Fragment } from "react";
import { filterTodos, getTodos } from "../database/todos";

function TodoForm({ todos }) {
    return (
        <div>
            <div className="px-2 flex items-center text-sm max-sm:text-sm justify-between gap-2 mb-2">
                <h4 className="font-medium leading-relaxed text-dark-gray">
                    Todo completed{" "}
                    <span className="text-primary font-semibold">
                        {filterTodos("completed", todos).length}
                        <span className="text-dark-gray">
                            /{getTodos().length}
                        </span>
                    </span>
                </h4>
            </div>

            <ol className="space-y-2 overflow-auto h-[70vh] px-2 pb-5 relative">
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
