'use client'

import { useModeStore } from '@/context/ThemeProvider'
import Image from 'next/image'
import he from '@/he.json'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
	return (
		<Image
			src="/icons/masterPool.svg"
			alt={he['logo.alt']}
			className={cn(`w-[150px] h-auto`, className)}
			priority
			width={0}
			height={0}
		/>
	)
}

export function DynamicLogo({ className }: { className?: string }) {
	const isDark = useModeStore(s => s.isDark)
	const src = isDark ? '/icons/masterPool-dark.svg' : '/icons/masterPool.svg'

	return (
		<Image
			src={src}
			alt={he['logo.alt']}
			className={cn(`w-[150px] h-auto`, className)}
			priority
			width={0}
			height={0}
		/>
	)
}
