'use client'
import { Carousel, CarouselCard } from '@/components/ui/AppleCardsCarousel'
import { images1200, images1920, poolCarouselData } from '@/consts'
import { useEffect, useRef, useState } from 'react'
import he from '@/he.json'
import { H2 } from './ui/H2'

export function PoolCarousel() {
	const [maxHeight, setMaxHeight] = useState(0)
	useEffect(() => {
		images1200.forEach(src => {
			const img = new Image()
			img.src = src
		})
		images1920.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [])
	const refs = useRef<Array<HTMLDivElement | null>>(new Array(6).fill(null))
	useEffect(() => {
		const heights = refs.current.map(ref => ref?.offsetHeight || 0)
		setMaxHeight(Math.max(...heights))
	}, [])
	const cards = poolCarouselData.map((card, i) => (
		<div key={card.title}>
			<CarouselCard maxHeight={maxHeight} refs={refs} index={i} card={card} />
		</div>
	))

	return (
		<div id="gallery" className="w-full h-full py-20 bg-background">
			<div className=" px-4 container mx-auto">
				<H2>{he['poolCarousel.title']}</H2>
				<Carousel items={cards} />
			</div>
		</div>
	)
}
