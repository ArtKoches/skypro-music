import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'skypro-music',
	description: 'Music for soul',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
