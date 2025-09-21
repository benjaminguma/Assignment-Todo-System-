
import {
    Box,
    Flex,
    Textarea,
    Text,
    Grid,
    Field,
    Input,
} from "@chakra-ui/react";
import { Calendar, User, Flag, Stickynote, UserCirlceAdd } from "iconsax-react";
import TodoStatusDropDown from "../molecules/TodoStatusDropDown";
import TodoDatePickerDropdown from "../molecules/TodoDatePickerDropdown";
import TodoPriorityDropdown from "../molecules/TodoPriorityDropDown";
import TodoAssigneeDropDown from "../molecules/TodoAssigneesDropdown";


export function TodoDraftForm() {
    return (
        <Box >
            <Input
                fontSize={"30px"}
                border={"none"}
                outline={"none"}
                placeholder="Title"
                fontWeight={"bold"}
                color={"gray.400"}
                py={1}
                my={6}
            />
            <Grid gap={5}>

                <Grid gap={6} templateColumns={{ base: "1fr", md: "100px 1fr" }}>
                    <Flex align="center" gap={3} color={"fg"}>
                        <Calendar size="18" color="currentColor" />
                        <Text fontSize={"md"}>Status</Text>
                    </Flex>
                    <div>
                        <TodoStatusDropDown />
                    </div>
                </Grid>
                <Grid gap={6} templateColumns={{ base: "1fr", md: "100px 1fr" }}>
                    <Flex align="center" gap={3} color={"fg"}>
                        <Calendar size="18" color="currentColor" />
                        <Text fontSize={"md"}>Date</Text>
                    </Flex>
                    <TodoDatePickerDropdown />
                </Grid>
                <Grid gap={6} templateColumns={{ base: "1fr", md: "100px 1fr" }}>
                    <Flex align="center" gap={3} color={"fg"}>
                        <div className="">

                            <User size="18" color="currentColor" />
                        </div>
                        <Text fontSize={"md"}>Assignees</Text>
                    </Flex>
                    <TodoAssigneeDropDown />
                </Grid>
                <Grid gap={6} templateColumns={{ base: "1fr", md: "100px 1fr" }}>
                    <Flex align="center" gap={3} color={"fg"}>
                        <Flag size="18" color="currentColor" />
                        <Text fontSize={"md"}>Priority</Text>
                    </Flex>
                    <TodoPriorityDropdown />
                </Grid>


                <Field.Root required display={"grid"} gap={3}>
                    <Flex align="center" gap={3} color={"fg"}>
                        <Stickynote size="18" color="currentColor" />
                        <Text fontSize={"md"}>Description</Text>
                    </Flex>
                    <Textarea
                        placeholder="Write something or type"
                        value={''}
                        bg={"cusGrey.100"}
                        rows={8}
                        fontSize={"base"}
                        borderColor={"bordl"}
                    />
                </Field.Root>
            </Grid>
        </Box>
    );
};

export default TodoDraftForm