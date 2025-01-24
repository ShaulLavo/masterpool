'use client'
import { send } from '@emailjs/browser'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import he from '@/he.json'
import { H2 } from './ui/H2'
import { AnimatedSubscribeButton } from './ui/animated-subscribe-button'
import { CheckIcon, ChevronLeftIcon } from 'lucide-react'
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from '@/consts'

const contactFormSchema = z.object({
	name: z.string().min(2, { message: he['contact.form.errors.nameMin'] }),
	email: z.string().email({ message: he['contact.form.errors.emailInvalid'] }),
	phone: z.string().min(7, { message: he['contact.form.errors.phoneMin'] }),
	message: z.string().min(0, { message: he['contact.form.errors.messageMin'] })
})

export default function Contact() {
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: ''
		}
	})

	function onSubmit(values: z.infer<typeof contactFormSchema>) {
		const emailTemplate = {
			from_name: values.name,
			from_email: values.email,
			from_phone: values.phone,
			message: values.message
		}

		send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailTemplate, EMAIL_PUBLIC_KEY)
			.then(response => console.log('SUCCESS!', response.status, response.text))
			.catch(err => console.log('FAILED...', err))
	}

	return (
		<section id="contact" className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<H2 className="text-3xl font-bold text-center mb-12">
					{he['contact.sectionTitle']}
				</H2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card>
						<CardHeader>
							<CardTitle>{he['contact.form.title']}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<Form {...form}>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{he['contact.form.nameLabel']}</FormLabel>
											<FormControl>
												<Input type="text" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{he['contact.form.emailLabel']}</FormLabel>
											<FormControl>
												<Input type="email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{he['contact.form.phoneLabel']}</FormLabel>
											<FormControl>
												<Input type="tel" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{he['contact.form.messageLabel']}</FormLabel>
											<FormControl>
												<Textarea rows={4} {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<AnimatedSubscribeButton
									onClick={form.handleSubmit(onSubmit)}
									isSubscribed={form.formState.isSubmitSuccessful}
									type="submit"
									className="w-36"
								>
									<span className="group inline-flex items-center">
										{he['contact.form.submitButton']}
										<ChevronLeftIcon className=" size-4 transition-transform duration-300 group-hover:-translate-x-1" />
									</span>
									<span className="group inline-flex items-center">
										{he['contact.form.submitButton.submitted']}

										<CheckIcon className="mr-2 size-4" />
									</span>
								</AnimatedSubscribeButton>
							</Form>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>{he['contact.details.title']}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-2">{he['contact.details.phone']}</p>
							<p className="mb-2">{he['contact.details.email']}</p>
							<p className="mb-2">{he['contact.details.address']}</p>
							<h3 className="text-xl font-semibold mt-6 mb-4">
								{he['contact.details.hours.title']}
							</h3>
							<p className="mb-2">{he['contact.details.hours.weekdays']}</p>
							<p className="mb-2">{he['contact.details.hours.friday']}</p>
							<p>{he['contact.details.hours.saturday']}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
