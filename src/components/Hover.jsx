import { useRef, useState } from 'react'
import useHover from '@/hooks/useHover'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function Hover() {
	const elementRef = useRef()
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const hovered = useHover(elementRef)

	return (
		<>
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal open={open} onClose={handleClose} className="bg-gray-600">
				<div className="flex flex-col w-full h-full gap-3 text-sm place-content-center place-items-center">
					<div
						ref={elementRef}
						className={`w-32 h-24 rounded-lg flex place-items-center place-content-center cursor-default transition-colors duration-700 ${
							hovered ? 'bg-blue-400' : 'bg-orange-600'
						}`}
					>
						{hovered ? 'Hooray!!' : 'Hover me...'}
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
