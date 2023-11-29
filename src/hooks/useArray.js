import { useState } from 'react'

export default function useArray(arr) {
	const [array, setArray] = useState(arr)

	function push(el) {
		setArray((arr) => [...arr, el])
	}

	function filter(callback) {
		setArray((arr) => arr.filter(callback))
	}

	function update(idx, el) {
		setArray((arr) => [
			...arr.slice(0, idx),
			el,
			...arr.slice(idx + 1, arr.length),
		])
	}

	function remove(idx) {
		setArray((arr) => [...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)])
	}

	function clear() {
		setArray([])
	}

	function reset() {
		setArray(arr)
	}

	return { array, set: setArray, push, filter, update, remove, clear, reset }
}
