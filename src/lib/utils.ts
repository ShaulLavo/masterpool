import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function isMobile(widthThreshold = 768): boolean {
	if (typeof window === 'undefined') return false
	const userAgent =
		typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : ''
	return (
		window.innerWidth < widthThreshold ||
		/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
			userAgent
		)
	)
}
