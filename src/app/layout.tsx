import '@/app/globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'
import he from '@/he.json'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: he['metadata.title'],
	description: he['metadata.description']
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="he" dir="rtl" suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
				<Script
					strategy="afterInteractive"
					src="/scripts/smoothScrollHref.js"
				/>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
