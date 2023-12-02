import { useRef, useState } from 'react'
import useArray from '@/hooks/useArray'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { RxReset } from 'react-icons/rx'
import { IoCloseCircleOutline } from 'react-icons/io5'

const InputForm = ({ array, onFormSubmit }) => {
	const [option, setOption] = useState('')
	const [idx1, setIdx1] = useState('')
	const [idx2, setIdx2] = useState('')
	const [val, setVal] = useState('')
	const [showOption, setShowOption] = useState(true)
	const [showIdx1, setShowIdx1] = useState(false)
	const [showIdx2, setShowIdx2] = useState(false)
	const [showVal, setShowVal] = useState(false)

	const options = [
		'Add to beginning',
		'Add to end',
		'Add before position',
		'Remove first',
		'Remove last',
		'Remove at position',
		'Fill all with same',
		'Change at position',
		'Swap two positions',
	]

	const resetForm = () => {
		setOption('')
		setIdx1('')
		setIdx2('')
		setVal('')
		setShowOption(true)
		setShowIdx1(false)
		setShowIdx2(false)
		setShowVal(false)
	}

	const handleOptionChange = (e) => {
		resetForm()
		const choice = e.target.value
		setOption(choice)
		if (choice === 'Remove at position') {
			setShowIdx1(true)
			setShowOption(false)
			return
		} else if (
			choice === 'Add before position' ||
			choice === 'Change at position'
		) {
			setShowIdx1(true)
			setShowVal(true)
			setShowOption(false)
			return
		} else if (
			choice === 'Add to beginning' ||
			choice === 'Add to end' ||
			choice === 'Fill all with same'
		) {
			setShowVal(true)
			setShowOption(false)
			return
		} else if (choice === 'Swap two positions') {
			setShowIdx1(true)
			setShowIdx2(true)
			setShowOption(false)
			return
		}
	}

	const handleIndexChange = (e) => {
		const tVal = e.target.value
		const tName = e.target.name
		if (tVal < 0 || tVal >= options.length || isNaN(tVal)) {
			alert('Invalid array index. Try again.')
			tName === 'idx1' ? setIdx1('') : setIdx2('')
			return
		}
		tName === 'idx1' ? setIdx1(parseInt(tVal)) : setIdx2(parseInt(tVal))
		if (
			option === 'Add before position' ||
			option === 'Fill all with same' ||
			option === 'Change at position'
		) {
			setShowVal(true)
			return
		}
	}

	const handleValueChange = (e) => {
		const tVal = e.target.value
		if (isNaN(tVal)) {
			alert('Please enter a valid number. Try again.')
			setVal('')
			return
		} else setVal(parseInt(tVal))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onFormSubmit(option, idx1, idx2, val)
		resetForm()
	}

	return (
		<form className='flex flex-col w-full gap-4 pt-3 border-t'>
			<label
				className={`p-2 gap-4 items-center ${showOption ? 'flex' : 'hidden'}`}
				htmlFor='option'>
				<span>What do you want to do?</span>
				<select
					className='text-sm text-gray-400 rounded-md form-select w-max'
					name='option'
					id='option'
					value={option}
					onChange={handleOptionChange}>
					<option
						className='font-semibold'
						value=''
						disabled>
						Select an option...
					</option>
					{options.map((option, index) => (
						<option
							className='text-gray-900'
							key={index}
							value={option}>
							{option}
						</option>
					))}
				</select>
			</label>
			<div className='flex items-center gap-8 p-2'>
				<label
					htmlFor='idx1'
					className={`gap-4 items-center ${showIdx1 ? 'flex' : 'hidden'}`}>
					<span>
						{option === 'Add before position'
							? 'Before which position?'
							: option === 'Remove at position' ||
							  option === 'Change at position'
							? 'At which position?'
							: option === 'Swap two positions'
							? '1st position?'
							: ''}
					</span>
					<select
						className='text-sm text-gray-400 rounded-md form-select'
						name='idx1'
						id='idx1'
						value={idx1}
						onChange={handleIndexChange}>
						<option
							className='font-semibold'
							value=''
							disabled>
							Select position...
						</option>
						{array.map((_, index) => (
							<option
								key={index}
								value={index}
								className='text-gray-900'>
								{index + 1}
							</option>
						))}
					</select>
				</label>
				<label
					htmlFor='idx2'
					className={`gap-4 items-center ${showIdx2 ? 'flex' : 'hidden'}`}>
					<span>2nd position?</span>
					<select
						className='text-sm text-gray-400 rounded-md form-select'
						name='idx2'
						id='idx2'
						value={idx2}
						onChange={handleIndexChange}>
						<option
							className='font-semibold'
							value=''
							disabled>
							Select position...
						</option>
						{array.map((_, index) => (
							<option
								key={index}
								value={index}
								className='text-gray-900'>
								{index + 1}
							</option>
						))}
					</select>
				</label>
				<label
					htmlFor='val'
					className={`gap-4 items-center ${showVal ? 'flex' : 'hidden'}`}>
					<span>Enter a value...</span>
					<input
						type='text'
						id='val'
						name='val'
						value={val}
						onChange={handleValueChange}
						className='text-center text-black border rounded-lg form-input'
					/>
				</label>
			</div>
			<Button
				label='Submit'
				className='px-2 py-1 bg-green-500 border border-green-500 rounded-md w-fit hover:bg-green-400 hover:border-green-400 disabled:border-gray-200 place-self-center'
				disabled={
					option === '' ||
					(showIdx1 && idx1 === '') ||
					(showIdx2 && idx2 === '') ||
					(showVal && val === '')
				}
				onClick={handleSubmit}
			/>
		</form>
	)
}

