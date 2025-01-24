import he from '@/he.json'
import { Camera, CircleHelp, Cog, Info, Phone, Star } from 'lucide-react'

export const images1200 = [
	'/image/pool1-1200.webp',
	'/image/pool2-1200.webp',
	'/image/pool3-1200.webp',
	'/image/pool4-1200.webp',
	'/image/pool5-1200.webp',
	'/image/pool6-1200.webp'
]
export const images1920 = [
	'/image/pool1-1920.webp',
	'/image/pool2-1920.webp',
	'/image/pool3-1920.webp',
	'/image/pool4-1920.webp',
	'/image/pool5-1920.webp',
	'/image/pool6-1920.webp'
]

export const testimonials = [
	{
		quote: he['testimonials.0.quote'],
		name: he['testimonials.0.name'],
		designation: he['testimonials.0.designation']
	},
	{
		quote: he['testimonials.1.quote'],
		name: he['testimonials.1.name'],
		designation: he['testimonials.1.designation']
	},
	{
		quote: he['testimonials.2.quote'],
		name: he['testimonials.2.name'],
		designation: he['testimonials.2.designation']
	}
]

export const poolCarouselData = [
	{
		category: he['poolCarouselData.0.category'],
		title: he['poolCarouselData.0.title']
	},
	{
		category: he['poolCarouselData.1.category'],
		title: he['poolCarouselData.1.title']
	},
	{
		category: he['poolCarouselData.2.category'],
		title: he['poolCarouselData.2.title']
	},
	{
		category: he['poolCarouselData.3.category'],
		title: he['poolCarouselData.3.title']
	},
	{
		category: he['poolCarouselData.4.category'],
		title: he['poolCarouselData.4.title']
	},
	{
		category: he['poolCarouselData.5.category'],
		title: he['poolCarouselData.5.title']
	}
]

export const iconMap = {
	services: Cog,
	gallery: Camera,
	testimonials: Star,
	aboutUs: Info,
	faq: CircleHelp,
	contact: Phone
}

export const EMAIL_PUBLIC_KEY = 'lW7f6etcgJoqo4mGc'
export const EMAIL_SERVICE_ID = 'service_c6mtcp6'
export const EMAIL_TEMPLATE_ID = 'template_r6mfl8q'
