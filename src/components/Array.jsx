import { useState } from 'react'
import useArray from '@/hooks/useArray'

import Button from '@/components/ui/Button'
import Form from '@/components/ui/form/Form'
import Input from '@/components/ui/form/components/Input'
import Modal from '@/components/ui/Modal'
import Select from '@/components/ui/form/components/Select'

import { RxReset } from 'react-icons/rx'
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function Array() {
	const [open, setOpen] = useState(false)
	const [formData, setFormData] = useState({
		option: '',
		idx1: '',
		idx2: '',
		val: ''
	})

	const handleOpen = () => setOpen(true)

	const handleClose = () => {
		setOpen(false)
		resetForm()
	}

	const { array, methods } = useArray()

	const optionsList = [
		{
			label: 'Add to beginning',
			value: 1,
			action: () => methods.unshift(formData.val)
		},
		{
			label: 'Add to end',
			value: 2,
			action: () => methods.push(formData.val)
		},
		{
			label: 'Add before position',
			value: 3,
			action: () => methods.splice(formData.idx1, 0, formData.val)
		},
		{
			label: 'Remove first',
			value: 4,
			action: () => methods.shift()
		},
		{
			label: 'Remove last',
			value: 5,
			action: () => methods.pop()
		},
		{
			label: 'Remove at position',
			value: 6,
			action: () => methods.splice(formData.idx1, 1)
		},
		{
			label: 'Fill all with same',
			value: 7,
			action: () => methods.fill(formData.val)
		},
		{
			label: 'Change at position',
			value: 8,
			action: () => methods.update(formData.idx1, formData.val)
		},
		{
			label: 'Swap two positions',
			value: 9,
			action: () => methods.swap(formData.idx1, formData.idx2)
		}
	]

	const positionsList = array.map((_, index) => ({
		label: index + 1,
		value: index
	}))

	const resetForm = () =>
		setFormData({
			option: '',
			idx1: '',
			idx2: '',
			val: ''
		})

	const handleFormChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: parseInt(value)
		})
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()

		const selectedAction = optionsList.find(
			(option) => option.value === formData.option
		)

		if (selectedAction) {
			selectedAction.action()
		}
		resetForm()
	}

	return (
		<>
			<Button label="Fun With Arrays" btnStyle="special" onClick={handleOpen} />
			<Modal open={open} onClose={handleClose} className="bg-gray-400">
				<div className="flex flex-col items-center w-4/5 gap-3">
					<div className="relative flex items-center justify-center w-full p-3 text-4xl bg-red-500">
						<div className="flex-1 text-center">[ {array.join(', ')} ]</div>
						<Button
							label={<RxReset />}
							btnStyle="icon"
							className="right-3 hover:text-yellow-400"
							onClick={methods.reset}
						/>
					</div>
					<Form handleFormSubmit={handleFormSubmit} className="flex gap-3">
						<Select
							label="Options"
							name="option"
							options={optionsList}
							value={formData.option}
							onChange={handleFormChange}
							placeholder="Select an option..."
							className=""
						/>
						{[3, 6, 8, 9].includes(formData.option) && (
							<Select
								label="1st Position"
								name="idx1"
								options={positionsList}
								value={formData.idx1}
								onChange={handleFormChange}
								placeholder="Select position..."
							/>
						)}
						{formData.option === 9 && (
							<Select
								label="2nd Position"
								name="idx2"
								options={positionsList.filter(
									(position) => position.value !== formData.idx1
								)}
								value={formData.idx2}
								onChange={handleFormChange}
								placeholder="Select position..."
							/>
						)}
						{[1, 2, 3, 7, 8].includes(formData.option) && (
							<Input
								label="Value"
								name="val"
								value={formData.val}
								onChange={handleFormChange}
								placeholder="Enter value..."
							/>
						)}
						<Button
							label="Submit"
							btnType="submit"
							btnStyle="open"
							disabled={
								formData.option === '' ||
								(formData.option === 6 && formData.idx1 === '') ||
								([1, 2, 7].includes(formData.option) && formData.val === '') ||
								([3, 8].includes(formData.option) &&
									(formData.idx1 === '' || formData.val === '')) ||
								(formData.option === 9 &&
									(formData.idx1 === '' || formData.idx2 === ''))
							}
							className="grid-col-5"
						/>
					</Form>
				</div>
				<Button
					label={<IoCloseCircleOutline />}
					btnStyle="icon"
					className="text-gray-500 right-3 top-3 hover:text-white"
					onClick={handleClose}
				/>
			</Modal>
		</>
	)
}
