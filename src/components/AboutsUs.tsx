'use client'

import { AboutUsTabs } from '@/components/AboutUsTabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import he from '@/he.json'
import { isMobile } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MagicCard } from './ui/magic-card'

export function AboutUs() {
	const ref = useRef(null)
	const mobile = isMobile()

	const isInView = useInView(ref, {
		once: true,
		amount: mobile ? 0.15 : 0.3
	})
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100
			}
		}
	}

	return (
		<section
			id="about-us"
			className="py-20 bg-gradient-to-b from-background to-secondary/20"
		>
			<motion.div
				ref={ref}
				className="container mx-auto px-4"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
			>
				<motion.h2
					className="text-3xl font-bold  text-center mb-12"
					variants={itemVariants}
				>
					{he['aboutUs.sectionTitle']}
				</motion.h2>

				<Card className="mb-8">
					<MagicCard>
						<CardContent className="pt-6">
							<div className="flex flex-col md:flex-row items-center gap-8">
								<motion.div className="w-full md:w-1/3" variants={itemVariants}>
									<Image
										src="/image/SHAHAF.webp"
										alt={he['aboutUs.founderName']}
										width={300}
										height={300}
										className="rounded-full mx-auto"
									/>
								</motion.div>
								<motion.div className="w-full md:w-2/3" variants={itemVariants}>
									<h3 className="text-2xl font-semibold mb-4 text-center md:text-right">
										{he['aboutUs.founderName']}
									</h3>
									<p className="text-center md:text-right">
										{he['aboutUs.founderDescription']}
									</p>
								</motion.div>
							</div>
						</CardContent>
					</MagicCard>
				</Card>

				<Separator className="my-8" />

				<motion.div
					className="grid md:grid-cols-2 gap-8"
					variants={containerVariants}
				>
					<motion.div variants={itemVariants}>
						<AboutUsTabs />
					</motion.div>
					<Card>
						<MagicCard>
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{he['aboutUs.tabsTitle']}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<motion.p variants={itemVariants}>
									{he['aboutUs.tabsContent']}
								</motion.p>
							</CardContent>
						</MagicCard>
					</Card>
				</motion.div>

				<Separator className="my-8" />

				<motion.div
					className="grid md:grid-cols-2 gap-8"
					variants={containerVariants}
				>
					<Card>
						<MagicCard>
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{he['aboutUs.designTitle']}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<motion.p variants={itemVariants}>
									{he['aboutUs.designContent']}
								</motion.p>
							</CardContent>
						</MagicCard>
					</Card>

					<Card>
						<MagicCard>
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{he['aboutUs.serviceTitle']}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<motion.p variants={itemVariants}>
									{he['aboutUs.serviceContent']}
								</motion.p>
							</CardContent>
						</MagicCard>
					</Card>
				</motion.div>
			</motion.div>
		</section>
	)
}
