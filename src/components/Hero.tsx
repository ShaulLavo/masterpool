import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HeroVideo } from './HeroVideo'
import he from '@/he.json'

export default function Hero() {
	return (
		<section className="relative text-white pb-20 pt-36">
			<HeroVideo />

			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 pointer-events-none" />
			<div className="relative container mx-auto px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
					{he['hero.title']}
				</h1>
				<p className="text-xl mb-8 drop-shadow-md">{he['hero.description']}</p>
				<Button
					className="text-base font-semibold"
					variant="secondary"
					size="lg"
					asChild
				>
					<Link href="#contact">{he['hero.button']}</Link>
				</Button>
			</div>
		</section>
	)
}
