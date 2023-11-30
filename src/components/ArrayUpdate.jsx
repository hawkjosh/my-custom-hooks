import { useEffect, useRef, useState } from 'react'

const styles = {
	wrapper: `flex flex-col gap-4 w-full px-2`,
	array: `flex py-1 overflow-hidden place-content-center whitespace-nowrap text-ellipsis`,
	btns: `flex flex-col gap-6 items-center`,
	action: `w-3/4 hover:text-red-600 hover:bg-yellow-400`,
	reset: `w-1/2 hover:text-white hover:bg-green-600`,
	btn: (btnType) => {
		return `flex p-1 text-xs font-bold transition-colors duration-300 border-none rounded bg-slate-100 text-neutral-900 place-content-center place-items-center`.concat(
			' ',
			btnType
		)
	},
}

const InputModal = ({ openModal, closeModal, children }) => {
	const ref = useRef()

	useEffect(() => {
		if (!ref.current) return
		if (openModal) {
			ref.current.showModal()
		} else {
			ref.current.close()
		}
	}, [openModal])

	return (
		<dialog
			className='w-3/4 p-8 m-auto border-2 rounded-lg'
			ref={ref}
			onCancel={closeModal}>
			{children}
			<button
				className='absolute font-extrabold transition-colors border-2 border-black rounded-full w-7 aspect-square top-2 right-2 hover:bg-black hover:text-white'
				onClick={closeModal}>
				X
			</button>
		</dialog>
	)
}

