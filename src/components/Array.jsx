import useArray from '@/hooks/useArray'

const w1 = `w-[45%]`
const w2 = `w-3/4 mb-1`
const h1 = `hover:text-red-600 hover:bg-yellow-400`
const h2 = `hover:text-white hover:bg-red-600`
const h3 = `hover:text-white hover:bg-green-600`

const btnStyle = (width, hover) => {
	return `border-none bg-slate-100 text-neutral-900 font-bold rounded text-xs flex place-content-center place-items-center p-1 transition-colors duration-300`
		.concat(' ', width)
		.concat(' ', hover)
}

const initArr = [1, 2, 3, 4, 5, 6]

export default function Array() {
	const { array, set, push, remove, filter, update, clear, reset } =
		useArray(initArr)

	return (
		<div className='card'>
			<div className='card-title'>useArray</div>
			<div className='card-content'>
				<div className='flex flex-col gap-4'>
					<div className='flex place-content-center py-1 overflow-hidden whitespace-nowrap'>
						[ {array.join(', ')} ]
					</div>
					<div className='flex flex-wrap justify-evenly gap-y-2'>
						<button
							className={btnStyle(w1, h1)}
							onClick={() => push(7)}>
							Add 7 to end
						</button>
						<button
							className={btnStyle(w1, h1)}
							onClick={() => update(1, 9)}>
							Make 2nd # 9
						</button>
						<button
							className={btnStyle(w1, h1)}
							onClick={() => remove(1)}>
							Remove 2nd #
						</button>
						<button
							className={btnStyle(w1, h1)}
							onClick={() => filter((n) => n < 4)}>
							{`Make all < 4`}
						</button>
						<button
							className={btnStyle(w2, h1)}
							onClick={() => set([1, 2, 3])}>
							Set to [1, 2, 3]
						</button>
						<button
							className={btnStyle(w1, h2)}
							onClick={clear}>
							Clear
						</button>
						<button
							className={btnStyle(w1, h3)}
							onClick={reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
