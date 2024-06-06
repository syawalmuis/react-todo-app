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
    { id: 4, text: "Learn TypeScript", isCompleted: 0, createdAt: Date.now() },
    { id: 5, text: "Learn Next.js", isCompleted: 0, createdAt: Date.now() },
    { id: 6, text: "Learn Redux", isCompleted: 0, createdAt: Date.now() },
    { id: 7, text: "Learn Node.js", isCompleted: 0, createdAt: Date.now() },
    { id: 8, text: "Learn Express.js", isCompleted: 0, createdAt: Date.now() },
    { id: 9, text: "Learn MongoDB", isCompleted: 0, createdAt: Date.now() },
    { id: 10, text: "Learn MySQL", isCompleted: 0, createdAt: Date.now() },
    { id: 11, text: "Learn PostgreSQL", isCompleted: 0, createdAt: Date.now() },
    { id: 12, text: "Learn Docker", isCompleted: 0, createdAt: Date.now() },
    { id: 13, text: "Learn Kubernetes", isCompleted: 0, createdAt: Date.now() },
    { id: 14, text: "Learn AWS", isCompleted: 0, createdAt: Date.now() },
    { id: 15, text: "Learn GCP", isCompleted: 0, createdAt: Date.now() },
    { id: 16, text: "Learn Azure", isCompleted: 0, createdAt: Date.now() },
    { id: 17, text: "Learn CI/CD", isCompleted: 0, createdAt: Date.now() },
    { id: 18, text: "Learn Testing", isCompleted: 0, createdAt: Date.now() },
    {
        id: 19,
        text: "Learn Design Patterns",
        isCompleted: 0,
        createdAt: Date.now(),
    },
    { id: 20, text: "Learn Algorithms", isCompleted: 0, createdAt: Date.now() },
    {
        id: 21,
        text: "Learn Data Structures",
        isCompleted: 0,
        createdAt: Date.now(),
    },
    { id: 22, text: "Learn Clean Code", isCompleted: 0, createdAt: Date.now() },
];

const getTodos = (): Todo[] | undefined => {
    return defaultTodos.sort(sortingDefault);
};

const setTodos = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodo = (id: number, updatedTodo: Todo, todos: Todo[]) => {
    const newTodos = todos?.map((todo) => {
        if (todo.id === id) {
            return updatedTodo;
        }
        return todo;
    });
    setTodos(newTodos ?? []);

    return newTodos?.sort(sortingDefault);
};

const filterTodos = (
    filter: "all" | "completed" | "uncompleted",
    todos: Todo[]
): Todo[] => {
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

export { getTodos, updateTodo, filterTodos };
