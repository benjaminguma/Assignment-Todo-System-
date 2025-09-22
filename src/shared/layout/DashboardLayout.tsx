import React, { PropsWithChildren } from 'react'
import Sidebar from './sidebar'
import { Box, Flex } from '@chakra-ui/react'
import TopNav from './TopNav'
import TodoLayout from '@/routes/todos/layout/TodoLayout'

function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <Box display={"flex"} w={"100vw"} h={"100vh"} className="">
            <Sidebar />
            <Flex bg={"bg1"} flexGrow={1} overflowX={"hidden"}>
                <Box
                    // mx={{ base: 4, md: 10 }}
                    mb="10rem"
                    flexGrow={1}
                >
                    <TopNav />
                    <Box as={"section"} py={"4rem"}>
                        <TodoLayout />
                    </Box>

                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default DashboardLayout