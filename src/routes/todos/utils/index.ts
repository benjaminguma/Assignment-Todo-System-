import dayjs from "dayjs";
import type { TodoDraft } from "../types";

export function todoDraftFactory(): TodoDraft {
    return {
        title: '',
        description: '',
        status: 'To Do',
        assignees: [],
        priority: 'None',
        startDate: dayjs(),
        endDate: dayjs(),
        id: ""
    };
}
