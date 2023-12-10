import { useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function WindowSize() {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const { width, height } = useWindowSize()

	return (
		<>
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal open={open} onClose={handleClose} className="bg-gray-600">
				<div className="flex flex-col w-full h-full gap-3 text-sm place-content-center place-items-center">
					<div className="text-lg font-semibold">Current window size:</div>
					<div className="flex items-center gap-3">
						<span className="flex-1 text-2xl font-bold text-blue-400">
							{width}px
						</span>
						<span className="text-base">by</span>
						<span className="flex-1 text-2xl font-bold text-blue-400">
							{height}px
						</span>
					</div>
					<Button
						label={<IoCloseCircleOutline />}
						btnStyle="icon"
						onClick={handleClose}
						className="absolute top-0 right-0 text-xl text-gray-500 hover:text-white"
					/>
				</div>
			</Modal>
		</>
	)
}
