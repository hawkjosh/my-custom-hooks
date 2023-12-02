import { useRef, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'

export default function ClickOutsideComponent() {
	const [open, setOpen] = useState(false)
	const modalRef = useRef(null)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	useClickOutside(modalRef, handleClose)

	return (
		<div className='card'>
			<div className='card-title'>useClickOutside</div>
			<div className='relative card-content'>
				<Button
					label='Open'
					className='px-2 py-1 border rounded-md hover:text-red-600 hover:bg-yellow-400 hover:border-yellow-400'
					onClick={handleOpen}
				/>
				<Modal
					open={open}
					onClose={handleClose}
					ref={modalRef}
					className='bg-gray-600'>
					<div className='flex flex-col justify-between h-full'>
						<div className='text-center'>
							You can click the button below OR click outside this area to close
							it!
						</div>
						<Button
							label='Close'
							className='px-2 py-1 border rounded-md hover:bg-red-500 place-self-center'
							onClick={handleClose}
						/>
					</div>
				</Modal>
			</div>
		</div>
	)
}
