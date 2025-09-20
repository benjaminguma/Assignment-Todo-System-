import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { IconButton, Menu, Flex, AvatarGroup, Avatar, Box, Text, Button } from '@chakra-ui/react';
import { Todo } from '../../types';
import { customButtonRecipe, iconButtonRecipe } from '@/shared/components/molecules/buttonRecipes';
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
                let colorScheme = 'gray';
                switch (priority) {
                    case 'Medium':
                        colorScheme = 'orange';
                        break;
                    case "Important":
                        colorScheme = 'blue';
                        break;
                    case "Urgent":
                        colorScheme = 'red';
                        break;
                }
                return (
                    <Box>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8623 1.5V16.5V1.5Z" fill={colorScheme} />
                            <path d="M3.8623 1.5V16.5" stroke={colorScheme} stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.8623 3H12.2623C14.2873 3 14.7373 4.125 13.3123 5.55L12.4123 6.45C11.8123 7.05 11.8123 8.025 12.4123 8.55L13.3123 9.45C14.7373 10.875 14.2123 12 12.2623 12H3.8623" fill={colorScheme} />
                            <path d="M3.8623 3H12.2623C14.2873 3 14.7373 4.125 13.3123 5.55L12.4123 6.45C11.8123 7.05 11.8123 8.025 12.4123 8.55L13.3123 9.45C14.7373 10.875 14.2123 12 12.2623 12H3.8623" stroke={colorScheme} stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </Box>
                );
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
