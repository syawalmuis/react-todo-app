import { getDate } from "../libs/date";

type Todo = {
    id: number;
    text: string;
    isCompleted: number;
    createdAt: number;
};

type Filter = "all" | "completed" | "uncompleted";

const sortingDefault = (a: Todo, b: Todo) =>
    a.isCompleted - b.isCompleted || b.createdAt - a.createdAt;

const getTodos = (): Todo[] | undefined => {
    const todos = localStorage.getItem("todos");
    if (!todos) setTodos([]);
    return (!todos ? [] : (JSON.parse(todos) as Todo[])).sort(sortingDefault);
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
};

const deleteTodo = (id: number, filter: Filter) => {
    const todos = getTodos()?.filter((todo) => todo.id !== id);
    setTodos(todos ?? []);
    return ["completed", "uncompleted"].includes(filter)
        ? filterTodos(filter)
        : todos?.sort(sortingDefault);
};

const updateTodo = (id: number, updatedTodo: Todo) => {
    const todos = getTodos()?.map((todo) => {
        if (todo.id === id) {
            return updatedTodo;
        }
        return todo;
    });
    setTodos(todos ?? []);
};

const filterTodos = (filter: Filter, search: string): Todo[] => {
    const todos = searchTodos(search);
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

const searchTodos = (search: string): Todo[] => {
    const todos = getTodos();
    if (!todos) return [];
    return todos.filter((todo) => todo.text.toLowerCase().includes(search));
};

export {
    getTodos,
    updateTodo,
    createTodo,
    filterTodos,
    deleteTodo,
    searchTodos,
};
