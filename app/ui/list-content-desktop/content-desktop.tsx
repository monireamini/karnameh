import React from 'react'
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

const columns = [
    { name: 'User Id', uid: 'id' },
    { name: 'Name', uid: 'name' },
    { name: 'Username', uid: 'username' },
    { name: 'Phone number', uid: 'phone' },
    { name: 'Email', uid: 'email' },
]

export const TableContentDesktop = ({
    users,
    setActiveUserId,
    onOpen,
}: {
    users: UserType[]
    setActiveUserId: (id: number) => void
    onOpen: () => void
}) => {
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
                    >
                        <p className='text-gray1 text-sm font-normal'>
                            {column.name}
                        </p>
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody items={users} emptyContent={<TableEmpty />}>
                {(item: UserType) => {
                    function handleClick() {
                        setActiveUserId(item.id)
                        onOpen()
                    }

                    return (
                        <TableRow
                            key={item.id}
                            className='border-t-1 border-gray3 data-[selected=true]:bg-gray3 hover:bg-gray3 h-[72px]'
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
