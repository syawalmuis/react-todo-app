import { createContext, useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import {
    getTodos,
    updateTodo,
    createTodo as addTodo,
    deleteTodo,
    filterTodos as filterTd,
    searchTodos,
} from "./database/todos";
import Card from "./components/Form/Card";
import Footer from "./components/Footer";
import AppContext from "./context/AppContext";
import { BiSearch } from "react-icons/bi";

function App() {
    const [todos, setTodos] = useState(getTodos());
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [filterSelected, setFilterSelected] = useState(null);

    const inputSearchRef = useRef(null);

    const updateTodos = (id, todo) => {
        updateTodo(id, todo, filter);
        getUpdatedTodo();
    };

    const createTodo = (todo) => {
        let newFilter = filter;
        if (newFilter === "completed") {
            newFilter = "uncompleted";
        }
        addTodo(todo, newFilter);
        getUpdatedTodo();
    };

    const destroyTodo = (id) => {
        deleteTodo(id, filter);
        getUpdatedTodo();
    };

    const filterTodos = (filter) => {
        setFilter(filter);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const getUpdatedTodo = () => {
        setTodos(filterTd(filter, search));
    };

    useEffect(() => {
        getUpdatedTodo();
    }, [filter, search]);

    useEffect(() => {
        window.addEventListener("keydown", function (e) {
            if (e.key === "k" && e.ctrlKey) {
                e.preventDefault();
                inputSearchRef.current.focus();
            }
        });
    }, []);

    return (
        <AppContext.Provider value={{ updateTodos, destroyTodo }}>
            <main className="!px-5 pt-3">
                <Card className="max-w-lg w-full mx-auto pt-10 pb-12 relative">
                    <div className="px-2 flex justify-between text-center">
                        <h2 className="font-semibold text-xl tracking-wider text-dark-gray">
                            To-Do
                        </h2>
                        <div className="flex items-center relative">
                            <label
                                htmlFor="search"
                                className="absolute left-2 top-[0.55rem] text-gray-400 text-lg"
                            >
                                <BiSearch />
                            </label>
                            <input
                                id="search"
                                type="text"
                                ref={inputSearchRef}
                                onChange={handleSearch}
                                className="focus:outline-none text-sm py-2 rounded-sm pe-2 leading-4 [&~label]:placeholder-shown:inline border ps-7 bg-transparent placeholder:text-gray-500 lowercase placeholder:capitalize"
                                placeholder="To-do search..."
                            />
                            <label
                                htmlFor="search"
                                className="absolute hidden right-2 top-[0.63rem] text-gray-500 text-xs"
                            >
                                Ctrl + K
                            </label>
                        </div>
                    </div>
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
