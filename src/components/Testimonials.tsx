import { Card, CardContent } from '@/components/ui/card'
import { HappyCustomersCounter } from './HappyCotumers'
import { testimonials } from '@/consts'
import he from '@/he.json'

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="overflow-hidden py-20 bg-secondary flex flex-col "
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					{he['testimonials.sectionTitle']}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card key={index}>
							<CardContent className="p-6">
								<p className="text-muted-foreground mb-4">
									&quot;{testimonial.quote}&quot;
								</p>
								<p className="font-semibold text-right">- {testimonial.name}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<div className="pt-2">
				<HappyCustomersCounter />
			</div>
		</section>
	)
}
