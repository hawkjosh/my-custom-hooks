import { Fragment, useRef, useState } from 'react'
import CustomModal from '@/components/ui/CustomModal'
import CustomButton from '@/components/ui/CustomButton'
import useArrayUpdate from '@/hooks/useArrayUpdate'

const InputForm = ({ array, onFormSubmit }) => {
	const [option, setOption] = useState('')
	const [idx1, setIdx1] = useState('')
	const [idx2, setIdx2] = useState('')
	const [val, setVal] = useState('')
	const [showIdx1, setShowIdx1] = useState(false)
	const [showIdx2, setShowIdx2] = useState(false)
	const [showVal, setShowVal] = useState(false)

	const options = [
		{ id: '1', name: 'Add to beginning' },
		{ id: '2', name: 'Add to end' },
		{ id: '3', name: 'Add before position' },
		{ id: '4', name: 'Remove first' },
		{ id: '5', name: 'Remove last' },
		{ id: '6', name: 'Remove at position' },
		{ id: '7', name: 'Fill all with same' },
		{ id: '8', name: 'Change at position' },
		{ id: '9', name: 'Swap two positions' },
	]

	const resetForm = () => {
		setOption('')
		setIdx1('')
		setIdx2('')
		setVal('')
		setShowIdx1(false)
		setShowIdx2(false)
		setShowVal(false)
	}

	const handleOptionChange = (e) => {
		resetForm()
		const choice = e.target.value
		setOption(choice)
		if (choice === '6') {
			setShowIdx1(true)
		} else if (choice === '3' || choice === '8') {
			setShowIdx1(true)
			setShowVal(true)
			return
		} else if (choice === '1' || choice === '2' || choice === '7') {
			setShowVal(true)
			return
		} else if (choice === '9') {
			setShowIdx1(true)
			setShowIdx2(true)
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
		if (option === '3' || option === '7' || option === '8') {
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
		<div className='p-3 text-sm'>
			<form
				className='flex flex-col w-full gap-4'
				onSubmit={handleSubmit}>
				<label
					className='flex flex-col gap-1'
					htmlFor='option'>
					<span>What do you want to do?</span>
					<select
						className='text-sm text-gray-400 rounded-md form-select'
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
						{options.map((option) => (
							<option
								className='text-gray-900'
								key={option.id}
								value={option.id}>
								{option.name}
							</option>
						))}
					</select>
				</label>
				<div className='flex items-center gap-8 mb-2'>
					<label
						htmlFor='idx1'
						className={showIdx1 ? 'block' : 'hidden'}>
						<span>
							{option === '3'
								? 'Before which position?'
								: option === '6' || option === '8'
								? 'At which position?'
								: option === '9'
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
						className={showIdx2 ? 'block' : 'hidden'}>
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
						className={`flex-col gap-1 ${showVal ? 'flex' : 'hidden'}`}>
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
				<input
					type='submit'
					value='Submit'
					disabled={
						option === '' ||
						(showIdx1 && idx1 === '') ||
						(showIdx2 && idx2 === '') ||
						(showVal && val === '')
					}
					className='w-1/4 m-auto font-bold text-white bg-green-500 border-2 border-black rounded-lg cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white disabled:bg-white'
				/>
			</form>
		</div>
	)
}

export default function ArrayUpdate() {
	const [open, setOpen] = useState(false)
	const { array, methods } = useArrayUpdate()
	const modalRef = useRef(null)

	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)

	const handleFormSubmit = (option, idx1, idx2, val) => {
		switch (option) {
			case '1':
				methods.unshift(val)
				break
			case '2':
				methods.push(val)
				break
			case '3':
				methods.splice(idx1, 0, val)
				break
			case '4':
				methods.shift()
				break
			case '5':
				methods.pop()
				break
			case '6':
				methods.splice(idx1, 1)
				break
			case '7':
				methods.fill(val)
				break
			case '8':
				methods.update(idx1, val)
				break
			case '9':
				methods.swap(idx1, idx2)
				break
			default:
				break
		}
		closeModal()
	}

	return (
		<Fragment>
			<div className='card'>
				<div className='text-blue-400 card-title'>FUN WITH ARRAYS</div>
				<div className='card-content'>
					<CustomButton
						className={`border hover:border-yellow-400 hover:text-red-600 hover:bg-yellow-400 ${
							open ? 'hidden' : 'block'
						}`}
						onClick={openModal}>
						CLICK HERE
					</CustomButton>
				</div>
			</div>
			<CustomModal
				open={open}
				closeModal={closeModal}
				ref={modalRef}
				className='z-10 bg-gray-400'>
				<div className='flex flex-col gap-3'>
					<div className='w-full text-3xl text-center'>
						[ {array.join(', ')} ]
					</div>
					<InputForm
						array={array}
						onFormSubmit={handleFormSubmit}
					/>
					<div className='flex items-center justify-center gap-4'>
						<CustomButton
							className='w-1/2 border hover:border-green-600 hover:text-white hover:bg-green-600'
							onClick={methods.reset}>
							Reset
						</CustomButton>
						<CustomButton
							className='w-1/2 border hover:border-red-500 hover:bg-red-500'
							onClick={closeModal}>
							Exit
						</CustomButton>
					</div>
				</div>
			</CustomModal>
		</Fragment>
	)
}
