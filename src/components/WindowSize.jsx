import useWindowSize from '@/hooks/useWindowSize'

export default function WindowSize() {
	const { width, height } = useWindowSize()
	
	return (
		<div className='card'>
			<div className='card-title'>useWindowSize</div>
			<div className='card-content'>
				<div className='flex items-center justify-center gap-2 text-sm sm:flex-col sm:gap-1'>
					Current window size:
					<div className='flex items-center gap-2'>
						<span className='flex-1 px-2 font-semibold text-center text-red-600 bg-yellow-400'>
							{width}px
						</span>
						by
						<span className='flex-1 px-2 font-semibold text-center text-red-600 bg-yellow-400'>
							{height}px
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
