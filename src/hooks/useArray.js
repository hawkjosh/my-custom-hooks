import { useState } from 'react'

export default function useArray(arr) {
	const [array, setArray] = useState(arr)

	function push(element) {
		setArray((a) => [...a, element])
	}

	function filter(callback) {
		setArray((a) => a.filter(callback))
	}

	function update(index, newElement) {
		setArray((a) => [
			...a.slice(0, index),
			newElement,
			...a.slice(index + 1, a.length),
		])
	}

	function remove(index) {
		setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
	}

	function clear() {
		setArray([])
	}

  function reset() {
    setArray(arr)
  }

	return { array, set: setArray, push, filter, update, remove, clear, reset }
}
