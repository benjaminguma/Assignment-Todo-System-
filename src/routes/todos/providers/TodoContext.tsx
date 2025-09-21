import { createContext, useContext } from "react";
import { Todo, TodoAction, TodoDraft, TodoState, TodoView } from "../types";



export type TodosContext = {
    state: TodoState,
    dispatch: React.ActionDispatch<[action: TodoAction]>
    createDraft(data?: { todo?: Todo, draft: TodoDraft }): void
    persistDraft(draft: TodoDraft): void,
    changeView(view: TodoView): void
    toggleModal(): void

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
    changeView(view) {

    },
    toggleModal: () => { },

});


export const useTodoCtx = () => useContext(TodosContext)