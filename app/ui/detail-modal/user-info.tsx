import React, { useMemo } from 'react'
import { UserType } from '@/app/lib/definitions'
import { useQuery } from '@tanstack/react-query'
import { getUsersEndpoint } from '@/app/lib/endpoints/get-users.endpoint'
import { UserInfoItem } from '@/app/ui/user-info-item/user-info-item'

export const UserInfo = ({ userId }: { userId: UserType['id'] }) => {
    const {
        data: users,
        isLoading,
        error,
    } = useQuery<UserType[]>({
        queryKey: ['getUsersEndpoint'],
        queryFn: getUsersEndpoint,
    })

    const user = (users || [])?.find((user: UserType) => user.id === userId)

    const infoList = useMemo(
        () =>
            user
                ? [
                      { title: 'Name', value: user.name },
                      { title: 'Username', value: user.username },
                      { title: 'Email', value: user.email },
                      {
                          title: 'Address',
                          value: `${user.address.suite}, ${user.address.street}, ${user.address.city}`,
                      },
                      { title: 'Zip code', value: user.address.zipcode },
                      { title: 'Phone number', value: user.phone },
                      { title: 'Website', value: user.website },
                      { title: 'Company', value: user.company.name },
                      {
                          title: 'Company Catch Phrase',
                          value: user.company.catchPhrase,
                      },
                      { title: 'Company Description', value: user.company.bs },
                  ]
                : [],
        [user]
    )

    if (isLoading) return <div>Please wait...</div>

    if (!user) return <div>User not found</div>

    return (
        <div className='bg-whit mb-2 w-full rounded-md'>
            <div className='flex items-start justify-between border-b border-gray-50 pb-2'>
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
        </div>
    )
}
