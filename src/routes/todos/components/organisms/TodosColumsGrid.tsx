import React from 'react'
import TodoColumn from './TodoColumn'
import { Grid } from '@chakra-ui/react'
import useAggregatedTodosByStatus from '../../hooks/useAggregatedTodosByStatus'

function TodosColumsGrid() {
    const { aggregatedByStatus } = useAggregatedTodosByStatus()

    return (
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6} mt={4} px={4}>
            <TodoColumn status="To Do" todos={aggregatedByStatus['To Do']} />
            <TodoColumn status="In Progress" todos={aggregatedByStatus['In Progress']} />
            <TodoColumn status="Complete" todos={aggregatedByStatus['Complete']} />
        </Grid>
    )
}
export default TodosColumsGrid