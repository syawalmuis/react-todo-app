import { MdDelete } from "react-icons/md";
import ButtonDanger from "./Form/ButtonDanger";
import Checkbox from "./Form/Checkbox";
import { useContext } from "react";
import { getDate } from "../libs/date";
import AppContext from "../context/AppContext";

function TodoItem({ todo }) {
    const { updateTodos, destroyTodo } = useContext(AppContext);

    return (
        <li className="flex select-none items-center justify-between p-2 rounded-sm bg-light-gray shadow-custom  border border-primary/30 gap-2 ">
            <div className="flex items-center gap-1.5 w-full">
                <Checkbox
                    {...{ checked: Boolean(todo.isCompleted) ? true : false }}
                    type="checkbox"
                    id={todo.id}
                    onChange={(event) =>
                        updateTodos(todo.id, {
                            ...todo,
                            isCompleted: event.target.checked,
                            completedAt: event.target.checked && Date.now(),
                        })
                    }
                />
                <label
                    htmlFor={todo.id}
                    className={"cursor-pointer flex flex-col w-full"}
                >
                    <span
                        className={
                            Boolean(todo.isCompleted)
                                ? "line-through text-primary"
                                : "text-gray-800"
                        }
                    >
                        {todo.text}
                    </span>

                    {
                        <span className="font-thin text-xs stroke-none">
                            {getDate(
                                todo.isCompleted
                                    ? todo.completedAt
                                    : todo.createdAt
                            )}
                        </span>
                    }
                </label>
            </div>
        </li>
    );
}

export default TodoItem;
