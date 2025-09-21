
import dayjs from "dayjs";
import type { Todo, TodoDraft } from "../types";

export function todoToDraft(todo: Todo): TodoDraft {
    const { startDate, endDate, ...rest } = todo;
    return {
        ...rest,
        startDate: dayjs(startDate),
        endDate: dayjs(endDate),
    };
}

export function draftToTodo(draft: TodoDraft): Todo {
    const { startDate, endDate, ...rest } = draft;
    return {
        ...rest,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
    };
}

