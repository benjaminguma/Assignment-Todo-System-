import React from 'react'
import TodoColumn from './TodoColumn'
import { Grid } from '@chakra-ui/react'

function TodosColumsGrid() {
    return (
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6} mt={4} px={4}>
            <TodoColumn status="To Do" />
            <TodoColumn status="In Progress" />
            <TodoColumn status="Complete" />
        </Grid>
    )
}
export default TodosColumsGrid