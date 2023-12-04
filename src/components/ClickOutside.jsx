import { useRef, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'

export default function ClickOutsideComponent() {
	const modalRef = useRef(null)
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	useClickOutside(modalRef, handleClose)

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
				modalRef={modalRef}
				className='bg-gray-600'>
				<div className='flex flex-col justify-between h-full'>
					<div className='text-center'>
						You can click the button below OR click outside this area to close
						it!
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
