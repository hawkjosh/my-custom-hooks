import { useState } from 'react'
import useToggle from '@/hooks/useToggle'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { FaToggleOff } from 'react-icons/fa6'
import { FaToggleOn } from 'react-icons/fa6'
import { LuLightbulbOff } from 'react-icons/lu'
import { LuLightbulb } from 'react-icons/lu'

export default function Toggle() {
	const [open, setOpen] = useState(false)

	const [value, toggleValue] = useToggle(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => {
		setOpen(false)
		toggleValue(false)
	}

	return (
		<>
			<Button label="Open" btnStyle="open" onClick={handleOpen} />
			<Modal
				open={open}
				onClose={handleClose}
				className={`bg-gray-600 ${value && 'brightness-150'}`}
			>
				<div className="flex flex-col w-full h-full gap-8 text-sm place-content-center place-items-center">
					<div className="flex items-center w-full justify-evenly">
						{value ? (
							<LuLightbulb className="text-yellow-400 text-8xl" />
						) : (
							<LuLightbulbOff className="text-gray-400 text-8xl" />
						)}
						<div className="flex flex-col items-center gap-3">
							<Button
								label={
									value ? (
										<FaToggleOn className="text-3xl text-yellow-400" />
									) : (
										<FaToggleOff className="text-3xl text-gray-400" />
									)
								}
								btnStyle="icon"
								onClick={toggleValue}
								className="relative hover:transform-none"
							/>
							<Button
								label="On"
								onClick={() => toggleValue(true)}
								className={`hover:text-yellow-400 hover:border-yellow-400 ${
									value &&
									'text-yellow-400 border-yellow-400 pointer-events-none'
								}`}
							/>
							<Button
								label="Off"
								onClick={() => toggleValue(false)}
								className={`hover:text-gray-400 hover:border-gray-400 ${
									!value && 'text-gray-400 border-gray-400 pointer-events-none'
								}`}
							/>
						</div>
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
