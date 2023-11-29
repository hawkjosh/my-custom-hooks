import { useState } from 'react'

export default function useArray(arr) {
	const [array, setArray] = useState(arr)

	function push(arrEl) {
		setArray((a) => [...a, arrEl])
	}

	function filter(callback) {
		setArray((a) => a.filter(callback))
	}

	function update(idx, newArrEl) {
		setArray((a) => [
			...a.slice(0, idx),
			newArrEl,
			...a.slice(idx + 1, a.length),
		])
	}

	function remove(idx) {
		setArray((a) => [...a.slice(0, idx), ...a.slice(idx + 1, a.length)])
	}

	function clear() {
		setArray([])
	}

	function reset() {
		setArray(arr)
	}

	return { array, set: setArray, push, filter, update, remove, clear, reset }
}
