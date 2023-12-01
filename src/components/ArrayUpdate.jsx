import { useRef, useState } from 'react'
import CustomModal from '@/components/ui/CustomModal'
import CustomButton from '@/components/ui/CustomButton'

const InputForm = ({ array, onFormSubmit }) => {
	const [option, setOption] = useState('')
	const [idx1, setIdx1] = useState('')
	const [idx2, setIdx2] = useState('')
	const [val, setVal] = useState('')
	const [showIdx1, setShowIdx1] = useState(false)
	const [showIdx2, setShowIdx2] = useState(false)
	const [showVal, setShowVal] = useState(false)

	const options = [
		'add value before first',
		'add value after last',
		'add value elsewhere',
		'remove first value',
		'remove last value',
		'remove other value',
		'fill with same value',
		'change some value',
		'swap two values',
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
		if (choice === 'remove other value') {
			setShowIdx1(true)
		} else if (
			choice === 'add value elsewhere' ||
			choice === 'change some value'
		) {
			setShowIdx1(true)
			setShowVal(true)
			return
		} else if (
			choice === 'add value before first' ||
			choice === 'add value after last' ||
			choice === 'fill with same value'
		) {
			setShowVal(true)
			return
		} else if (choice === 'swap two values') {
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
		if (
			option === 'add value elsewhere' ||
			option === 'fill with same value' ||
			option === 'change some value'
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
		<div className='p-3 text-sm'>
			<form
				className='flex flex-col gap-4'
				onSubmit={handleSubmit}>
				<div className='flex flex-col gap-1'>
					<label htmlFor='option'>What would you like to do?</label>
					<select
						name='option'
						id='option'
						value={option}
						onChange={handleOptionChange}
						className='text-sm text-center border-2 border-black rounded-lg pe-4'>
						<option
              className='text-sm'
							value=''
							disabled>
							Select an option...
						</option>
						{options.map((option, index) => (
							<option
								key={index}
								value={option}
								className='text-sm text-black'>
								{option}
							</option>
						))}
					</select>
				</div>
				<div className='flex items-center gap-12 mb-12'>
					{showIdx1 && (
						<div className='flex flex-col gap-1'>
							<label htmlFor='idx1'>
								{option === 'add value elsewhere'
									? 'Before which position?'
									: option === 'remove other value' ||
									  option === 'change some value'
									? 'At which position?'
									: option === 'swap two values'
									? '1st position?'
									: ''}
							</label>
							<select
								name='idx1'
								id='idx1'
								value={idx1}
								onChange={handleIndexChange}
								className='text-2xl text-center border-2 border-black rounded-lg w-max pe-4'>
								<option
									value=''
									disabled>
									Select a position...
								</option>
								{array.map((_, index) => (
									<option
										key={index}
										value={index}
										className='text-black'>
										{index + 1}
									</option>
								))}
							</select>
						</div>
					)}
					{showIdx2 && (
						<div className='flex flex-col gap-1'>
							<label htmlFor='idx2'>2nd position?</label>
							<select
								name='idx2'
								id='idx2'
								value={idx2}
								onChange={handleIndexChange}
								className='text-2xl text-center border-2 border-black rounded-lg w-max pe-4'>
								<option
									value=''
									disabled>
									Select a position...
								</option>
								{array.map((_, index) => (
									<option
										key={index}
										value={index}
										className='text-black'>
										{index + 1}
									</option>
								))}
							</select>
						</div>
					)}
					{showVal && (
						<div className='flex flex-col gap-1'>
							<label htmlFor='val'>Enter a value...</label>
							<input
								type='text'
								id='val'
								name='val'
								value={val}
								onChange={handleValueChange}
								className='w-40 text-2xl text-center border-2 border-black rounded-lg'
							/>
						</div>
					)}
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
	const { array, methods } = useArray()
	const modalRef = useRef(null)

	const openModal = () => setOpen(true)
	const closeModal = () => setOpen(false)

	const handleFormSubmit = (option, idx1, idx2, val) => {
		switch (option) {
			case 'add value before first':
				methods.unshift(val)
				break
			case 'add value after last':
				methods.push(val)
				break
			case 'add value elsewhere':
				methods.splice(idx1, 0, val)
				break
			case 'remove first value':
				methods.shift()
				break
			case 'remove last value':
				methods.pop()
				break
			case 'remove other value':
				methods.splice(idx1, 1)
				break
			case 'fill with same value':
				methods.fill(val)
				break
			case 'change some value':
				methods.update(idx1, val)
				break
			case 'swap two values':
				methods.swap(idx1, idx2)
				break
			default:
				break
		}
		closeModal()
	}

	return (
		<div className='card'>
			<div className='text-blue-400 card-title'>FUN WITH ARRAYS</div>
			<div className='card-content'>
				<div className='flex flex-col gap-4 px-1'>
					<div className='overflow-hidden text-center place-content-center whitespace-nowrap text-ellipsis'>
						[ {array.join(', ')} ]
					</div>
					<div className='relative flex flex-col items-center gap-6'>
						{!open && (
            <>
              <CustomButton
  							className='w-3/4 border hover:border-yellow-400 hover:text-red-600 hover:bg-yellow-400'
  							onClick={openModal}>
  							Do something fun...
  						</CustomButton>
  						<CustomButton
  							className='w-1/2 border hover:border-green-600 hover:text-white hover:bg-green-600'
  							onClick={methods.reset}>
  							Reset
  						</CustomButton>
            </>
            )}
						<CustomModal
							open={open}
							closeModal={closeModal}
							ref={modalRef}>
							<InputForm
								array={array}
								onFormSubmit={handleFormSubmit}
							/>
						</CustomModal>
					</div>
				</div>
			</div>
		</div>
	)
}

function useArray() {
	const initialArray = [1, 2, 3, 4, 5]
	const [array, setArray] = useState(initialArray)
	const methods = {
		push: (value) => setArray([...array, value]),
		pop: () => setArray(array.slice(0, array.length - 1)),
		shift: () => setArray(array.slice(1)),
		unshift: (value) => setArray([value, ...array]),
		splice: (index, count, ...values) =>
			setArray([
				...array.slice(0, index),
				...values,
				...array.slice(index + count),
			]),
		remove: (index) =>
			setArray([...array.slice(0, index), ...array.slice(index + 1)]),
		fill: (value) => setArray(array.map(() => value)),
		update: (index, value) =>
			setArray([...array.slice(0, index), value, ...array.slice(index + 1)]),
		swap: (index1, index2) =>
			([array[index1], array[index2]] = [array[index2], array[index1]]),
		reset: () => setArray(initialArray),
	}
	return { array, methods }
}
