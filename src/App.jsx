import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { getTodos, updateTodo } from "./database/todos";
import Card from "./components/Form/Card";
import Footer from "./components/Footer";
import AppContext from "./context/AppContext";

function App() {
    const [todos, setTodos] = useState(getTodos());
    const [filterSelected, setFilterSelected] = useState(null);

    const updateTodos = (id, todo) => {
        setTodos(updateTodo(id, todo, todos));
    };

    return (
        <AppContext.Provider value={{ updateTodos }}>
            <main className="!px-5 pt-5">
                <Card className="max-w-lg w-full mx-auto pt-10 pb-12 relative">
                    <h2 className="text-center font-semibold text-xl tracking-wider uppercase text-dark-gray">
                        Todo
                    </h2>
                    <TodoForm
                        {...{
                            todos,
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
