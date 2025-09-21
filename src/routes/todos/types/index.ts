import dayjs from "dayjs";

export type Todo = {
    id: string,
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'Complete';
    startDate: string;
    endDate: string;
    assignees: string[];
    priority: 'Medium' | 'Important' | 'Urgent' | "Low" | "None"
};
export type TodoDraft = Omit<Todo, 'startDate' | 'endDate'> & {
    startDate: dayjs.Dayjs;
    endDate: dayjs.Dayjs;
    id?: string,
};

export type Assignee = {
    id: string,
    avatar: string,
    fullName: string
}

export type TodoView = "table" | "row"

export type TodoState = {
    todos: Todo[];
    draft: TodoDraft | null;
    draggedTodo: Todo | null;
    view: TodoView,
    draftModalIsOpen: boolean
};

export type TodoAction =
    | { type: "ADD_TODO"; payload: Todo }
    | { type: "UPDATE_TODO"; payload: Todo }
    | { type: "DELETE_TODO"; payload: string }
    | { type: "SET_DRAFT"; payload: TodoDraft | null }
    | { type: "SET_DRAGGED_ITEM"; payload: Todo | null }
    | { type: "SET_TODO_VIEW"; payload: TodoView }
    | { type: "TOGGLE_DRAFT_MODAL"; payload: { isOpen?: boolean } }
    | { type: "UPDATE_DRAFT"; payload: { data: Partial<TodoDraft> } }
    | { type: "CHANGE_TODO_STATE"; payload: { dragIndex: number; hoverIndex: number } };

