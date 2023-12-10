import { useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function EventListener() {
	const [open, setOpen] = useState(false)
	const [key, setKey] = useState('')

	const handleOpen = () => setOpen(true)

	const handleClose = () => {
		setOpen(false)
		setKey('')
	}

	useEventListener('keydown', (e) => setKey(e.key))

	return (
		<>
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal open={open} onClose={handleClose} className="bg-gray-600">
				<div className="flex flex-col w-full h-full gap-3 place-content-center place-items-center">
					<div className="text-lg font-semibold">Last key pressed:</div>
					<div
						className={`bg-yellow-400 text-gray-500 italic font-md w-3/4 h-max px-1 py-4 rounded-md text-center ${
							key && 'text-red-600 font-extrabold text-3xl py-2'
						}`}
					>
						{key ? key : '(press a key)'}
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
