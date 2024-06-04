import { getDate } from "../libs/date";

type Todo = {
    id: number;
    text: string;
    isCompleted: number;
    createdAt: number;
};

const sortingDefault = (a: Todo, b: Todo) =>
    a.isCompleted - b.isCompleted || a.createdAt - b.createdAt;

const defaultTodos: Todo[] = [
    { id: 1, text: "Learn React", isCompleted: 0, createdAt: Date.now() },
    { id: 2, text: "Learn Firebase", isCompleted: 0, createdAt: Date.now() },
    { id: 3, text: "Learn GraphQL", isCompleted: 0, createdAt: Date.now() },
];

const getTodos = (): Todo[] | undefined => {
    const todos = localStorage.getItem("todos");
    if (!todos) setTodos(defaultTodos);
    return !todos ? [] : (JSON.parse(todos) as Todo[]).sort(sortingDefault);
};

const setTodos = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const createTodo = (todo: Todo) => {
    const todos = [...(getTodos() ?? []), todo];
    if (!todos) {
        return;
    }
    setTodos(todos);
    return todos.sort(sortingDefault);
};

const updateTodo = (id: number, updatedTodo: Todo) => {
    const todos = getTodos()?.map((todo) => {
        if (todo.id === id) {
            return updatedTodo;
        }
        return todo;
    });
    setTodos(todos ?? []);
    return todos?.sort(sortingDefault);
};

const filterTodos = (filter: "completed" | "notCompleted"): Todo[] => {
    const todos = getTodos();
    console.log(todos);
    if (!todos) return [];
    return (
        filter === "completed"
            ? todos.filter((todo) => Boolean(todo.isCompleted) === true)
            : todos.filter((todo) => Boolean(todo.isCompleted) === false)
    ).sort(sortingDefault);
};

export { getTodos, updateTodo, createTodo, filterTodos };
