import { useRef, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function ClickOutsideComponent() {
	const modalRef = useRef(null)
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	useClickOutside(modalRef, handleClose)

	return (
		<>
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal
				open={open}
				onClose={handleClose}
				modalRef={modalRef}
				className="bg-gray-600"
			>
				<div className="flex flex-col w-full h-full gap-3 place-content-center place-items-center">
					<div className="text-center">
						You can click the icon above OR click outside this area to close it!
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
