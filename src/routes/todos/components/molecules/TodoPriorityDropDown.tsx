import React from 'react';
import { Button, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import { TodoStatusIcons } from '../atoms';
import { Todo } from '../../types';
import TodoPriorityFlag from './TodoPriorityFlag';
import { Slash } from 'iconsax-react';

function TodoPriorityDropdown() {
    const priorities: Todo["priority"][] = ['Medium', 'Important', 'Urgent', 'Low'];

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Text fontSize={"md"} cursor={"pointer"} color={"cusGrey.200"}> Medium</Text>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} bg={"bg"} color={"fg"} width={"190px"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} p={4} display={"grid"} >

                    {
                        priorities.map((priority) => (
                            <Menu.Item key={priority} value={priority} onClick={() => alert(priority)}>
                                <Flex align="center" gap={2} mb={2}>
                                    <TodoPriorityFlag priority={priority} />
                                    <Text>{priority}</Text>
                                </Flex>
                            </Menu.Item>
                        ))
                    }
                    <Menu.Item value="none" onClick={() => alert("tx")} borderTop={"1px solid"} borderColor={"bordl"}>
                        <Flex align="center" gap={2} mb={2}>
                            <Slash size={16} color='currentColor' />
                            <Text>To Do</Text>
                        </Flex>
                    </Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoPriorityDropdown





