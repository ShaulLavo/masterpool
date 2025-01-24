import {
	ImageComparison,
	ImageComparisonImage,
	ImageComparisonSlider
} from '@/components/ui/image-comparison'
import he from '@/he.json'

export function PoolComparison() {
	return (
		<div className="w-full bg-secondary">
			<div className="relative container mx-auto px-4 py-20">
				<h1 className="text-3xl font-bold text-center mb-12">
					{he['poolComparison.title']}
				</h1>
				<ImageComparison
					className="h-[800px] aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
					enableHover
					springOptions={{ bounce: 0.3 }}
				>
					<ImageComparisonImage
						src="/image/good-pool.webp"
						alt={he['poolComparison.sliderLabelAfter']}
						position="right"
					/>
					<ImageComparisonImage
						src="/image/bad-pool.webp"
						alt={he['poolComparison.sliderLabelBefore']}
						position="left"
					/>
					<ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs" />
				</ImageComparison>
				<div className="absolute top-2 left-4 bg-black/60 text-white px-2 py-1 rounded">
					{he['poolComparison.sliderLabelAfter']}
				</div>
				<div className="absolute top-2 right-4 bg-black/60 text-white px-2 py-1 rounded">
					{he['poolComparison.sliderLabelBefore']}
				</div>
			</div>
		</div>
	)
}
