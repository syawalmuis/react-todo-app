import { createContext } from "react";

const AppContext = createContext({
    updateTodos: () => {},
    destroyTodo: () => {},
});

export default AppContext;
