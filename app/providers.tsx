'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextUIProvider } from '@nextui-org/system'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000, // 10 min
            gcTime: 20 * 60 * 60 * 1000, // 20 min
        },
    },
})

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <Toaster position='bottom-right' reverseOrder />
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </NextUIProvider>
    )
}
