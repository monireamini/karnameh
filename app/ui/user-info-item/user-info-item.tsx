import React from 'react'

export const UserInfoItem = ({
    title,
    value,
}: {
    title: string
    value: string
    key?: string
}) => {
    return (
        <div className='flex w-full items-start justify-between gap-2 border-gray-50 py-4'>
            <div className='w-100 flex flex-col'>
                <p className='text-xs'>{title}</p>
                <p className='font-medium'>{value}</p>
            </div>
        </div>
    )
}
