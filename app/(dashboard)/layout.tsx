import React from 'react'
import type { Metadata } from 'next'
import { dmsans } from '@/app/ui/fonts'
import '../globals.css'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
    title: 'Karnameh Interview',
    description: 'Dynamic Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${dmsans.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
