'use client'

import { AnimatedNumber } from '@/components/ui/animatedNumber'
import { useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import he from '@/he.json'

export function HappyCustomersCounter() {
	const [value, setValue] = useState(0)
	const ref = useRef(null)
	const isInView = useInView(ref)

	useEffect(() => {
		if (isInView) {
			setValue(Number(he['happyCustomers.value']))
		} else {
			setValue(0)
		}
	}, [isInView])

	return (
		<div className="flex w-full items-center justify-center" ref={ref}>
			<AnimatedNumber
				className="inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50"
				springOptions={{
					bounce: 0,
					duration: 2000
				}}
				value={value}
			/>
			<span className="mr-2 text-lg font-medium">
				{he['happyCustomers.label']}
			</span>
		</div>
	)
}
