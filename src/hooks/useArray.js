import { useState } from 'react'

export default function useArray() {
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
		swap: (index1, index2) => {
			;[array[index1], array[index2]] = [array[index2], array[index1]]
			setArray([...array])
		},
		reset: () => setArray(initialArray),
	}
	return { array, methods }
}
