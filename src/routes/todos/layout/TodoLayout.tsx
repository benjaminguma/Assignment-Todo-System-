"use client"
import { customButtonRecipe, iconButtonRecipe } from '@/shared/components/molecules/buttonRecipes'
import SearchInput from '@/shared/components/molecules/SearchInput'
import { Box, Button, Grid, HStack, Switch, Text } from '@chakra-ui/react'
import { AddCircle, ArrowCircleLeft2, Calendar, ExportCurve, RowHorizontal, RowVertical, Sort } from 'iconsax-react'
import React from 'react'
import TodosTable from '../components/organisms/TodoTable'
import TodosColumsGrid from '../components/organisms/TodosColumsGrid'
import { TodoDraftDialog } from '../components/organisms/TodoDraftDialogue'
import { useTodoCtx } from '../providers/TodoContext'

function TodoLayout() {
    const { state, toggleModal } = useTodoCtx()
    return (
        <Box maxW={"1152px"} mx={"auto"} py={'2'} bg={"bg"} rounded={"2xl"}>
            <TodoLayoutHeader />
            {
                state.view === 'table' ? <TodosTable /> : <TodosColumsGrid />
            }
            <TodoDraftDialog open={state.draftModalIsOpen} onOpenChange={toggleModal} />
        </Box>
    )
}
export default TodoLayout

function TodoLayoutHeader() {
    const { createDraft, state: { view }, changeView } = useTodoCtx()

    return <Grid gap={3}>
        <Box px={4} py={4} borderBottom={"1px solid"} borderColor={"bordl"}>
            <HStack justifyContent={"space-between"}>
                <HStack gap={8}>
                    <Button {...iconButtonRecipe({ size: "lg" })}>
                        <ArrowCircleLeft2 size="18" color="#464B50" />
                    </Button>
                    <Text as={"h4"} fontSize={"lg"} color={"fg1"} fontWeight={"bold"}>Afdeling Kwaliteit</Text>
                </HStack>
                <HStack gap={4}>
                    <Button {...customButtonRecipe({ colorScheme: "grey" })}>
                        <Switch.Root
                            colorPalette={"teal"}
                        >
                            <Switch.HiddenInput />
                            <Switch.Control />
                            <Switch.Label />
                        </Switch.Root>
                    </Button>
                    <Button {...customButtonRecipe({ colorScheme: "grey" })}>
                        <Sort size="18" color="#464B50" />
                    </Button>
                    <Button {...customButtonRecipe({ colorScheme: "grey" })}>
                        <Calendar size="18" color="#464B50" />
                    </Button>
                    <Button {...customButtonRecipe({ colorScheme: "purple" })}>
                        <ExportCurve size="18" color="currentColor" />
                        Export XLSX
                    </Button>
                    <Button onClick={() => createDraft()}  {...customButtonRecipe({ colorScheme: "teal" })}>
                        <AddCircle size="18" color="currentColor" />
                        Add Task
                    </Button>
                </HStack>
            </HStack>
        </Box>
        <Box px={4}>
            <HStack p={2} justifyContent={"space-between"} bg={"primary.50"} _dark={{ bg: "primary" }} >
                <div className="">
                    <SearchInput bg='bg' placeHolder='Search for To-Do' />
                </div>
                <HStack p={1} bg={"bg"}>
                    <Button onClick={() => changeView("row")} rounded={"md"} {...customButtonRecipe({ colorScheme: view === "row" ? "teal" : "default" })}  >
                        <RowHorizontal size="20" color='currentColor' />
                    </Button>
                    <Button onClick={() => changeView("table")} rounded={"md"} {...customButtonRecipe({ colorScheme: view === "table" ? "teal" : "default" })} >
                        <RowVertical size="20" color="currentColor" />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    </Grid>
}