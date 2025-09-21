import React from 'react'
import { Button, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import DatePicker from '@/shared/components/molecules/DatePicker'

function TodoDatePickerDropdown() {
    return (
        <Menu.Root  >
            <Menu.Trigger asChild>
                <Text cursor={"pointer"} color={"cusGrey.200"}>00/00/00</Text>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} color={"fg"} bg={"bg"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} display={"grid"} maxW={"700px"} >
                    <DatePicker />
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoDatePickerDropdown