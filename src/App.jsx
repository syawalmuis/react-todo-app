import { createContext, useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import {
    getTodos,
    updateTodo,
    createTodo as addTodo,
    deleteTodo,
    filterTodos as filterTd,
} from "./database/todos";
import Card from "./components/Form/Card";
import Footer from "./components/Footer";
import AppContext from "./context/AppContext";

function App() {
    const [todos, setTodos] = useState(getTodos());
    const [filter, setFilter] = useState("all");
    const [filterSelected, setFilterSelected] = useState(null);

    const updateTodos = (id, todo) => {
        updateTodo(id, todo, filter);
    };

    const createTodo = (todo) => {
        let newFilter = filter;
        if (newFilter === "completed") {
            newFilter = "uncompleted";
        }
        addTodo(todo, newFilter);
    };

    const destroyTodo = (id) => {
        deleteTodo(id, filter);
    };

    const filterTodos = (filter) => {
        setFilter(filter);
    };

    useEffect(() => {
        setTodos(filterTd(filter));
    }, [filter, destroyTodo, createTodo, updateTodos]);

    return (
        <AppContext.Provider value={{ updateTodos, destroyTodo }}>
            <main className="!px-5 pt-5">
                <Card className="max-w-lg w-full mx-auto pt-10 pb-12 relative">
                    <h2 className="text-center font-semibold text-xl tracking-wider uppercase text-dark-gray">
                        Todo
                    </h2>
                    <TodoForm
                        {...{
                            todos,
                            createTodo,
                            filterTodos,
                            filter,
                            setFilterSelected,
                            filterSelected,
                        }}
                    />
                    <Footer />
                </Card>
            </main>
        </AppContext.Provider>
    );
}

export default App;
