import { TodoAction, TodoState } from "../../types";

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [action.payload, ...state.todos] };

        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.title === action.payload.title ? action.payload : t
                ),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((t) => t.title !== action.payload),
            };
        case "SET_DRAFT":
            return { ...state, draft: action.payload };

        case "SET_DRAGGED_ITEM":
            return { ...state, draggedTodo: action.payload };

        case "CHANGE_TODO_STATE": {
            const { dragIndex, hoverIndex } = action.payload;
            const todos = [...state.todos];
            const [removed] = todos.splice(dragIndex, 1);
            todos.splice(hoverIndex, 0, removed);
            return { ...state, todos };
        }
        case "SET_TODO_VIEW":
            return { ...state, view: action.payload };
        case "TOGGLE_DRAFT_MODAL": {
            const isOpen = action.payload?.isOpen;
            return {
                ...state,
                draftModalIsOpen: typeof isOpen === 'boolean' ? isOpen : !state.draftModalIsOpen,
            };
        }
        default:
            return state;
    }
}