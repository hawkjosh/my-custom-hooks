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

export default function Array() {
	const { array, set, push, remove, filter, update, clear, reset } = useArray([
		1, 2, 3, 4, 5, 6,
	])

	return (
		<div className='card'>
			<div className='card-title'>useArray</div>
			<div className='card-content'>
				<div className={styles.wrapper}>
					<div className={styles.array}>[ {array.join(', ')} ]</div>
					<div className={styles.btnsGrid}>
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
	)
}
