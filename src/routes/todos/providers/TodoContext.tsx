import { createContext, useContext } from "react";
import { Todo, TodoAction, TodoState } from "../types";



export type TodosContext = {
    state: TodoState,
    dispatch: React.ActionDispatch<[action: TodoAction]>
    createDraft(todo?: Todo): void
    persistDraft(): void,


}

export const TodosContext = createContext<TodosContext>({
    state: {
        todos: [],
        draft: null,
        draggedTodo: null,
        view: "table",
        draftModalIsOpen: false,
    },
    dispatch: () => { },
    createDraft: () => { },
    persistDraft: () => { },
});


export const useTodoCtx = () => useContext(TodosContext)