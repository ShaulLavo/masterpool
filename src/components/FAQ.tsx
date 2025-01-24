'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import he from '@/he.json'
import { H2 } from './ui/H2'

export default function FAQ() {
	return (
		<section id="faq" className="py-20 bg-secondary text-secondary-foreground">
			<div className="container mx-auto px-4">
				<H2 className="text-3xl font-bold text-center mb-12">
					{he['faq.sectionTitle']}
				</H2>

				<Accordion type="single" collapsible className="w-full">
					{Array.from({ length: Number(he['faq.count']) }, (_, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>
								{/* @ts-expect-error - h */}
								{he[`faq.items.${index}.question`]}
							</AccordionTrigger>
							<AccordionContent>
								{/* @ts-expect-error - h */}
								{he[`faq.items.${index}.answer`]}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
