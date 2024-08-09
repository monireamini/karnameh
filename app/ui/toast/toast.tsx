import toast from 'react-hot-toast'
import clsx from 'clsx'
import Image from 'next/image'

export const showCustomToast = (
    message: string,
    variant: 'success' | 'error' = 'error'
) => {
    toast.custom((t) => (
        <div
            className={clsx(
                `border-1 flex w-full items-center rounded-xl px-4 py-2 lg:w-auto`,
                {
                    'border-primary bg-primaryLight text-primary':
                        variant === 'success',
                },
                { 'border-error bg-errorLight text-error': variant === 'error' }
            )}
            onClick={() => toast.dismiss(t.id)}
        >
            <Image
                src={`/toast-${variant}.svg`}
                alt={variant}
                width={24}
                height={24}
                className='mr-2'
            />
            <p>{message}</p>
        </div>
    ))
}
