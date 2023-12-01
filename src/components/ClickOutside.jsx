import { useRef, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside'
import CustomModal from '@/components/ui/CustomModal'
import CustomButton from '@/components/ui/CustomButton'

export default function ClickOutsideComponent() {
	const [open, setOpen] = useState(false)
	const modalRef = useRef(null)

	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)

	useClickOutside(modalRef, closeModal)

	return (
		<div className='card'>
			<div className='card-title'>useClickOutside</div>
			<div className='relative card-content'>
				<CustomButton
					className='bg-slate-100 text-neutral-900 hover:text-red-600 hover:bg-yellow-400'
					onClick={openModal}>
					Open
				</CustomButton>
				<CustomModal
					open={open}
					closeModal={closeModal}
					ref={modalRef}
					className='bg-gray-600'>
					<div className='flex flex-col justify-between h-full'>
						<div className='text-center'>
							You can click the close button OR click outside this area to close it!
						</div>
						<CustomButton
							onClick={closeModal}
							className='border hover:bg-red-500 w-fit place-self-center'>
							Close
						</CustomButton>
					</div>
				</CustomModal>
			</div>
		</div>
	)
}
