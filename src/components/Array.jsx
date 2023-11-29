import { useEffect, useRef, useState } from 'react'
import useArray from '@/hooks/useArray'

const styles = {
	wrapper: `flex flex-col gap-4 w-full px-2`,
	array: `flex py-1 overflow-hidden place-content-center whitespace-nowrap text-ellipsis`,
	btnsGrid: `grid grid-cols-2 gap-2`,
	yellow: `hover:text-red-600 hover:bg-yellow-400`,
	red: `hover:text-white hover:bg-red-600`,
	green: `hover:text-white hover:bg-green-600`,
	lg: `col-span-2 w-3/4 mb-2 justify-self-center`,
	btn: (hoverColor, size) => {
		return `flex p-1 text-xs font-bold transition-colors duration-300 border-none rounded bg-slate-100 text-neutral-900 place-content-center place-items-center`
			.concat(' ', hoverColor)
			.concat(' ', size)
	},
}

const InputModal = ({ openModal, closeModal, children }) => {
	const ref = useRef(null)

	useEffect(() => {
		if (!ref.current) return
		if (openModal) {
			ref.current.showModal()
		} else {
			ref.current.close()
		}
	}, [openModal])
	
	return (
		<dialog className='w-[80%] h-1/2 m-auto border-2 rounded-lg p-8' ref={ref} onCancel={closeModal} >
			{children}
			<button className='absolute font-extrabold top-2 right-4 ' onClick={closeModal}>X</button>
		</dialog>
	)
}

const InputForm = ({prompt1, prompt2}) => {
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')

	const handleInput1Change = (e) => setInput1(e.target.value)
	const handleInput2Change = (e) => setInput2(e.target.value)

	return (
		<div className='flex flex-col h-full gap-4 place-content-center'>
			<label htmlFor='input1' className='flex items-center gap-5'>
				{prompt1}
				<input
					type='text'
					id='input1'
					name='input1'
					value={input1}
					onChange={handleInput1Change}
					className='border-2 border-black rounded-lg'
				/>
			</label>
			<label htmlFor='input2' className='flex items-center gap-5'>
				{prompt2}
				<input
					type='text'
					id='input2'
					name='input2'
					value={input2}
					onChange={handleInput2Change}
					className='border-2 border-black rounded-lg'
				/>
			</label>
		</div>
	)
}

export default function Array() {
	const [modal, setModal] = useState(false)
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')
	const { array, set, push, remove, filter, update, clear, reset } = useArray([
		1, 2, 3, 4, 5, 6,
	])

	const handleModalOpen = () => setModal(true)
	const handleModalClose = () => setModal(false)

	const testArrFunc = () => {
		console.log('testArrFunc')
		handleModalOpen()
	}
	
	console.log(input1, input2)

	return (
		<>
			<div className='card'>
				<div className='card-title'>useArray</div>
				<div className='card-content'>
					<div className={styles.wrapper}>
						<div className={styles.array}>[ {array.join(', ')} ]</div>
						<div className={styles.btnsGrid}>
							
							<button
								className={styles.btn(styles.yellow, styles.lg)}
								onClick={testArrFunc}>
								Test Array Function
							</button>
							
							<button
								className={styles.btn(styles.yellow)}
								onClick={() => push(7)}>
								Add 7 to end
							</button>
							<button
								className={styles.btn(styles.yellow)}
								onClick={() => update(1, 9)}>
								Make 2nd # 9
							</button>
							<button
								className={styles.btn(styles.yellow)}
								onClick={() => remove(1)}>
								Remove 2nd #
							</button>
							<button
								className={styles.btn(styles.yellow)}
								onClick={() => filter((n) => n < 4)}>
								{`Make all < 4`}
							</button>
							<button
								className={styles.btn(styles.yellow, styles.lg)}
								onClick={() => set([1, 2, 3])}>
								Set to [1, 2, 3]
							</button>
							<button
								className={styles.btn(styles.red)}
								onClick={clear}>
								Clear
							</button>
							<button
								className={styles.btn(styles.green)}
								onClick={reset}>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
			<InputModal
				openModal={modal}
				closeModal={handleModalClose}>
				<InputForm prompt1='Select index' prompt2='Select value' />
			</InputModal>
		</>
	)
}
