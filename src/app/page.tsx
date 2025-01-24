import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { DynamicAnimatedTestimonials } from '@/components/ui/AnimatedTestimonials'
import { PoolCarousel } from '@/components/PoolCarousel'
import { AboutUs } from '@/components/AboutsUs'
import { HappyCustomersCounter } from '@/components/HappyCotumers'

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<div className="overflow-hidden mx-auto ">
				<Services />
				<PoolCarousel />
				<DynamicAnimatedTestimonials />
				<div className="bg-secondary py-4">
					<HappyCustomersCounter />
				</div>

				<AboutUs />
				<FAQ />
				<Contact />
			</div>
			<Footer />
		</main>
	)
}
