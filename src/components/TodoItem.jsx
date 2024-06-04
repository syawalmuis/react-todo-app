import { MdDelete, MdEdit } from "react-icons/md";
import ButtonSecondary from "./Form/ButtonSecondary";
import ButtonDanger from "./Form/ButtonDanger";
import Checkbox from "./Form/Checkbox";
import { useContext } from "react";
import { AppContext } from "../App";
import { getDate, getDateTime, getTime } from "../libs/date";

function TodoItem({ todo }) {
    const { updateTodos } = useContext(AppContext);
    console.log(getTime(Date.now()));
    return (
        <li className="flex select-none items-center justify-between p-2 rounded-sm bg-light-gray shadow-custom  border border-primary/30 ">
            <div className="flex items-center gap-1.5">
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
                    className={"cursor-pointer flex flex-col"}
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
            <div className="flex items-center gap-1">
                <ButtonSecondary>
                    {" "}
                    <MdEdit />{" "}
                </ButtonSecondary>
                <ButtonDanger>
                    <MdDelete />
                </ButtonDanger>
            </div>
        </li>
    );
}

export default TodoItem;
