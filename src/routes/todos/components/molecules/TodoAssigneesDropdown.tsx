import React from 'react';
import { Avatar, Button, Flex, Grid, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import { TodoStatusIcons } from '../atoms';
import { Assignee, Todo } from '../../types';
import TodoPriorityFlag from './TodoPriorityFlag';
import { Slash } from 'iconsax-react';
import SearchInput from '@/shared/components/molecules/SearchInput';
import { dummyAssignees } from '../../static';

function TodoAssigneeDropDown() {
    const priorities: Todo["priority"][] = ['Medium', 'Important', 'Urgent', 'Low'];
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Text fontSize={"md"} color={"cusGrey.200"} cursor={"pointer"}> Select Assignee</Text>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} bg={"bg"} color={"fg"} maxW={"300px"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} p={4} display={"grid"} >
                    <Menu.Item value="none">
                        <SearchInput bg='gray.100' size="sm" />
                    </Menu.Item>
                    <Grid display={"grid"} overflowY={"scroll"} h={"200px"} gap={2} pt={4}>
                        {
                            dummyAssignees.map((ass) => <TodoAssignee assignee={ass} key={ass.id} />)
                        }
                    </Grid>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoAssigneeDropDown




function TodoAssignee({ assignee }: { assignee: Assignee }) {
    return (
        <Flex gap={3} alignItems={"center"}>
            <Avatar.Root size={"xs"}>
                <Avatar.Fallback name={assignee.fullName} />
                <Avatar.Image src={assignee.avatar} />
            </Avatar.Root>
            <Text>
                {assignee.fullName}
            </Text>
        </Flex>
    )
}





