"use client";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Box, Table } from "@chakra-ui/react"

import React, { useEffect } from "react";
import DataTablePagination from "./Pagination";
// import { Input } from "@/components/ui/input";

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];

    searchPlaceholder?: string;
    showPagination?: boolean;
    initialPageSize?: number;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    searchPlaceholder = "search...",
    showPagination = true,
    initialPageSize = 10,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,

        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    useEffect(() => {
        table.setPageSize(initialPageSize);
    }, []);

    return (
        <div>
            <div className=''>
                <Table.Root >
                    <Table.Header bg={"cusGrey.100"}>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Table.Row key={headerGroup.id} borderBottom={"2px solid"} borderColor={"#e6ebf4"} >
                                {headerGroup.headers.map((header, i) => {
                                    return (
                                        <Table.ColumnHeader
                                            key={header.id}
                                            className='cursor-pointer'
                                            onClick={() => header.column.toggleSorting()}
                                            py={3}
                                            fontWeight={"bold"} color={"fg1"}
                                            pl={i === 0 ? 9 : 3}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </Table.ColumnHeader>
                                    );
                                })}
                            </Table.Row>
                        ))}
                    </Table.Header>
                    <Table.Body>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, i) => (
                                <Table.Row key={i} data-state={row.getIsSelected() && "selected"} borderBottom={"2px solid"} borderColor={"#e6ebf4"}>
                                    {row.getVisibleCells().map((cell, i) => (
                                        <Table.Cell key={cell.id} py={3} pl={i === 0 ? 9 : 3}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Table.Cell>
                                    ))}
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={columns.length} >
                                    No results.
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Root>
            </div>
            {showPagination ? (
                <Box mt={10}>
                    <DataTablePagination />
                </Box>
            ) : null}
        </div>
    );
}
