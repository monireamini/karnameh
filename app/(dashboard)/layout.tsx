import React from 'react'
import type { Metadata } from 'next'
import { NextUIProvider } from '@nextui-org/system'
import { dmsans } from '@/app/ui/fonts'
import '../globals.css'

export const metadata: Metadata = {
    title: 'Karnameh Interview',
    description: 'Dynamic Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${dmsans.className} antialiased`}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    )
}
