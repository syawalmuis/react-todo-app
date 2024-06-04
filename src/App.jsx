import { createContext, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { getTodos, updateTodo, createTodo as addTodo } from "./database/todos";
import Card from "./components/Form/Card";

export const AppContext = createContext({ updateTodos: () => {} });

function App() {
    const [todos, setTodos] = useState(getTodos());

    const updateTodos = (id, todo) => {
        setTodos(updateTodo(id, todo));
    };

    const createTodo = (todo) => {
        const todos = addTodo(todo);
        setTodos(todos);
    };

    return (
        <AppContext.Provider value={{ updateTodos }}>
            <br />
            <Card className="max-w-lg w-full mx-auto pt-10">
                <h2 className="text-center font-semibold text-xl tracking-wider uppercase text-gray-800">
                    Todo
                </h2>

                <TodoForm {...{ todos, createTodo }} />
            </Card>
        </AppContext.Provider>
    );
}

export default App;
