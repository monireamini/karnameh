import React, { useMemo } from 'react'
import { UserType } from '@/app/lib/definitions'
import { Button } from '@/app/ui/button/button'
import { UserInfoItem } from '@/app/ui/user-info-item/user-info-item'

export const ContentMobileItem = ({
    user,
    onView,
}: {
    user: UserType
    onView: () => void
    key?: number
}) => {
    const infoList = useMemo(
        () => [
            { title: 'Name', value: user.name },
            { title: 'Username', value: user.username },
            { title: 'Email', value: user.email },
            { title: 'Phone number', value: user.phone },
        ],
        [user]
    )

    return (
        <div
            key={user.id}
            className='hover:bg-primary/5 rounded-4xl mb-2 w-full bg-white p-4'
        >
            <div className='flex items-start justify-between border-b border-gray-50 pb-4'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-3'>
                        <p>ID {user.id}</p>
                    </div>
                </div>
            </div>

            {infoList.map((item) => (
                <UserInfoItem
                    key={item.title}
                    title={item.title}
                    value={item.value}
                />
            ))}

            <div className='flex items-center justify-end'>
                <Button
                    className='bg-primary hover:bg-primary/90'
                    onClick={onView}
                >
                    View
                </Button>
            </div>
        </div>
    )
}
