import React from 'react'
import { Todo } from '../types'
import { useTodoCtx } from '../providers/TodoContext'

export type AggregatedTodo = {
    item: Todo,
    index: number
}

export type AggregatedTodos = {
    items: AggregatedTodo[],

}


function useAggregatedTodosByStatus() {
    const { state } = useTodoCtx();

    const statuses: Todo['status'][] = ['To Do', 'In Progress', 'Complete'];

    const aggregatedByStatus: Record<Todo['status'], AggregatedTodos> = {
        'To Do': { items: [] },
        'In Progress': { items: [] },
        'Complete': { items: [] },
    };

    state.todos.forEach((todo, idx) => {
        aggregatedByStatus[todo.status].items.push({ item: todo, index: idx });
    })

    return { aggregatedByStatus }
}

export default useAggregatedTodosByStatus