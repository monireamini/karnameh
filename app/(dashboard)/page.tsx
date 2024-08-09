import UsersList from '@/app/ui/list/list'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col p-6'>
            <div className='flex flex-row items-center justify-between'>
                <p className='text-xl text-black md:text-3xl'>
                    <strong>Dynamic Dashboard</strong>
                </p>
            </div>
            <div className='mt-4 flex grow rounded-lg bg-gray-50 px-6 py-10'>
                <UsersList />
            </div>
        </main>
    )
}
