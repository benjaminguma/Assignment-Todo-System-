import React from 'react';
import { Avatar, Box, Button, Flex, Grid, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import { Assignee, Todo } from '../../types';
import SearchInput from '@/shared/components/molecules/SearchInput';

import useAssignees from '../../hooks/useAssignees';
import useDraft from '../../hooks/useDraft';

function TodoAssigneeDropDown() {
    const { updateDraft, draft } = useDraft()
    const { assigneesMap, assignees } = useAssignees()


    function addAssignee(newId: string) {
        const assignee = assigneesMap.get(newId)
        if (!assignee || !draft) return
        updateDraft({ assignees: [assignee.id] })
    }


    if (!draft) {
        return null
    }
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                {

                    draft.assignees.length ? <Box>
                        <TodoAssignee assignee={assigneesMap.get(draft.assignees[0]) || null} />
                    </Box>
                        : <Text fontSize={"md"} color={"cusGrey.200"} cursor={"pointer"}> Select Assignee</Text>
                }
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} bg={"bg"} color={"fg"} maxW={"300px"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} p={4} display={"grid"} >
                    <Menu.Item value="seearch">
                        <SearchInput bg='gray.100' size="sm" />
                    </Menu.Item>
                    <Menu.Item value="list" display={"grid"} overflowY={"scroll"} h={"200px"} gap={2} pt={4}>
                        {
                            assignees.map((ass) => <Box key={ass.id} onClick={() => addAssignee(ass.id)} >
                                <TodoAssignee assignee={ass} key={ass.id} />
                            </Box>)
                        }
                    </Menu.Item>

                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoAssigneeDropDown



function TodoAssignee({ assignee }: { assignee: Assignee | null }) {
    if (!assignee) {
        return null
    }
    return (
        <Flex gap={3} alignItems={"center"} cursor={"pointer"}>
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





