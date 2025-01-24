'use client'

import { images1200, images1920 } from '@/consts'
import { useClickOutside } from '@/hooks/useClickOutside'
import { cn } from '@/lib/utils'
import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconX
} from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, {
	createContext,
	JSX,
	RefObject,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'

interface CarouselProps {
	items: JSX.Element[]
	initialScroll?: number
}

type CarouselCard = {
	src: string
	title: string
	category: string
}

export const CarouselContext = createContext<{
	onCarouselCardClose: (index: number) => void
	currentIndex: number
}>({
	onCarouselCardClose: () => {},
	currentIndex: 0
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null)
	const [canScrollLeft, setCanScrollLeft] = React.useState(false)
	const [canScrollRight, setCanScrollRight] = React.useState(true)
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll
			checkScrollability()
		}
	}, [initialScroll])

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
			setCanScrollLeft(Math.abs(scrollLeft) < scrollWidth - clientWidth - 2)
			setCanScrollRight(scrollLeft < 0)
		}
	}

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
		}
	}

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
		}
	}

	const handleCarouselCardClose = (index: number) => {
		if (false) {
			setCurrentIndex(index)
		}
	}

	return (
		<CarouselContext.Provider
			value={{ onCarouselCardClose: handleCarouselCardClose, currentIndex }}
		>
			<div className="relative w-full">
				<div
					className="flex w-full overflow-x-scroll overscroll-x-auto py-10  scroll-smooth [scrollbar-width:none]"
					ref={carouselRef}
					onScroll={checkScrollability}
				>
					<div
						className={cn(
							'absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l'
						)}
					></div>

					<div className={cn('flex flex-row justify-start gap-4', 'mx-auto')}>
						{items.map((item, index) => (
							<motion.div
								initial={{
									opacity: 0,
									y: 20
								}}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: 'easeOut',
										once: true
									}
								}}
								key={'card' + index}
								className="last:pl-[5%]  rounded-3xl"
							>
								{item}
							</motion.div>
						))}
					</div>
				</div>
				<div className="flex justify-start gap-2 mr-10">
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-background flex items-center justify-center disabled:opacity-50"
						onClick={scrollLeft}
						disabled={!canScrollLeft}
					>
						<IconArrowNarrowLeft className="h-6 w-6 text-foreground" />
					</button>
					<button
						className="relative z-40 h-10 w-10 rounded-full bg-background flex items-center justify-center disabled:opacity-50"
						onClick={scrollRight}
						disabled={!canScrollRight}
					>
						<IconArrowNarrowRight className="h-6 w-6 text-foreground" />
					</button>
				</div>
			</div>
		</CarouselContext.Provider>
	)
}

interface CarouselCardProps {
	card: {
		title: string
		category: string
	}
	layout?: boolean
	index: number
	refs: RefObject<(HTMLDivElement | null)[]>
	maxHeight: number
}

export const CarouselCard = ({
	card,
	layout = true,
	index,
	refs,
	maxHeight
}: CarouselCardProps) => {
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null!)
	const { onCarouselCardClose } = useContext(CarouselContext)

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				handleClose()
			}
		}

		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open])

	useClickOutside(containerRef, () => handleClose())

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		onCarouselCardClose(index)
	}

	return (
		<>
			<AnimatePresence>
				{open && (
					<div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/40">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute inset-0"
						/>
						<motion.div
							ref={containerRef}
							layoutId={layout ? `card-${card.title}` : undefined}
							className="relative w-full h-full  mx-auto bg-transparent flex items-center justify-center p-4"
						>
							<motion.img
								layoutId={layout ? `img-${card.title}` : undefined}
								src={images1920[index]}
								className="absolute inset-0 object-cover w-full h-full rounded-xl"
							/>
							<div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-md">
								<motion.p
									layoutId={layout ? `category-${card.title}` : undefined}
									className="text-lg font-medium text-white"
								>
									{card.category}
								</motion.p>
								<motion.h2
									layoutId={layout ? `title-${card.title}` : undefined}
									className="text-3xl md:text-5xl font-semibold text-white mt-1"
								>
									{card.title}
								</motion.h2>
							</div>
							<button
								className="absolute top-4 left-4 h-10 w-10 bg-white dark:bg-black rounded-full flex items-center justify-center"
								onClick={handleClose}
							>
								<IconX className="h-6 w-6 text-black dark:text-white" />
							</button>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<motion.button
				layoutId={layout ? `card-${card.title}` : undefined}
				onClick={handleOpen}
				className="relative rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start"
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
				<motion.div
					style={{ minHeight: maxHeight }}
					// @ts-expect-error - ??
					ref={el => (refs.current[index] = el)}
					className="relative z-10 p-8  bg-black/40"
				>
					<motion.p
						layoutId={layout ? `category-${card.category}` : undefined}
						className="text-white text-sm md:text-base font-medium text-right"
					>
						{card.category}
					</motion.p>
					<motion.p
						layoutId={layout ? `title-${card.title}` : undefined}
						className="text-white text-xl md:text-3xl font-semibold max-w-xs text-right [text-wrap:balance] mt-2"
					>
						{card.title}
					</motion.p>
				</motion.div>
				<motion.img
					layoutId={layout ? `img-${card.title}` : undefined}
					src={images1200[index]}
					className="object-cover absolute inset-0 w-full h-full rounded-3xl"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				/>
			</motion.button>
		</>
	)
}
