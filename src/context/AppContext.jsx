import { createContext } from "react";

const AppContext = createContext({
    updateTodos: () => {},
    destroyTodo: () => {},
    handleEdit: () => {},
});

export default AppContext;
