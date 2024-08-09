import type { Metadata } from 'next'
import './globals.css'
import { dmsans } from '@/app/ui/fonts'

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
                {children}
            </body>
        </html>
    )
}
