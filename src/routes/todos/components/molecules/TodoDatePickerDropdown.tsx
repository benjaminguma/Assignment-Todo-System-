import React from 'react'
import { Button, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react"
import DatePicker from '@/shared/components/molecules/DatePicker'
import useDraft from '../../hooks/useDraft'
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

function TodoDatePickerDropdown() {
    const { updateDraft, draft } = useDraft()
    if (!draft) {
        return null
    }
    return (
        <Menu.Root  >
            <Menu.Trigger asChild>
                {
                    draft.endDate ? <Flex align="center" gap={2} mb={2} cursor={"pointer"} >
                        <Text color={"fg1"}>{draft.endDate.format("DD/MM/YY")}</Text>
                    </Flex> : <Text cursor={"pointer"} color={"cusGrey.200"}>00/00/00</Text>
                }

            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content zIndex={4} color={"fg"} bg={"bg"} border={"1px solid"} borderColor={"bordl"} shadow={"none"} display={"grid"} maxW={"700px"} >
                    <DatePicker date={draft.endDate} setDate={(d) => updateDraft({ endDate: dayjs(d) })} />
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default TodoDatePickerDropdown