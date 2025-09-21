import React, { PropsWithChildren, useReducer } from 'react'
import { todoReducer } from './reducers/todo.reducer'
import { Todo, TodoState } from '../types'
import { TodosContext } from './TodoContext'
import { draftToTodo, todoToDraft } from '../mappers'
import { todoDraftFactory } from '../utils'


const todosInitalState: TodoState = {
    todos: [],
    draft: null,
    draggedTodo: null,
    view: "table",
    draftModalIsOpen: false,
}
function TodoProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(todoReducer, todosInitalState)

    function createDraft(todo?: Todo) {
        if (todo) {
            const draft = todoToDraft(todo);

            dispatch({ type: "SET_DRAFT", payload: draft })

        }
        else dispatch({ type: "SET_DRAFT", payload: todoDraftFactory() })
        dispatch({ type: "TOGGLE_DRAFT_MODAL", payload: { isOpen: true } })
    }

    function persistDraft() {
        if (!state.draft) return;
        const isNew = !state.draft.id;
        const todo: Todo = draftToTodo(state.draft);
        const actionType: "ADD_TODO" | "UPDATE_TODO" = isNew ? "ADD_TODO" : "UPDATE_TODO"
        dispatch({ type: actionType, payload: todo })
        dispatch({ type: "SET_DRAFT", payload: null })
    }
    return (
        <TodosContext.Provider value={{
            state,
            dispatch,
            createDraft,
            persistDraft
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodoProvider