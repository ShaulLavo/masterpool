'use client'

import { useModeStore } from '@/context/ThemeProvider'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
export function HeroVideo() {
	const videoRef = useRef<HTMLVideoElement>(null!)

	const isDark = useModeStore(state => state.isDark)

	const src = isDark
		? '/video/Luxurious_Pool_Night.mp4'
		: '/video/Luxurious_Pool.mp4'
	const bgImageSrc = isDark
		? '/image/Luxurious_Pool_Night.webp'
		: '/image/Luxurious_Pool.webp'

	const blurHash = isDark
		? 'L5D]uNt9004:s??cNLjW*^W@K,~X'
		: 'L5AAm]5u}pN200}k4:S#|V4=t,E0'
	useEffect(() => {
		videoRef.current?.load()
	}, [src])

	return (
		<>
			<Image
				src={bgImageSrc}
				alt="video"
				blurDataURL={blurHash}
				className="absolute top-0 left-0 w-full h-full object-cover"
				fill
				priority
			/>
			<video
				ref={videoRef}
				className="absolute top-0 left-0 w-full h-full object-cover"
				autoPlay
				muted
				loop
				playsInline
			>
				<source src={src} />
			</video>
		</>
	)
}
