
import React from 'react'
import { Todo } from '../../types';
import { Box } from '@chakra-ui/react';

function TodoPriorityFlag({ priority }: { priority: Todo["priority"] }) {
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
        case "Low":
            colorScheme = '#BAC1CC';
            break;



    }

    if (priority === "None") {
        return null
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
}
export default TodoPriorityFlag