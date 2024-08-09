import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/components/spacer.js',
        './node_modules/@nextui-org/theme/dist/components/modal.js',
        './node_modules/@nextui-org/theme/dist/components/list.js',
        './node_modules/@nextui-org/theme/dist/components/pagination.js',
        './node_modules/@nextui-org/theme/dist/components/spinner.js',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            colors: {
                primary: '#519872',
                primaryLight: '#DAFBE5',
                secondary: '#F2C94C',
                error: '#E74C3C',
                errorLight: '#FFE3E3',
                neutral: '#F7F7F7',
                black: '#333333',
                gray3: '#EFEFEF',
            },
        },
    },
    plugins: [nextui()],
}

export default config
