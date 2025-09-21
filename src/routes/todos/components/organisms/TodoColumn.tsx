import { Box, Flex, Text, Badge, Button, Icon } from "@chakra-ui/react";
import { Calendar, User, Add, Flag } from "iconsax-react";
import { Todo } from "../../types";
import { JSX } from "react";
import { TodoStatusIcons } from "../atoms";
import { customButtonRecipe, iconButtonRecipe } from "@/shared/components/molecules/buttonRecipes";
import TodoPriorityFlag from "../molecules/TodoPriorityFlag";
import { dummytodos } from "../../static";


interface ITodoColumProps {
    status: Todo["status"];
}


function TodoColumn(props: ITodoColumProps) {
    return (
        <Box bg="gray.50" borderRadius="md">
            <TodoColumnHeader status={props.status} />
            <Box px={2} pb={4} pt={2} >
                <TodoCard todo={dummytodos[0]} />
                <Flex align="center" gap={2} mt={4} color={"fg1"} cursor="pointer" bg={"bg"} p={3} borderRadius={"md"} _hover={{ bg: "cusGrey.100" }}>
                    <Add size="20" color="currentColor" />
                    <Text fontSize="sm">Add Task</Text>
                </Flex>
            </Box>

        </Box>
    );
};

export default TodoColumn;


type TodoColumnHeaderProps = {
    status: Todo["status"];

};
const TodoColumnHeader: React.FC<TodoColumnHeaderProps> = ({ status, }) => {
    const getBgByStatus = () => {
        if (status === "To Do") {
            return "purple.100/50"
        }
        else if (status === "In Progress")
            return "yellow.100/50"
        return "primary.100/50"
    }
    const todoButton: Record<Todo["status"], JSX.Element> = {
        "To Do": <Button {...customButtonRecipe({ colorScheme: "default", size: "sm" })}>
            <TodoStatusIcons.TodoPending width={20} height={20} />
            To Do
        </Button>,
        "In Progress": <Button {...customButtonRecipe({ colorScheme: "default", size: "sm" })}>
            <TodoStatusIcons.TodoInProgress width={20} height={20} />
            In Progress
        </Button>,
        "Complete": <Button {...customButtonRecipe({ colorScheme: "default", size: "sm" })}>
            <TodoStatusIcons.TodoComplete1 width={20} height={20} />
            Complete
        </Button>
    }
    return (
        <Flex
            align="center"
            justify="space-between"
            bg={getBgByStatus()}
            p={2}
            pb={3}
            borderRadius="md"
        >
            <Flex gap={2}>
                {todoButton[status]}
                <Badge bg={"bg"} color={"fg"} w={8} justifyContent={"center"} size="md">
                    4
                </Badge>
            </Flex>

            <Button {...iconButtonRecipe({ radius: "md", size: "sm", color: "white" })}>
                <Add size="14" color="#464B50" />
            </Button>
        </Flex>
    );
};

type TodoCardProps = {
    todo: Todo
};
function TodoCard({ todo }: TodoCardProps) {
    return (
        <Box bg="white" p={4} borderRadius="md" mb={4}>
            <Text fontWeight="semibold" fontSize={"base"} mb={2}>
                {todo.title}
            </Text>

            <Flex align="center" gap={2} mb={2}>
                <Icon bg={"cusGrey.100"}>
                    <Calendar size="18" color="currentColor" />
                </Icon>
                <Text fontSize="sm">{todo.startDate}</Text>
            </Flex>

            <Flex align="center" gap={2} mb={2}>
                <User size="18" />
            </Flex>

            <Flex align="center" gap={2}>
                <TodoPriorityFlag priority={todo.priority} />
            </Flex>
        </Box>
    );
};


