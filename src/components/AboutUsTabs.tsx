'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import he from '@/he.json'
import { MagicCard } from './ui/magic-card'

export function AboutUsTabs() {
	const [activeIndex, setActiveIndex] = useState(0)

	const ITEMS = [
		{
			title: he['aboutUsTabs.items.0.title'],
			subtitle: he['aboutUsTabs.items.0.subtitle'],
			content: he['aboutUsTabs.items.0.content']
		},
		{
			title: he['aboutUsTabs.items.1.title'],
			subtitle: he['aboutUsTabs.items.1.subtitle'],
			content: he['aboutUsTabs.items.1.content']
		},
		{
			title: he['aboutUsTabs.items.2.title'],
			subtitle: he['aboutUsTabs.items.2.subtitle'],
			content: he['aboutUsTabs.items.2.content']
		}
	]

	return (
		<Card className="h-full">
			<MagicCard>
				<CardContent className="pt-6">
					<div className="mb-4 flex flex-wrap gap-2">
						{ITEMS.map((item, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
									activeIndex === index
										? 'bg-secondary text-secondary-foreground font-semibold underline'
										: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
								}`}
							>
								{item.title}
							</button>
						))}
					</div>
					<div className="overflow-hidden xl:h-[120px]">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="h-full"
							>
								<div className="overflow-y-auto h-full pr-2">
									<h3 className="mb-2 text-lg font-semibold">
										{ITEMS[activeIndex].subtitle}
									</h3>
									<p className="text-secondary-foreground">
										{ITEMS[activeIndex].content}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</CardContent>
			</MagicCard>
		</Card>
	)
}
