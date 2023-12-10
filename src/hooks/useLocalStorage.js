import { useCallback, useEffect, useState } from 'react'

const writeToLocalStorage = (key, data) => {
	const stringifiedData = JSON.stringify(data)
	window.localStorage.setItem(key, stringifiedData)
}

const clearLocalStorageByKey = (key) => {
	window.localStorage.removeItem(key)
}

const useLocalStorage = (key, defaultValue) => {
	const [data, setData] = useState(() => {
		const item = window.localStorage.getItem(key)
		return item ? JSON.parse(item) : defaultValue
	})

	const set = useCallback(
		(localStorageData) => {
			writeToLocalStorage(key, localStorageData)
			setData(localStorageData)
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
			setData(item ? JSON.parse(item) : defaultValue)
		}

		window.addEventListener('storage', handler)

		return () => {
			window.removeEventListener('storage', handler)
		}
	}, [key, defaultValue])

	return [data, set, remove]
}

export default useLocalStorage
