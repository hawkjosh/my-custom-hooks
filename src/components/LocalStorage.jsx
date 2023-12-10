import { useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/form/components/Input'
import { IoCloseCircleOutline } from 'react-icons/io5'

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
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal open={open} onClose={handleClose} className="bg-gray-600">
				<div className="flex flex-col w-full h-full gap-3 place-content-center place-items-center">
					<div className="flex flex-wrap items-center justify-center gap-2">
						<div>Stored data:</div>
						<div className="text-lg font-semibold text-red-500">{data}</div>
					</div>
					<Input
						name="storageValue"
						value={storageValue}
						onChange={(e) => setStorageValue(e.target.value)}
						placeholder="Enter a value..."
						className="text-sm text-center normal-case"
					/>
					<div className="flex w-full justify-evenly">
						<Button
							label="Save"
							btnStyle="open"
							onClick={handleSaveClick}
							className="text-xs"
						/>
						<Button
							label="Remove"
							btnStyle="close"
							onClick={handleRemoveClick}
							className="text-xs hover:bg-orange-400 hover:border-orange-400"
						/>
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
