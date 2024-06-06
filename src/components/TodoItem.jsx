import { MdDelete, MdEdit } from "react-icons/md";
import { useContext } from "react";
import { getDate } from "../libs/date";
import AppContext from "../context/AppContext";
import { ButtonDanger, ButtonSecondary, Checkbox } from "./Form";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaList } from "react-icons/fa";

function TodoItem({ todo }) {
    const { updateTodos, destroyTodo, handleEdit } = useContext(AppContext);

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
            <div className="flex items-center gap-1">
                <Popover className="group">
                    <PopoverButton className="flex items-center gap-2 active:outline-none focus:outline-none">
                        <HiOutlineDotsVertical className="" />
                    </PopoverButton>
                    <PopoverPanel
                        anchor="bottom end"
                        className="flex flex-col w-max"
                    >
                        <div className="w-max flex flex-col bg-light-gray border border-primary rounded-sm px-3 py-2 mt-2 space-y-1">
                            <ButtonSecondary
                                className="!text-xs"
                                onClick={() => handleEdit(todo.id)}
                            >
                                <MdEdit /> Edit
                            </ButtonSecondary>
                            <ButtonDanger
                                className="!text-xs"
                                onClick={() => destroyTodo(todo.id)}
                            >
                                <MdDelete />
                                Delete
                            </ButtonDanger>
                        </div>
                    </PopoverPanel>
                </Popover>
            </div>
        </li>
    );
}

export default TodoItem;
