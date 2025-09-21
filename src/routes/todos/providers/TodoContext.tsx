import { createContext, useContext } from "react";
import { Todo, TodoAction, TodoState } from "../types";



export type TodosContext = {
    state: TodoState,
    dispatch: React.ActionDispatch<[action: TodoAction]>
    createDraft(todo?: Todo): void
    persistDraft(): void
}

export const TodosContext = createContext<any>({})


export const useTodoCtx = () => useContext(TodosContext)