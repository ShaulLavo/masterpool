import Image from 'next/image'
import Link from 'next/link'
import DarkModeToggle from './ModeTogle'
import he from '@/he.json'
import { DynamicLogo } from './Logo'

export default function Footer() {
	return (
		<footer className="bg-muted text-muted-foreground py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<DynamicLogo className=" pb-3" />
						<p>{he['footer.companyDescription']}</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							{he['footer.quickLinks.title']}
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#services" className="hover:underline">
									{he['footer.quickLinks.services']}
								</Link>
							</li>
							<li>
								<Link href="#gallery" className="hover:underline">
									{he['footer.quickLinks.gallery']}
								</Link>
							</li>
							<li>
								<Link href="#testimonials" className="hover:underline">
									{he['footer.quickLinks.testimonials']}
								</Link>
							</li>
							<li>
								<Link href="#faq" className="hover:underline">
									{he['footer.quickLinks.faq']}
								</Link>
							</li>
							<li>
								<Link href="#contact" className="hover:underline">
									{he['footer.quickLinks.contact']}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							{he['footer.followUs.title']}
						</h3>
						<div className="flex space-x-4 space-x-reverse">
							<Link href={'https://x.com/'}>
								<Image
									src="/icons/twitter.svg"
									alt="twitter"
									width={12}
									height={12}
								/>
							</Link>
							<Link href={'https://www.instagram.com/'}>
								<Image
									src="/icons/instagram.svg"
									alt="instagram"
									width={12}
									height={12}
								/>
							</Link>
							<Link href={'https://www.facebook.com/'}>
								<Image
									src="/icons/facebook.svg"
									alt="facebook"
									width={12}
									height={12}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>
						{he['footer.copyright'].replace(
							'{year}',
							new Date().getFullYear().toString()
						)}
					</p>
					<DarkModeToggle size={0.5} />
				</div>
			</div>
		</footer>
	)
}
