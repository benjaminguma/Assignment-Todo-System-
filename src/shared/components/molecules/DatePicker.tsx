"use client"
import React, { useState } from 'react'
// import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import dayjs, { Dayjs } from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Box, Button, Flex, Grid, Text, Timeline } from '@chakra-ui/react';
import { customButtonRecipe } from './buttonRecipes';
import { Calendar, Timer1 } from 'iconsax-react';

dayjs.extend(isoWeek);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);





function DatePicker({ date, setDate }: { date?: dayjs.Dayjs, setDate: (date: Date) => void }) {
    const relativeDates = getRelativeDates()
    return (
        <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }}>
            <Box p={3} pr={4} borderRight={"1px solid"} borderColor={"cusGrey.200"}>
                <Grid p={3} bg={"cusGrey.100"} fontSize={"base"} gap={3} cursor={"pointer"}>
                    {
                        relativeDates.map((item, i) => <Flex onClick={() => setDate(item.date.toDate())} justifyContent={"space-between"} fontSize={"base"} alignItems={"center"} color={"fg"} px={3} py={2.5} rounded={"md"} bg={"bg"} >
                            <Text as={"span"}>{item.title}</Text>
                            <Text as={"span"}>{item.date.format(item.format)}</Text>
                        </Flex>)
                    }
                </Grid>
            </Box>
            <Box ml={4} p={3}>
                <Grid templateColumns={"1fr 1fr"} gap={3} p={2} bg={"cusGrey.100"}>
                    <Button {...customButtonRecipe({ colorScheme: "default" })}>
                        <Calendar size={20} color='currentColor' />
                        <Text as={"span"}>DD/MM/YYYY</Text>
                    </Button>
                    <Button {...customButtonRecipe({ colorScheme: "default" })}>
                        <Timer1 size={20} color='currentColor' />
                        <Text as={"span"}>00:00</Text>
                    </Button>
                </Grid>
                <Box p={3}>
                    <DayPicker
                        mode="single"
                        required={true}
                        selected={date?.toDate()}
                        onSelect={setDate}
                    />
                </Box>
            </Box>
        </Grid>
    )
}

export default DatePicker




export type RelativeDate = {
    title: string;
    date: Dayjs;
    format: string
};

export function getRelativeDates(): RelativeDate[] {
    const today = dayjs();


    const thisSaturday = today.isoWeekday(6); // Saturday this week
    const thisSunday = today.isoWeekday(7);

    const thisWeekend =
        today.isAfter(thisSunday, "day") ? today.add(1, "week").isoWeekday(6) : thisSaturday;

    const nextWeekend = thisWeekend.add(1, "week");

    return [
        { title: "Today", date: today, format: "dddd" },
        { title: "Tomorrow", date: today.add(1, "day"), format: "dddd" },
        { title: "This Weekend", date: thisWeekend, format: "dddd" },
        { title: "Next Week", date: today.add(1, "week").startOf("week"), format: "dddd" },
        { title: "Next Weekend", date: nextWeekend, format: "DD/MMM" },
        { title: "In Two Weeks", date: today.add(2, "week"), format: "DD/MMM" },
        { title: "In Four Weeks", date: today.add(4, "week"), format: "DD/MMM" },
    ];
}