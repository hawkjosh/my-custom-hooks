import useWindowSize from '@/hooks/useWindowSize'

export default function WindowSize() {
	const { width, height } = useWindowSize()

	return (
		<div className='card'>
			<div className='card-title'>useWindowSize</div>
			<div className='card-content'>
				<div className='flex items-center gap-2 sm:flex-col sm:gap-1 text-sm justify-center'>
					Current window size:
					<div className='flex items-center gap-2'>
						<span className='bg-yellow-400 font-semibold text-red-600 px-2 flex-1 text-center'>
							{width}px
						</span>
						by
						<span className='bg-yellow-400 font-semibold text-red-600 px-2 flex-1 text-center'>
							{height}px
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
