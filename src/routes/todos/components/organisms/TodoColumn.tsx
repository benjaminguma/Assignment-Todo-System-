"use client"
import { Box, Flex, Text, Badge, Button, Icon } from "@chakra-ui/react";
import { Calendar, User, Add, Flag } from "iconsax-react";
import { Todo } from "../../types";
import { JSX } from "react";
import { TodoStatusIcons } from "../atoms";
import { customButtonRecipe, iconButtonRecipe } from "@/shared/components/molecules/buttonRecipes";
import TodoPriorityFlag from "../molecules/TodoPriorityFlag";
import { dummytodos } from "../../static";
import { useTodoCtx } from "../../providers/TodoContext";
import { todoDraftFactory } from "../../utils";
import { AggregatedTodo, AggregatedTodos } from "../../hooks/useAggregatedTodosByStatus";

interface ITodoColumProps {
    status: Todo["status"];
    todos: AggregatedTodos
}


function TodoColumn(props: ITodoColumProps) {
    const { createDraft } = useTodoCtx()
    function createDraftOfStatus() {
        const draft = todoDraftFactory();
        draft.status = props.status;
        createDraft({ draft })
    }

    return (
        <Box bg="gray.50" _dark={{ bg: "bg1" }} pb={2} borderRadius="md" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} height={"100%"}>
            <div className="">
                <TodoColumnHeader status={props.status} count={props.todos.items.length} />
                <Box px={2} pt={2} >

                    {
                        props.todos.items.map((aTodo) => (
                            <TodoCard key={aTodo.index} aTodo={aTodo} />
                        ))
                    }
                </Box>

            </div>
            <Flex mx={2} onClick={createDraftOfStatus} align="center" gap={2} mt={4} cursor="pointer" bg={"bg"} p={3} borderRadius={"md"} _hover={{ bg: "cusGrey.100" }}>
                <Add size="20" color="currentColor" />
                <Text fontSize="sm">Add Task</Text>
            </Flex>
        </Box>
    );
};

export default TodoColumn;


type TodoColumnHeaderProps = {
    status: Todo["status"];
    count?: number
};
const TodoColumnHeader: React.FC<TodoColumnHeaderProps> = ({ status, count }) => {
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
                    {count}
                </Badge>
            </Flex>

            <Button {...iconButtonRecipe({ radius: "md", size: "sm", color: "white" })}>
                <Add size="14" color="#464B50" />
            </Button>
        </Flex>
    );
};

type TodoCardProps = {
    aTodo: AggregatedTodo
};
function TodoCard({ aTodo }: TodoCardProps) {
    const todo = aTodo.item
    return (
        <Box bg="bg" p={4} borderRadius="md" mb={2}>
            <Text fontWeight="semibold" fontSize={"base"} mb={2}>
                {todo.title}
            </Text>
            <Flex align="center" gap={2} mb={2}>
                <Icon bg={"cusGrey.100"}>
                    <Calendar size="18" color="currentColor" />
                </Icon>
                <Text fontSize="sm">{todo.endDate}</Text>
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


