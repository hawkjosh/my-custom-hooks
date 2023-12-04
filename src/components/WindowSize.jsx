import { useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'

export default function WindowSize() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const { width, height } = useWindowSize()

	return (
		<>
			<Button
				label='Open'
				btnStyle='open'
				onClick={handleOpen}
			/>
			<Modal
				open={open}
				onClose={handleClose}
				className='bg-gray-600'>
				<div className='flex flex-col items-center justify-between w-full h-full text-sm'>
					<div className='text-lg font-semibold'>Current window size:</div>
					<div className='flex items-center gap-3'>
						<span className='flex-1 text-2xl font-bold text-blue-400'>
							{width}px
						</span>
						<span className='text-base'>by</span>
						<span className='flex-1 text-2xl font-bold text-blue-400'>
							{height}px
						</span>
					</div>
					<Button
						label='Close'
						btnStyle='close'
						onClick={handleClose}
					/>
				</div>
			</Modal>
		</>
	)
}
