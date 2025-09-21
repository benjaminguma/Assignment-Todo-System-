import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { IconButton, Menu, Flex, AvatarGroup, Avatar, Box, Text, Button } from '@chakra-ui/react';
import { Todo } from '../../types';
import { iconButtonRecipe } from '@/shared/components/molecules/buttonRecipes';
import TodoPriorityFlag from './TodoPriorityFlag';
const columnHelper = createColumnHelper<Todo>();

export function TodoColumnsDefs(): ColumnDef<Todo, any>[] {
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
        columnHelper.accessor((row) => `${row.startDate} - ${row.endDate}`, {
            id: 'dateRange',
            header: 'Date',
        }),
        columnHelper.display({
            id: 'assignee',
            header: 'Assignee',
            cell: (props) => (
                <AvatarGroup size="xs" spaceX={"-3"} >
                    {/* {props.row.original.assignees.map((assignee) => (
                        <Avatar key={assignee.name} name={assignee.name} src={assignee.avatar} />
                    ))} */}
                    <Avatar.Root shape="full">
                        <Avatar.Fallback name="Random User" />
                        <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                    </Avatar.Root>
                    <Avatar.Root shape="full">
                        <Avatar.Fallback name="Random User" />
                        <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                    </Avatar.Root>
                    <Avatar.Root shape="full">
                        <Avatar.Fallback name="Random User" />
                        <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                    </Avatar.Root>
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
                        <Menu.Trigger as={IconButton} paddingRight={7}>
                            <Button {...iconButtonRecipe({ size: "sm", radius: "md" })} >
                                <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#6C7278" />
                                    <circle cx="10" cy="2" r="2" fill="#6C7278" />
                                    <circle cx="18" cy="2" r="2" fill="#6C7278" />
                                </svg>
                            </Button>
                        </Menu.Trigger>
                        <Menu.Positioner>
                            <Menu.Content bg={"white"}>
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
