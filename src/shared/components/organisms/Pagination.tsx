"use client"

import {
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    type IconButtonProps,
    Pagination,
    usePaginationContext,
} from "@chakra-ui/react"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const PaginationLink = (
    props: IconButtonProps & { page?: "prev" | "next" | number },
) => {
    const { page, ...rest } = props
    const pagination = usePaginationContext()
    const pageValue = () => {
        if (page === "prev") return pagination.previousPage
        if (page === "next") return pagination.nextPage
        return page
    }
    return (
        <IconButton w={"30px"} h={"35px"} fontSize={"13px"} rounded={"50%"} color={"primary"} _hover={{ bg: "primary", color: "white" }} border={"1px solid "} borderColor={"primary"} asChild {...rest} >
            <a href={`?page=${pageValue()}`}>{props.children}</a>
        </IconButton>
    )
}
const DataTablePagination = () => {
    return (
        <Flex justifyContent={"space-between"} px={10} py={5} >
            <Pagination.Root bg={"cusGrey.100"} rounded={"full"} count={20} p={3} pageSize={2} defaultPage={1}>
                <ButtonGroup variant="ghost" size="sm">
                    <PaginationLink page="prev" color={"primary"}>
                        <FaAnglesLeft color="currentColor" />
                    </PaginationLink>
                    <PaginationLink page="prev">
                        <HiChevronLeft color="currentColor" />
                    </PaginationLink>

                    <Pagination.Items
                        render={(page) => (
                            <PaginationLink
                                page={page.value}

                            >
                                {page.value}
                            </PaginationLink>
                        )}
                    />
                    <PaginationLink page="next">
                        <HiChevronRight />
                    </PaginationLink>
                    <PaginationLink page="prev">
                        <FaAnglesRight />
                    </PaginationLink>
                </ButtonGroup>
            </Pagination.Root>
        </Flex>
    )
}

export default DataTablePagination




