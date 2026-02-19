import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todomessage: "Learning vrening",
            isCompleted: false,

        }
    ],
    addTodo: (todomessage) => { },
    editTodo: (id, todomessage) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider