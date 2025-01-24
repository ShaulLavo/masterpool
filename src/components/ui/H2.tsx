import { cn } from '@/lib/utils'

export const H2 = ({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) => <h2 className={cn('text-3xl font-bold ', className)}>{children}</h2>
