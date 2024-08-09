'use client'

import Search from '@/app/ui/search/search'
import { UserType } from '@/app/lib/definitions'
import { useMemo, useState } from 'react'
import { TableContentMobile } from '@/app/ui/list-content-mobile/content-mobile'
import { TableContentDesktop } from '@/app/ui/list-content-desktop/content-desktop'
import { DetailModal } from '@/app/ui/detail-modal/detail-modal'
import { useDisclosure } from '@nextui-org/modal'
import { Pagination } from '@nextui-org/pagination'
import { useQuery } from '@tanstack/react-query'
import { getUsersEndpoint } from '@/app/lib/services/get-users.endpoint'
import { Spinner } from '@nextui-org/spinner'

const pageSize = 5

export default function UsersTable() {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['getUsersEndpoint'],
        queryFn: getUsersEndpoint,
    })

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [activeUserId, setActiveUserId] = useState<number | null>(null)

    const [currentPage, setCurrentPage] = useState<number>(1)

    const currentPageUsers: UserType[] = useMemo(
        () =>
            (users || []).slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
            ),
        [users, currentPage]
    )

    return (
        <div className='w-full'>
            {/* list header */}
            <div className='flex flex-row justify-between'>
                <Search placeholder='Search users...' />
            </div>

            {/* list content */}
            {isLoading ? (
                <Spinner classNames={{ base: 'w-full mx-auto mt-16' }} />
            ) : (
                <div className='mt-4 flow-root'>
                    <div className='overflow-x-auto'>
                        <div className='inline-block min-w-full align-middle'>
                            <div className='overflow-hidden rounded-md bg-gray-50 md:pt-0'>
                                {/* mobile */}
                                <div className='md:hidden'>
                                    <TableContentMobile
                                        users={currentPageUsers}
                                        setActiveUserId={setActiveUserId}
                                        onOpen={onOpen}
                                    />
                                </div>

                                {/* desktop */}
                                <div className='hidden md:flex'>
                                    <TableContentDesktop
                                        users={currentPageUsers}
                                        setActiveUserId={setActiveUserId}
                                        onOpen={onOpen}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* cancel modal*/}
            <DetailModal
                activeUserId={activeUserId}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />

            {/* pagination */}
            {users?.length > 0 && (
                <div className='mt-4'>
                    <Pagination
                        loop
                        showControls
                        total={Math.ceil(users?.length / pageSize)}
                        initialPage={1}
                        onChange={setCurrentPage}
                    />
                </div>
            )}
        </div>
    )
}
