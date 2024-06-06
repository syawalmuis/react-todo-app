import { getDate } from "../libs/date";

type Todo = {
    id: number;
    text: string;
    isCompleted: number;
    createdAt: number;
};

const sortingDefault = (a: Todo, b: Todo) =>
    a.isCompleted - b.isCompleted || b.createdAt - a.createdAt;

const defaultTodos: Todo[] = [
    { id: 1, text: "Learn React", isCompleted: 0, createdAt: Date.now() },
    { id: 2, text: "Learn Firebase", isCompleted: 0, createdAt: Date.now() },
    { id: 3, text: "Learn GraphQL", isCompleted: 0, createdAt: Date.now() },
];

const getTodos = (filter?: string): Todo[] | undefined => {
    const todos = localStorage.getItem("todos");
    if (!todos) setTodos([]);
    return (!todos ? [] : (JSON.parse(todos) as Todo[])).sort(sortingDefault);
};

const setTodos = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const createTodo = (
    todo: Todo,
    filter: "all" | "uncompleted" | "completed"
) => {
    const todos = [...(getTodos(filter) ?? []), todo];
    if (!todos) {
        return;
    }
    setTodos(todos);
    return ["completed", "uncompleted"].includes(filter)
        ? filterTodos(filter)
        : todos?.sort(sortingDefault);
};

const deleteTodo = (
    id: number,
    filter: "all" | "uncompleted" | "completed"
) => {
    const todos = getTodos()?.filter((todo) => todo.id !== id);
    setTodos(todos ?? []);
    return ["completed", "uncompleted"].includes(filter)
        ? filterTodos(filter)
        : todos?.sort(sortingDefault);
};

const updateTodo = (
    id: number,
    updatedTodo: Todo,
    filter: "all" | "uncompleted" | "completed"
) => {
    const todos = getTodos()?.map((todo) => {
        if (todo.id === id) {
            return updatedTodo;
        }
        return todo;
    });
    setTodos(todos ?? []);

    return ["completed", "uncompleted"].includes(filter)
        ? filterTodos(filter)
        : todos?.sort(sortingDefault);
};

const filterTodos = (filter: "all" | "completed" | "uncompleted"): Todo[] => {
    const todos = getTodos();
    if (!todos) return [];
    let newTodos: Todo[];

    switch (filter) {
        case "completed":
            newTodos = todos.filter(
                (todo) => Boolean(todo.isCompleted) === true
            );
            break;
        case "uncompleted":
            newTodos = todos.filter(
                (todo) => Boolean(todo.isCompleted) === false
            );
            break;
        default:
            newTodos = todos;
            break;
    }
    return newTodos.sort(sortingDefault);
};

export { getTodos, updateTodo, createTodo, filterTodos, deleteTodo };
