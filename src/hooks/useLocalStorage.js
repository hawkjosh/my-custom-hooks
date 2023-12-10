import { useCallback, useEffect, useState } from 'react'

const writeToLocalStorage = (key, data) => {
	const stringifiedData = JSON.stringify(data)
	window.localStorage.setItem(key, stringifiedData)
}

const clearLocalStorageByKey = (key) => {
	window.localStorage.removeItem(key)
}

export default function useLocalStorage(key, defaultVal) {
	const [data, setData] = useState(() => {
		const item = window.localStorage.getItem(key)
		return item ? JSON.parse(item) : defaultVal
	})

	const set = useCallback(
		(storageData) => {
			writeToLocalStorage(key, storageData)
			setData(storageData)
		},
		[key]
	)

	const remove = useCallback(() => {
		clearLocalStorageByKey(key)
		setData(undefined)
	}, [key])

	useEffect(() => {
		const handler = () => {
			const item = window.localStorage.getItem(key)
			setData(item ? JSON.parse(item) : defaultVal)
		}

		window.addEventListener('storage', handler)

		return () => {
			window.removeEventListener('storage', handler)
		}
	}, [key, defaultVal])

	return [data, set, remove]
}
