import { useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/form/components/Input'

export default function LocalStorage() {
	const [open, setOpen] = useState(false)
	const [data, setData, removeData] = useLocalStorage('myKey', '')
	const [storageValue, setStorageValue] = useState('')

	const handleSaveClick = () => {
		setData(storageValue)
		setStorageValue('')
	}

	const handleRemoveClick = () => {
		removeData()
	}

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

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
					<div className='flex flex-wrap items-center justify-center gap-2'>
						<div>Stored data:</div>
						<div className='text-lg font-semibold text-red-500'>{data}</div>
					</div>
					<Input
						name='storageValue'
						value={storageValue}
						onChange={(e) => setStorageValue(e.target.value)}
						placeholder='Enter a value...'
						className='text-sm text-center normal-case'
					/>
					<div className='flex w-full justify-evenly'>
						<Button
							label='Save'
							btnStyle='open'
							onClick={handleSaveClick}
							className='text-xs'
						/>
						<Button
							label='Remove'
							btnStyle='close'
							onClick={handleRemoveClick}
							className='text-xs hover:bg-orange-400 hover:border-orange-400'
						/>
						<Button
							label='Close'
							btnStyle='close'
							onClick={handleClose}
							className='text-xs'
						/>
					</div>
				</div>
			</Modal>
		</>
	)
}
