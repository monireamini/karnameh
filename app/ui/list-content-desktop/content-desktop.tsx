'use client'

import React, { useMemo, useReducer } from 'react'
import { UserType } from '@/app/lib/definitions'
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/table'
import TableEmpty from '@/app/ui/list-content-desktop/table-empty'
import { sortByField } from '@/app/lib/utils'

const columns = [
    { name: 'User Id', uid: 'id' },
    { name: 'Name', uid: 'name' },
    { name: 'Username', uid: 'username' },
    { name: 'Phone number', uid: 'phone' },
    { name: 'Email', uid: 'email' },
]

type StateType = {
    sortBy: 'none' | keyof UserType
    sort: 'none' | 'asc' | 'desc'
}

const initialState: StateType = {
    sortBy: 'none',
    sort: 'none',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
                sort:
                    state.sortBy === action.payload
                        ? state.sort === 'asc'
                            ? 'desc'
                            : 'asc'
                        : 'asc',
            }
        default:
            return state
    }
}

export const TableContentDesktop = ({
    users,
    setActiveUserId,
    onOpen,
}: {
    users: UserType[]
    setActiveUserId: (id: number) => void
    onOpen: () => void
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const sortedUsers = useMemo(() => {
        if (state.sort === 'none') return users

        return sortByField<UserType>(users, state.sortBy, state.sort === 'asc')
    }, [users, state.sort, state.sortBy])

    const renderCell = React.useCallback(
        (user: UserType, columnKey: React.Key) => {
            const value = user[columnKey as keyof UserType]

            if (typeof value === 'string' || typeof value === 'number') {
                return (
                    <p className='text-center text-sm font-normal text-black'>
                        {value}
                    </p>
                )
            }
        },
        []
    )

    return (
        <Table aria-label='Users table' selectionMode='single' removeWrapper>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        className='bg-transparent py-3'
                        align='center'
                        onClick={() => {
                            dispatch({ type: 'SORT_BY', payload: column.uid })
                        }}
                    >
                        <p className='text-gray1 text-sm font-normal'>
                            {column.name}
                        </p>
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody items={sortedUsers} emptyContent={<TableEmpty />}>
                {(item: UserType) => {
                    function handleClick() {
                        setActiveUserId(item.id)
                        onOpen()
                    }

                    return (
                        <TableRow
                            key={item.id}
                            className='h-[72px] border-t-1 border-gray3 hover:bg-gray3 data-[selected=true]:bg-gray3'
                            onClick={handleClick}
                        >
                            {(columnKey) => (
                                <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )
                }}
            </TableBody>
        </Table>
    )
}
