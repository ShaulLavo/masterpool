'use client'

import {
	MorphingDialog,
	MorphingDialogTrigger,
	MorphingDialogContent,
	MorphingDialogClose,
	MorphingDialogImage,
	MorphingDialogContainer
} from '@/components/ui/morphing-dialog'
import { XIcon } from 'lucide-react'

export function ImageModal({ src, alt }: { src: string; alt: string }) {
	return (
		<MorphingDialog
			transition={{
				duration: 0.3,
				ease: 'easeInOut'
			}}
		>
			<MorphingDialogTrigger>
				<MorphingDialogImage
					src={src}
					alt={alt}
					style={{ objectFit: 'cover' }}
					className="transition-transform duration-300 hover:scale-110"
				/>
			</MorphingDialogTrigger>
			<MorphingDialogContainer>
				<MorphingDialogContent className="relative">
					<MorphingDialogImage
						src={src}
						alt={alt}
						className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
					/>
				</MorphingDialogContent>
				<MorphingDialogClose
					className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
					variants={{
						initial: { opacity: 0 },
						animate: {
							opacity: 1,
							transition: { delay: 0.3, duration: 0.1 }
						},
						exit: { opacity: 0, transition: { duration: 0 } }
					}}
				>
					<XIcon className="h-5 w-5 text-zinc-500" />
				</MorphingDialogClose>
			</MorphingDialogContainer>
		</MorphingDialog>
	)
}
