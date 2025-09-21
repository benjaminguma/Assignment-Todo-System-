"use client"
import React from 'react'
import { DataTable } from '@/shared/components/organisms/DataTable';
import { dummytodos } from '../../static';
import { TodoColumnsDefs } from '../molecules/TodoColumnDefs';
import { Badge, Box, Button, Grid, HStack } from '@chakra-ui/react';
import { customButtonRecipe } from '@/shared/components/molecules/buttonRecipes';
import { TodoStatusIcons } from '../atoms';
import { useTodoCtx } from '../../providers/TodoContext';
import useAssignees from '../../hooks/useAssignees';


function TodosTable() {
    const { createDraft, state } = useTodoCtx()
    const { assigneesMap } = useAssignees()
    return (
        <Grid gap={5}>
            <TodoStatusHeader />
            <Box bg={"bg"} >
                <DataTable data={state.todos} columns={TodoColumnsDefs({ assigneesMap })} />
            </Box>
        </Grid>
    );
}
export default TodosTable

function TodoStatusHeader() {
    return (
        <HStack gap={4} bg={"cusGrey.50"} mx={4} py={3} px={2} mt={3} rounded={"md"}>
            <Button {...customButtonRecipe({ colorScheme: "default" })}>
                <HStack justifyContent={"space-between"}>
                    <TodoStatusIcons.TodoPending />
                    To Do
                </HStack>
                <Badge bg={"cusGrey.100"} color={"fg"} size="md">4</Badge>
            </Button>
            <Button {...customButtonRecipe({ colorScheme: "default" })}>
                <HStack justifyContent={"space-between"}>
                    <TodoStatusIcons.TodoInProgress />
                    In Progress
                </HStack>
                <Badge bg={"cusGrey.100"} color={"fg"} size="md">4</Badge>
            </Button>
            <Button {...customButtonRecipe({ colorScheme: "teal" })}>
                <HStack justifyContent={"space-between"}>
                    <TodoStatusIcons.TodoComplete />
                    Completed
                </HStack>
                <Badge bg={"cusGrey.100"} color={"fg"} size="md">4</Badge>
            </Button>
        </HStack>
    )
}