const InputForm = ({ onFormSubmit }) => {
	const [option, setOption] = useState('')
	const [idx1, setIdx1] = useState('')
	const [idx2, setIdx2] = useState('')
	const [val, setVal] = useState('')
	const [showIdx1, setShowIdx1] = useState(false)
	const [showIdx2, setShowIdx2] = useState(false)
	const [showVal, setShowVal] = useState(false)
	const [showSubmit, setShowSubmit] = useState(false)

	const options = [
		'add a value to end',
		'remove last value',
		'remove first value',
		'add a value to start',
    'add a value',
    'remove a value',
		'fill with a value',
		'change a value',
		'swap two values',
	]

	const handleOptionChange = (e) => {
		const choice = e.target.value
		setOption(choice)
		if (
			choice === 'add a value' ||
			choice === 'remove a value' ||
			choice === 'change a value' ||
			choice === 'swap two values'
		) {
			setShowIdx1(true)
			return
		} else if (
			choice === 'add a value to end' ||
			choice === 'add a value to start' ||
			choice === 'fill with a value'
		) {
			setShowVal(true)
			return
		} else setShowSubmit(true)
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
		if (option === 'add a value' || option === 'fill with a value' || option === 'change a value') {
			setShowVal(true)
			return
		} else if (option === 'swap two values') {
			setShowIdx2(true)
			return
		} else setShowSubmit(true)
	}

	const handleValueChange = (e) => {
		const tVal = e.target.value
		if (isNaN(tVal)) {
			alert('Please enter a valid number. Try again.')
			setVal('')
			return
		} else setVal(parseInt(tVal))
		setShowSubmit(true)
	}

	const resetForm = () => {
		setOption('')
		setIdx1('')
		setIdx2('')
		setVal('')
		setShowIdx1(false)
		setShowVal(false)
		setShowSubmit(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onFormSubmit(option, idx1, idx2, val)
		resetForm()
	}

	return (
		<div className='p-3'>
			<form
				className='flex flex-col gap-4'
				onSubmit={handleSubmit}>
				<div className='flex flex-col gap-1'>
					<label
						htmlFor='option'
						className=''>
						What would you like to do?
					</label>
					<select
						name='option'
						id='option'
						value={option}
						onChange={handleOptionChange}
						className='w-full text-2xl text-center border-2 border-black rounded-lg '>
						<option
							value=''
							disabled
						/>
						{options.map((option, index) => (
							<option
								key={index}
								value={option}
								className='text-black'>
								{option}
							</option>
						))}
					</select>
				</div>
				{showIdx1 && (
					<div className='flex items-center gap-2'>
						<label
							htmlFor='idx1'
							className=''>
							At which index?
						</label>
						<input
							type='text'
							id='idx1'
							name='idx1'
							value={idx1}
							onChange={handleIndexChange}
							className='w-10 h-10 text-2xl text-center border-2 border-black rounded-lg'
						/>
					</div>
				)}
				{showIdx2 && (
					<div className='flex items-center gap-2'>
						<label
							htmlFor='idx2'
							className=''>
							At which other index?
						</label>
						<input
							type='text'
							id='idx2'
							name='idx2'
							value={idx2}
							onChange={handleIndexChange}
							className='w-10 h-10 text-2xl text-center border-2 border-black rounded-lg'
						/>
					</div>
				)}
				{showVal && (
					<div className='flex items-center gap-2'>
						<label
							htmlFor='val'
							className=''>
							With what value?
						</label>
						<input
							type='text'
							id='val'
							name='val'
							value={val}
							onChange={handleValueChange}
							className='w-10 h-10 text-2xl text-center border-2 border-black rounded-lg'
						/>
					</div>
				)}
				{showSubmit && (
					<input
						type='submit'
						value='Submit'
						className='w-1/2 m-auto font-bold border-2 border-black rounded-lg h-1/4'
					/>
				)}
			</form>
		</div>
	)
}

export default function ArrayUpdate() {
	const [modal, setModal] = useState(false)
	const { array, methods } = useArray([1, 2, 3, 4, 5])

	const handleModalOpen = () => setModal(true)
	const handleModalClose = () => setModal(false)

	const handleFormSubmit = (option, idx1, idx2, val) => {
		switch (option) {
			case 'add a value to end':
				methods.push(val)
				break
			case 'remove last value':
				methods.pop()
				break
			case 'remove first value':
				methods.shift()
				break
			case 'add a value to start':
				methods.unshift(val)
				break
			case 'add a value':
				methods.splice(idx1, 0, val)
				break
			case 'remove a value':
				methods.splice(idx1, 1)
				break
			case 'fill with a value':
				methods.fill(val)
				break
			case 'change a value':
				methods.update(idx1, val)
				break
			case 'swap two values':
				methods.swap(idx1, idx2)
				break
			default:
				break
		}
		handleModalClose()
	}

	return (
		<div className='card'>
			<div className='text-blue-400 card-title'>FUN WITH ARRAYS</div>
			<div className='card-content'>
				<div className={styles.wrapper}>
					<div className={styles.array}>[ {array.join(', ')} ]</div>
					<div className={styles.btns}>
						<button
							className={styles.btn(styles.action)}
							onClick={handleModalOpen}>
							Do something fun...
						</button>

						<button
							className={styles.btn(styles.reset)}
							onClick={methods.reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
			<InputModal
				openModal={modal}
				closeModal={handleModalClose}>
				<InputForm onFormSubmit={handleFormSubmit} />
			</InputModal>
		</div>
	)
}

function useArray(arr) {
	const [array, setArray] = useState(arr)
	const methods = {
		push: (el) => setArray((arr) => [...arr, el]),
    pop: () => setArray((arr) => arr.slice(0, arr.length - 1)),
    shift: () => setArray((arr) => arr.slice(1)),
    unshift: (el) => setArray((arr) => [el, ...arr]),
    splice: (index, count, ...elements) => setArray((arr) => [...arr.slice(0, index), ...elements, ...arr.slice(index + count)]),
		remove: (index) =>
			setArray((arr) => [...arr.slice(0, index), ...arr.slice(index + 1)]),
		// filter: (callback) => setArray((arr) => arr.filter(callback)),
    fill: (value) => setArray((arr) => arr.map(() => value)),
		update: (index, newElement) =>
			setArray((arr) => [
				...arr.slice(0, index),
				newElement,
				...arr.slice(index + 1),
			]),
		swap: (idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]),
		reset: () => setArray(arr),
	}
	return { array, methods }
}
