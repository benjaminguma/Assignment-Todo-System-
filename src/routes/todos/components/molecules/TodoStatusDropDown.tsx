import React, { JSX } from 'react';
import { Button, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import { TodoStatusIcons } from '../atoms';
import { Todo } from '../../types';
import { customButtonRecipe } from '@/shared/components/molecules/buttonRecipes';
import { useTodoCtx } from '../../providers/TodoContext';
import useDraft from '../../hooks/useDraft';

function TodoStatusDropDown() {
    const { updateDraft, draft } = useDraft()
    const todoStatusButtons: Record<Todo["status"], JSX.Element> = {
        "To Do": <Button {...customButtonRecipe({ colorScheme: "purple" })}>
            <HStack justifyContent={"space-between"}>
                <TodoStatusIcons.TodoPending />
                To Do
            </HStack>
        </Button>,
        "In Progress": <Button {...customButtonRecipe({ colorScheme: "default" })}>
            <HStack justifyContent={"space-between"}>
                <TodoStatusIcons.TodoInProgress />
                In Progress
            </HStack>
        </Button>,
        "Complete": <Button {...customButtonRecipe({ colorScheme: "teal" })}>
            <HStack justifyContent={"space-between"}>
                <TodoStatusIcons.TodoComplete />
                Completed
            </HStack>
        </Button>
    }
    if (!draft) {
        return null
    }
    return (
        <Menu.Root >
            <Menu.Trigger asChild>
                {todoStatusButtons[draft.status]}
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} bg={"bg"} color={"fg"} width={"190px"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} p={4} display={"grid"} >
                    <Menu.Item value="To Do" onClick={() => updateDraft({ status: "To Do" })} bg={draft.status === "To Do" ? "cusGray.200" : "transparent"}>
                        <Flex align="center" gap={2} mb={2}>
                            <TodoStatusIcons.TodoPending />
                            <Text>To Do</Text>
                        </Flex>
                    </Menu.Item>
                    <Menu.Item value="To Do" onClick={() => updateDraft({ status: "In Progress" })} bg={draft.status === "In Progress" ? "cusGray.200" : "transparent"}>
                        <Flex align="center" gap={2} mb={2}>
                            <TodoStatusIcons.TodoInProgress />
                            <Text>In Progress</Text>
                        </Flex>
                    </Menu.Item>
                    <Menu.Item value="To Do" onClick={() => updateDraft({ status: "Complete" })} bg={draft.status === "Complete" ? "cusGray.200" : "transparent"}>
                        <Flex align="center" gap={2} mb={2}>
                            <TodoStatusIcons.TodoComplete1 />
                            <Text>Complete</Text>
                        </Flex>
                    </Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoStatusDropDown





