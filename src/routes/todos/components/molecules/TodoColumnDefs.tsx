import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { IconButton, Menu, Flex, AvatarGroup, Avatar, Box, Text, Button } from '@chakra-ui/react';
import { Assignee, Todo } from '../../types';
import { iconButtonRecipe } from '@/shared/components/molecules/buttonRecipes';
import TodoPriorityFlag from './TodoPriorityFlag';
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs, { Dayjs } from "dayjs";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
const columnHelper = createColumnHelper<Todo>();

export function TodoColumnsDefs({ assigneesMap }: { assigneesMap: Map<string, Assignee> }): ColumnDef<Todo, any>[] {
    return [
        columnHelper.accessor('title', {
            header: 'Name',
            cell: (info) => (
                <Box>
                    <Text fontWeight="medium">{info.getValue()}</Text>
                    <Text fontSize="sm" color="gray.500">{info.row.original.description}</Text>
                </Box>
            ),
        }),
        columnHelper.accessor((row) => `${dayjs(row.startDate).format("DD/MM/YYYY-HH:ss")}   -   ${dayjs(row.endDate).format("DD/MM/YYYY-HH:ss")}`, {
            id: 'dateRange',
            header: 'Date',
        }),
        columnHelper.display({
            id: 'assignee',
            header: 'Assignee',
            cell: (props) => (
                <AvatarGroup size="xs" spaceX={"-3"} >
                    {props.row.original.assignees.map((assigneeId) => (
                        <Avatar.Root shape="full">
                            <Avatar.Fallback name={assigneesMap.get(assigneeId)!.fullName} />
                            <Avatar.Image src={assigneesMap.get(assigneeId)!.avatar} />
                        </Avatar.Root>
                    ))}


                </AvatarGroup>
            )
        }),
        columnHelper.accessor('priority', {
            header: 'Priority',
            cell: (info) => {
                const priority = info.getValue();
                return <TodoPriorityFlag priority={priority} />
            },
        }),
        columnHelper.display({
            id: 'actions',
            header: '',
            cell: (props) => (
                <Flex justify="flex-end">
                    <Menu.Root>
                        <Menu.Trigger as={IconButton} paddingRight={7} bg={"bg"}>
                            <Button {...iconButtonRecipe({ size: "sm", radius: "md" })} >
                                <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#6C7278" />
                                    <circle cx="10" cy="2" r="2" fill="#6C7278" />
                                    <circle cx="18" cy="2" r="2" fill="#6C7278" />
                                </svg>
                            </Button>
                        </Menu.Trigger>
                        <Menu.Positioner>
                            <Menu.Content bg={"bg"} width={"150px"} border={"1px solid"} borderColor={"bordl"} shadow={"none"}>
                                <Menu.Item value='edit' onClick={() => console.log('Edit:', props.row.original)}>Edit</Menu.Item>
                                <Menu.Item value='delete' onClick={() => console.log('Delete:', props.row.original)}>Delete</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Menu.Root>
                </Flex>
            ),
        }),
    ];
};
