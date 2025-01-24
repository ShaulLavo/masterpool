'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import he from '@/he.json'
import { ShieldCheck, Sparkles, PenToolIcon as Tools } from 'lucide-react'
import { motion } from 'motion/react'
import { H2 } from './ui/H2'
import { MagicCard } from './ui/magic-card'
const services = [
	{
		icon: ShieldCheck,
		title: he['services.items.0.title'],
		description: he['services.items.0.description']
	},
	{
		icon: Tools,
		title: he['services.items.1.title'],
		description: he['services.items.1.description']
	},
	{
		icon: Sparkles,
		title: he['services.items.2.title'],
		description: he['services.items.2.description']
	}
]

export default function Services() {
	return (
		<section id="services" className="py-20 bg-secondary">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<H2>{he['services.title']}</H2>
				</div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: {
								stagger: 0.2,
								staggerChildren: 0.2
							}
						}
					}}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 30 },
								show: { opacity: 1, y: 0 }
							}}
						>
							<Card>
								<MagicCard className="flex flex-col">
									<CardHeader>
										<service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
										<CardTitle className="text-center">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-center text-muted-foreground">
											{service.description}
										</p>
									</CardContent>
								</MagicCard>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
