import { JSX } from "react";
import { Todo } from "../../types";
import TodoComplete from "./todo-status/Complete";
import TodoInProgress from "./todo-status/InProgress";
import TodoPending from "./todo-status/Todo";


export const TodoStatusIcons: Record<Todo["status"], JSX.Element> = {
    "Complete": <TodoComplete />,
    "In Progress": <TodoInProgress />,
    "To Do": <TodoPending />
}

