import React from 'react'
import { UserType } from '@/app/lib/definitions'
import { ContentMobileItem } from '@/app/ui/list-content-mobile/content-mobile-item'

export const TableContentMobile = ({
    users,
    setActiveUserId,
    onOpen,
}: {
    users: UserType[]
    setActiveUserId: (id: number) => void
    onOpen: () => void
}) => {
    return (
        <div className='w-full overflow-x-hidden md:hidden'>
            {users?.map((user) => {
                function handleOpenModal() {
                    setActiveUserId(user.id)
                    onOpen()
                }

                return (
                    <ContentMobileItem
                        key={user.id}
                        user={user}
                        onView={handleOpenModal}
                    />
                )
            })}
        </div>
    )
}
