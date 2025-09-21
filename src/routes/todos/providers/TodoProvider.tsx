"use client"
import React, { PropsWithChildren, useEffect, useReducer } from 'react'
import { todoReducer } from './reducers/todo.reducer'
import { Todo, TodoDraft, TodoState, TodoView } from '../types'
import { TodosContext } from './TodoContext'
import { draftToTodo, todoToDraft } from '../mappers'
import { todoDraftFactory } from '../utils'
import { dummytodos } from '../static'


const loadTodos = (): Todo[] => {
    if (typeof window === "undefined") return [];
    const todos = localStorage.getItem("todos");
    if (todos) return JSON.parse(todos) as Todo[];
    return dummytodos;
}



const todosInitalState: TodoState = {
    todos: loadTodos(),
    draft: null,
    draggedTodo: null,
    view: "table",
    draftModalIsOpen: false,
}
function TodoProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(todoReducer, todosInitalState)

    function createDraft(data?: { todo?: Todo, draft: TodoDraft }) {
        if (data?.todo) {
            const draft = todoToDraft(data.todo);

            dispatch({ type: "SET_DRAFT", payload: draft })
        }
        else dispatch({ type: "SET_DRAFT", payload: data?.draft || todoDraftFactory() })
        dispatch({ type: "TOGGLE_DRAFT_MODAL", payload: { isOpen: true } })
    }

    function toggleModal() {
        if (state.draftModalIsOpen && state.draft) {
            dispatch({ type: "SET_DRAFT", payload: null })
        }
        dispatch({ type: "TOGGLE_DRAFT_MODAL", payload: {} })
    }

    function persistDraft(draft: TodoDraft) {
        if (!draft) return;
        const isNew = !draft.id;
        const todo: Todo = draftToTodo(draft);
        todo.id = `${state.todos.length + 1}`
        const actionType: "ADD_TODO" | "UPDATE_TODO" = isNew ? "ADD_TODO" : "UPDATE_TODO"
        dispatch({ type: actionType, payload: todo })
        dispatch({ type: "SET_DRAFT", payload: null })
        dispatch({ type: "TOGGLE_DRAFT_MODAL", payload: { isOpen: false } })
    }

    function changeView(view: TodoView) {
        dispatch({ type: "SET_TODO_VIEW", payload: view })
    }

    function updateDraft(data: Partial<TodoDraft>) {
        if (!state.draft) return;
        const updatedDraft = { ...state.draft, ...data };
        dispatch({ type: "SET_DRAFT", payload: updatedDraft })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos))
    }, [state.todos])

    return (
        <TodosContext.Provider value={{
            state,
            dispatch,
            createDraft,
            persistDraft,
            changeView,
            toggleModal,

        }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodoProvider