import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import he from '@/he.json'

export default function Gallery({ images }: { images: { src: string }[] }) {
	return (
		<section id="gallery" className="py-20 bg-background text-foreground">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					{he['gallery.sectionTitle']}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{images.map(({ src }, index) => (
						<Card key={index}>
							<CardContent className="p-0">
								<div className="relative h-64 rounded-lg overflow-hidden">
									<Image
										src={src || '/placeholder.svg'}
										alt={`${he['gallery.imageAlt']} ${index + 1}`}
										fill
										style={{ objectFit: 'cover' }}
										className="transition-transform duration-300 hover:scale-110"
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
