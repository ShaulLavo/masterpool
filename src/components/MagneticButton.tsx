import { Magnetic } from '@/components/ui/magnetic'
import { Button } from './ui/button'
import { ComponentProps } from 'react'

export function MagneticButton({
	children,
	buttonProps
}: {
	children: React.ReactNode
	buttonProps: ComponentProps<typeof Button>
}) {
	const springOptions = { bounce: 0.1 }

	return (
		<Magnetic
			intensity={0.1}
			springOptions={springOptions}
			actionArea="global"
			range={200}
		>
			<Button {...buttonProps}>
				<Magnetic
					intensity={0.1}
					springOptions={springOptions}
					actionArea="global"
					range={200}
				>
					{children}
				</Magnetic>
			</Button>
		</Magnetic>
	)
}