export default function Array() {
	const [open, setOpen] = useState(false)
	const { array, methods } = useArray()
	const modalRef = useRef(null)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleFormSubmit = (option, idx1, idx2, val) => {
		switch (option) {
			case 'Add to beginning':
				methods.unshift(val)
				break
			case 'Add to end':
				methods.push(val)
				break
			case 'Add before position':
				methods.splice(idx1, 0, val)
				break
			case 'Remove first':
				methods.shift()
				break
			case 'Remove last':
				methods.pop()
				break
			case 'Remove at position':
				methods.splice(idx1, 1)
				break
			case 'Fill all with same':
				methods.fill(val)
				break
			case 'Change at position':
				methods.update(idx1, val)
				break
			case 'Swap two positions':
				methods.swap(idx1, idx2)
				break
			default:
				break
		}
	}

	return (
		<>
			<div className='card'>
				<div className='card-title'>useArray</div>
				<div className='card-content'>
					<Button
						label='Fun With Arrays'
						className={`uppercase text-yellow-500 border px-2 py-1 rounded-md border-yellow-500 hover:border-blue-400 hover:text-white hover:bg-blue-400 ${
							open ? 'hidden' : 'block'
						}`}
						onClick={handleOpen}
					/>
				</div>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				ref={modalRef}
				className='bg-gray-400'>
				<div className='flex flex-col items-center w-4/5 gap-3'>
					<div className='flex items-center justify-center w-full p-3 text-4xl bg-red-500'>
						<span className='flex-1 text-center'>[ {array.join(', ')} ]</span>
						<Button
							label={<RxReset />}
							className='text-3xl hover:transform hover:scale-125 hover:text-yellow-400'
							onClick={methods.reset}
						/>
					</div>
					<InputForm
						array={array}
						onFormSubmit={handleFormSubmit}
					/>
				</div>
				<Button
					label={<IoCloseCircleOutline />}
					className='absolute text-3xl right-3 top-3 hover:transform hover:scale-125 hover:text-gray-600'
					onClick={handleClose}
				/>
			</Modal>
		</>
	)
}
