import Link from 'next/link'
import { DynamicLogo } from './Logo'
import he from '@/he.json'

export default function Header() {
	return (
		<header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center">
					<DynamicLogo />
				</div>
				<nav className="hidden md:flex space-x-6 space-x-reverse">
					<Link
						href="#services"
						className="text-foreground hover:text-primary transition-colors"
					>
						{he['header.nav.services']}
					</Link>
					<Link
						href="#gallery"
						className="text-foreground hover:text-primary transition-colors"
					>
						{he['header.nav.gallery']}
					</Link>
					<Link
						href="#testimonials"
						className="text-foreground hover:text-primary transition-colors"
					>
						{he['header.nav.testimonials']}
					</Link>
					<Link
						href="#about-us"
						className="text-foreground hover:text-primary transition-colors"
					>
						{he['header.nav.about']}
					</Link>
					<Link
						href="#faq"
						className="text-foreground hover:text-primary transition-colors"
					>
						{he['header.nav.faq']}
					</Link>
					<Link
						href="#contact"
						className="text-primary font-semibold hover:text-primary/80 transition-colors"
					>
						{he['header.nav.contact']}
					</Link>
				</nav>
			</div>
		</header>
	)
}
